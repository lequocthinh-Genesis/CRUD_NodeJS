const Course = require('../models/Course');

const { mutipleMongooseToObject } = require('../../util/mongoose');


class SiteController {
    // [GET] /
    index(req, res, next) {

        // callback
        // Course.find({}, function (err, courses) {
        //     if (!err) {

        //         res.json(courses);
        //     }
        //     else {
        //         next(err);
        //         // res.status(400).json({ error: 'ERROR!!!!' });
        //     }
        // });

        // Promise
        // Course.find({}).then(courses => res.json(courses)).catch(next);

        // tạm ẩn

        Course.find({}).then(courses => {
            // courses = courses.map(course => course.toObject())
            res.render('home', { courses: mutipleMongooseToObject(courses) })
        }).catch(next);


        // res.json({
        //     name: 'test'
        // });
        // res.render('home');
    }

    // [GET] /search

    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController();
