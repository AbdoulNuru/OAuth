import passport from 'passport';
import GoogleStrategy from 'passport-google-oauth20';
import dotenv from 'dotenv';
import { AuthUsers } from '../db/models';

dotenv.config();

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  const whichUser = await AuthUsers.findOne({
    where: {
      id,
    },
    raw: true,
  });

  done(null, whichUser);
});

passport.use(
  new GoogleStrategy({
    callbackURL: '/auth/google/redirect',
    clientID: process.env.clientID,
    clientSecret: process.env.clientSecret,
  }, async (accessToken, refreshToken, profile, done) => {
    const userExist = await AuthUsers.findOne({
      where: {
        googleId: profile.id,
      },
      raw: true,
    });

    if (userExist) {
      console.log(userExist);
      done(null, userExist);
    } else {
      const newUser = await AuthUsers.create({
        username: profile.displayName,
        googleId: profile.id,
      });

      done(null, newUser);
    }
  }),
);
