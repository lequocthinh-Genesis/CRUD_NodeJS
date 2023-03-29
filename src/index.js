const path = require('path');
const express = require('express');
const morgan = require('morgan');
const methodOverride = require('method-override');
// const handlebars = require('express-handlebars');
// import { engine } from 'express-handlebars';
const app = express();
const port = 3000;


const SortMiddleware = require('./app/middlewares/sortMiddleware');


const route = require('./routes');
const db = require('./config/db');

// Connect DB

db.connect();

app.use(express.static(path.join(__dirname, 'public')));

// form
app.use(
    express.urlencoded({
        extended: true,
    }),
);
// XMLHttpRequest, fetch, axios,
app.use(express.json());

app.use(methodOverride('_method'));

// custom middleware
app.use(SortMiddleware);


// HTTP Logger
// app.use(morgan('combined'));

// Template engine
// app.engine('handlebars', handlebars());
// app.engine('handlebars', engine());
// app.set('view engine', 'handlebars');
// app.set('views', path.join(__dirname, 'resource/views'));
// fix bug
const hbs = require('express-handlebars');
app.engine(
    'hbs',
    hbs.engine({
        extname: '.hbs',
        helpers: require('./helpers/handlebars'),
    }),
);
app.set('view engine', 'hbs');
// app.set('views', './src/resource/views')
app.set('views', path.join(__dirname, 'resource', 'views'));

// Fix bug

// Routes init
route(app);

// console.log('PATH: ', path.join(__dirname, 'resource/views'));

// localhost: 127.0.0.1

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});
