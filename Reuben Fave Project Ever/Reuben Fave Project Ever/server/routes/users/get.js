const db = require('../../mongoUtils').getDB();


app.get('/', function(req, res){
    const { first_name, last_name, longitude, latitude, pin } = req.query;
    db.collection('user').findOne({ 'first_name': first_name, 'last_name': last_name, 'pin': pin }, function(err, document) {
        if (err) throw err;
        else    {
            if(document) res.send(document);
            else res.sendStatus(404);
            console.log("Hello");

}})

/*
module.exports = function (req, res) {
    const { first_name, last_name, longitude, latitude, pin } = req.query;
    db.collection('user').findOne({ 'first_name': first_name, 'last_name': last_name, 'pin': pin }, function(err, document) {
        if (err) throw err;
        else    {
            if(document) res.json(document);
            else res.sendStatus(404);
            console.log("Hello");

        }
        //res.sendStatus()
        //res.send()
        //res.json()
    })
    //findOne({})
}*/