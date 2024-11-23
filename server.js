import express from 'express';
import routes from './routes.js';


const app = express();
const env = process.env;
const port = 4190;
app.use(express.static("uploads"));

routes(app,env);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});



