import Router from 'express';
import passport from 'passport';

const routes = Router();

routes.get('/login', (req, res) => {
  res.render('login');
});

routes.get('/logout', (req, res) => {
  res.send('logging out');
});

// get consent screen
routes.get('/google', passport.authenticate('google', {
  scope: ['profile'],
}));

// callback route to redirect to
routes.get('/google/redirect', passport.authenticate('google'), (req, res) => {
  res.send('You have reached the callback URI');
});

export default routes;
