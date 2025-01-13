const express = require('express');
const { createBusiness, updateBusinessStatus } = require('../controllers/businessController');
const { verifyToken } = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/create', verifyToken, createBusiness);
router.put('/update-status/:id', verifyToken, updateBusinessStatus);

module.exports = router;