const express = require('express');
const router = express.Router();

const siteController = require('../app/controllers/SiteController');

router.use('/search', siteController.search);

// tuyến đường dưới gốc phải để dưới cùng
// Tạm ẩn
// router.use('/', siteController.index);

module.exports = router;
