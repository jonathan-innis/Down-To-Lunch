var router = require('express').Router();
const db = require('../../mongoUtils').getDB();


router.post('/new', require('./new'));
router.get('/', require('./get'));
module.exports = router;