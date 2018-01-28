var router = require('express').Router();

router.post('/new', require('./new'));
router.get('/', require('./get'));
module.exports = router;