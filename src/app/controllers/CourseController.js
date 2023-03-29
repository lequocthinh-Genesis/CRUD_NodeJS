const Course = require('../models/Course');

const { mongooseToObject } = require('../../util/mongoose');


class CourseController {
    // [GET] /
    // index(req, res, next) {

    //     Course.find({}).then(courses => {
    //         // courses = courses.map(course => course.toObject())
    //         res.render('home', { courses: mutipleMongooseToObject(courses) })
    //     }).catch(next);
    // }

    // [GET] /courses/:slug



    show(req, res, next) {

        Course.findOne({ slug: req.params.slug }).then(course => res.render('courses/show', { course: mongooseToObject(course) })).catch(next);

        // res.send('Course detail - ' + req.params.slug);
    }

    // [GET] /courses/create


    create(req, res, next) {

        // Course.findOne({ slug: req.params.slug }).then(course => res.render('courses/show', { course: mongooseToObject(course) })).catch(next);

        // res.send('Course create - ');
        res.render('courses/create');
    }

    // [POST] /courses/store

    store(req, res, next) {
        // res.json(req.body);
        // res.send('Course create - ');

        const formData = { ...req.body };
        formData.image = `https://files.fullstack.edu.vn/f8-prod/courses/6.png`;

        const course = new Course(formData);
        course.save().then(() => res.redirect('/me/stored/courses')).catch(error => { });

    }

    // [POST] /courses/:id/edit

    edit(req, res, next) {
        Course.findById(req.params.id).then(course => res.render('courses/edit', {
            course: mongooseToObject(course)
        })).catch(next);

    }

    // [PUT] /courses/:id

    update(req, res, next) {
        // Course.findById(req.params.id).then(course => res.render('courses/edit', {
        //     course: mongooseToObject(course)
        // })).catch(next);

        // res.json(req.body);
        Course.updateOne({ _id: req.params.id }, req.body).then(() => res.redirect('/me/stored/courses')).catch(next);


    }

    // [DELETE] /courses/:id

    delete(req, res, next) {
        // Xóa thật
        // Course.deleteOne({ _id: req.params.id }).then(() => res.redirect('back')).catch(next);

        // Xóa mềm
        Course.delete({ _id: req.params.id }).then(() => res.redirect('back')).catch(next);

    }

    // [DELETE] /courses/:id/force

    forceDelete(req, res, next) {
        // Xóa thật
        Course.deleteOne({ _id: req.params.id }).then(() => res.redirect('back')).catch(next);

        // Xóa mềm
        // Course.delete({ _id: req.params.id }).then(() => res.redirect('back')).catch(next);

    }

    // [PATCH] /courses/:id/restore
    restore(req, res, next) {
        Course.restore({ _id: req.params.id }).then(() => res.redirect('back')).catch(next);

    }

    // [POST] /courses/handle-form-actions
    handleFormActions(req, res, next) {
        // res.json(req.body);
        switch (req.body.action) {
            case 'delete':
                Course.delete({ _id: { $in: req.body.courseIds } }).then(() => res.redirect('back')).catch(next);
                break;
            default:
                res.json({ message: 'Action is invalid' });
        }
    }


}

// GET, POST, PUT, PATCH, DELETE, OPTIONS, HEAD

module.exports = new CourseController();
