const data = require('../data/friends');

console.log(data)

module.exports = function(expressApp) {
    expressApp.get('/api/friends', function(req, res) {
        res.json(data.people);
    });

    expressApp.post('/api/friends', function(req, res) {
        var postPerson = req.body;
        var person = new data.Person(postPerson.name, postPerson.photo, postPerson.scores)
        data.people.push(person);
        console.log(data.people);
        var friendFound = person.calcSurveyDiff(data.people);


        res.send(friendFound);
    });
}