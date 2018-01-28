var router = require('express').Router();

router.post('/', function (req, res) {
    let { id, first_name, last_name, longitude, latitude } = req.body;
    if (!id) {
        res.sendStatus(400);
    }
    else {
        console.log('I have an id! It is:', id);
        console.log('I have a first name! It is: ', first_name);
        console.log('I have a last name! It is: ', last_name);
        console.log('I have a longitude! It is: ', longitude);
        console.log('I have a latitude! It is: ', latitude);
        res.sendStatus(200);
    }
});



router.use('/users', require('./users'));

module.exports = router;