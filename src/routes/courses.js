const express = require('express');
const router = express.Router();

const courseController = require('../app/controllers/CourseController');

// newscontroller.index

// Tính chất của routes là nó sẽ map từ trên xuống nếu đã map thằng ở trên rồi thì sẽ không map thằng ở dưới

router.get('/create', courseController.create);
router.post('/store', courseController.store);
router.get('/:id/edit', courseController.edit);
router.post('/handle-form-actions', courseController.handleFormActions);
router.put('/:id', courseController.update);
router.patch('/:id/restore', courseController.restore);
router.delete('/:id', courseController.delete);
router.delete('/:id/force', courseController.forceDelete);
router.get('/:slug', courseController.show);


// tuyến đường dưới gốc phải để dưới cùng
// router.get('/', courseController.index);

module.exports = router;
