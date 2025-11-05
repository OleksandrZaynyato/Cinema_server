import Film from "../film/film.model.ts";
import {HallModel} from "../hall/hall.model.ts";
import {SessionModel} from "./session.model.ts";
import {SessionFactory} from "./session.factory.ts";
import type {FilmInput} from "../film/film.types.ts";
import type {HallInput} from "../hall/hall.ts";

interface GenerateOptions {
    days?: number; // скільки днів уперед створювати
    sessionsPerDay?: number; // скільки сеансів на день у кожному залі
    deleteOld?: boolean; // чи чистити старі
}

export const SessionScheduler = {
    async generateRandomSessions({
                                     days = 3,
                                     sessionsPerDay = 3,
                                     deleteOld = true,
                                 }: GenerateOptions = {}) {
        const films = await Film.find({isShown: true});
        const halls = await HallModel.find();

        if (!films.length || !halls.length) {
            throw new Error("Not enough films or halls to generate sessions");
        }

        if (deleteOld) {
            const cutoff = new Date();
            cutoff.setDate(cutoff.getDate() - 1);
            await SessionModel.deleteMany({ startTime: { $lt: cutoff } });
        }

        const sessionsToCreate: any[] = [];
        const baseTimes = ["12:00", "15:00", "18:00", "20:00"];

        for (let d = 0; d < days; d++) {
            const date = new Date();
            date.setDate(date.getDate() + d);

            for (const hall of halls) {
                for (let i = 0; i < sessionsPerDay; i++) {
                    const time = baseTimes[i % baseTimes.length];
                    const startTime = getDateWithTime(date, time);

                    // 2️⃣ Перевіряємо, чи вже є сеанс у цьому залі в цей час
                    const existing = await SessionModel.findOne({
                        hallId: hall._id,
                        startTime: startTime,
                    });
                    if (existing) continue;

                    const randomFilm = films[Math.floor(Math.random() * films.length)];
                    const session = SessionFactory.create(
                        randomFilm._id.toString(),
                        hall._id.toString(),
                        startTime
                    );

                    sessionsToCreate.push(session);
                }
            }
        }

        if (!sessionsToCreate.length) {
            return { created: 0, message: "No new sessions were created" };
        }

        await SessionModel.insertMany(sessionsToCreate);
        return { created: sessionsToCreate.length };
    },
};

function getDateWithTime(date: Date, time: string): Date {
    const [h, m] = time.split(":").map(Number);
    const d = new Date(date);
    d.setHours(h, m, 0, 0);
    return d;
}