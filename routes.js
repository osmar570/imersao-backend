import cors from 'cors';
import postRoutes from './src/routes/postsRoutes.js';
import sobreRoutes from './src/routes/sobreRoutes.js';

const corsOptions = {
    origin: 'https://localhost:8000',
    optionsSuccessStatus: 200
}

const routes = (app, env) =>{
    app.use(cors(corsOptions));
    postRoutes(app);
    sobreRoutes(app);

}

export default routes;
