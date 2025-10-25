import dotenv from 'dotenv/config';
import cors from 'cors';
import express from 'express';
import type { Request, Response } from 'express';
import {connectDB} from "./config/DB.ts";
import filmRoutes from "./modules/film/film.routes.ts";


const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

await connectDB();

app.use('/api/films', filmRoutes);

app.get('/api/hello', (req: Request, res: Response) => {
    res.json({ message: 'Hello from server (TS)!' });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
