// REFACTORING
app.get('/dashboard', (req, res) => {
    let status = 401;
    let message = 'Tenes que entrar!';

    if (req.session.loggedIn) {
        status = 200;
        message = `Hola "${req.session.username}", como estas?`;
    }

    return res.status(status).send(message);
});
