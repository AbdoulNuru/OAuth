import Router from 'express';

const routes = Router();

routes.get('/login', (req, res) => {
    res.render('login');
});

routes.get('/logout', (req, res) => {
    res.send('logging out');
});

routes.get('/google', (req, res) => {
    res.send('logging in with google');
});

export default routes;
