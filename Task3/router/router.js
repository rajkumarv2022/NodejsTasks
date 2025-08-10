const express = require('express');

const router=express.Router();

const {getPrd,createPrd} = require('../controller/Product');

router.get('/get',getPrd);
router.post('/create',createPrd);

module.exports = router;