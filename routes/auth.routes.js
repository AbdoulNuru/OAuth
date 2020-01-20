import Router from 'express';
import passport from 'passport';

const routes = Router();

routes.get('/login', (req, res) => {
    res.render('login');
});

routes.get('/logout', (req, res) => {
    res.send('logging out');
});

routes.get('/google', passport.authenticate('google', {
    scope: ['profile']
}));

export default routes;
