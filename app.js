import express from 'express';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.routes';
import passportSetup from './config/passport-setup';

dotenv.config();

const app = express();

app.set('view engine', 'ejs');

app.use('/auth', authRoutes);

app.get('/', (req, res) =>{
    res.render('home');
});

app.listen(3000, () => {
    console.log('OAuth server is running.... ');
});