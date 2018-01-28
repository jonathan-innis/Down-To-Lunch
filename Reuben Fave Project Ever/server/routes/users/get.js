const db = require('../../mongoUtils').getDB();
module.exports = function (req, res) {
    const { first_name, last_name, longitude, latitude } = req.query;
    db.collection('user').findOne({ 'first_name': first_name, 'last_name': last_name }, function(err, document) {
        if (err) throw err;
        else    {
            if(document) res.json(document);
            else res.sendStatus(404);
        }
        //res.sendStatus()
        //res.send()
        //res.json()
    })
    //findOne({})
}