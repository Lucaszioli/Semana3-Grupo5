import dotenv from 'dotenv';
import express, {Express} from 'express';
import cors , {CorsOptions} from 'cors';
import MusicRouter from '../src/domains/Music/controller/index';
import ArtistRouter from '../src/domains/Artist/controller/index';
dotenv.config();

export const app: Express = express();

const options:CorsOptions = {
	credentials:true,
	origin: process.env.APP_URL
};

app.use(cors(options));
app.use(express.json());
app.use(express.urlencoded({
	extended:true
}));
app.use('/api/musics', MusicRouter);
app.use('/api/artists', ArtistRouter);

export default app;