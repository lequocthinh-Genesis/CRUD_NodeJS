const express = require('express');
const router = express.Router();

const newsController = require('../app/controllers/NewsController');

// newscontroller.index

router.get('/:slug', newsController.show);

// tuyến đường dưới gốc phải để dưới cùng
router.get('/', newsController.index);

module.exports = router;
