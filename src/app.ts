import express from 'express';
import cors from 'cors';
import filmRoutes from "./features/film/film.routes.ts";
import hallRoutes from "./features/hall/hall.routes.ts";
import sessionRoutes from "./features/session/session.routes.ts";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use('/api/films', filmRoutes);
app.use('/api/halls', hallRoutes);
app.use('/api/sessions', sessionRoutes);

export default app;