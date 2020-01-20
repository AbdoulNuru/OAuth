import passport from 'passport';
import GoogleStrategy from 'passport-google-oauth20';
import dotenv from 'dotenv';

dotenv();

passport.use(new  GoogleStrategy({
    key: process.env.key
}), () => {
     
    }
);