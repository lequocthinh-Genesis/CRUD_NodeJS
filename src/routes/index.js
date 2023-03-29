const newRouter = require('./news');
const meRouter = require('./me');
const coursesRouter = require('./courses');
const siteRouter = require('./site');

function route(app) {
    app.use('/news', newRouter);
    app.use('/me', meRouter);
    app.use('/courses', coursesRouter);
    app.use('/', siteRouter);

    // app.get('/', (req, res) => {
    //     // res.send('Hello World!')
    //     // res.send(' <h1>Hello world!</h1> ')
    //     res.render('home');

    // });

    // app.get('/news', (req, res) => {
    //     // res.send('Hello World!')
    //     // res.send(' <h1>Hello world!</h1> ')
    //     res.render('news');

    // });

    // app.get('/search', (req, res) => {
    //     // console.log(req.query);
    //     // console.log(req.query.q);
    //     res.render('search');
    // });

    // app.post('/search', (req, res) => {
    //     console.log(req.body);
    //     res.send('');
    // });
}

module.exports = route;
