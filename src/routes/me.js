const express = require('express');
const router = express.Router();

const meController = require('../app/controllers/MeController');

// newscontroller.index

// Tính chất của routes là nó sẽ map từ trên xuống nếu đã map thằng ở trên rồi thì sẽ không map thằng ở dưới

router.get('/stored/courses', meController.storedCourses);
router.get('/trash/courses', meController.trashCourses);



// tuyến đường dưới gốc phải để dưới cùng
// router.get('/', courseController.index);

module.exports = router;
