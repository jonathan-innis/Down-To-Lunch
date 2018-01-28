var router = require('express').Router();

router.post('/', function (req, res) {
    let { id, first_name, last_name } = req.body;
    if (!id) {
        res.sendStatus(400);
    }
    else {
        console.log('I have an id! It is:', id);
        res.sendStatus(200);
    }
});

router.use('/users', require('./users'));

module.exports = router;