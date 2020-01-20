import passport from 'passport';
import GoogleStrategy from 'passport-google-oauth20';
import dotenv from 'dotenv';

dotenv.config();

passport.use(
    new GoogleStrategy({
        callbackURL: '/auth/google/redirect',
        clientID: process.env.clientID,
        clientSecret: process.env.clientSecret
    }, () => {

    })
);