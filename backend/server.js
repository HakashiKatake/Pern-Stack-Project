import express from 'express';
import helmet from 'helmet';
import morgan from "morgan";
import dotenv from 'dotenv';
import cors from 'cors';
import productRoutes from './routes/productRoutes.js';


const app = express();
const PORT = process.env.PORT || 3000;


app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(morgan('dev'));


app.use('/api/products', productRoutes);

app.listen(3000, () => {
    console.log('Server is running on port '+ PORT);
    });

