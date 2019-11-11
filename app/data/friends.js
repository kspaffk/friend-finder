function Person(name, photo, scores) {
    this.name = name;
    this.photo = photo;
    this.scores = scores;

    this.calcSurveyDiff = function(people) {
        var prevScoreDiff = 50;
        var friendFound;
        people.forEach(person => {
            var currScoreDiff = 0;
            if (person.name != this.name) {
                for (var i = 0; i < person.scores.length; ++i) {                   
                    currScoreDiff += Math.abs(person.scores[i] - this.scores[i]);
                }
                if (prevScoreDiff > currScoreDiff) {
                    prevScoreDiff = currScoreDiff;
                    friendFound = person;
                }
            }
        });
        if (friendFound) {
            return friendFound;
        }
        return false;
    }
}

var initPerson = new Person("Scott Farkus", "https://static.adweek.com/adweek.com-prod/wp-content/uploads/files/blogs/scut-farkus-hed-2016.jpg", [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]);

var people = [initPerson];
var questions = [
    "You spend way too much time curled up in a ball crying.",
    "You find time to shower every day.",
    "You apply the proper amount of deoderant before leaving the house.",
    "You comb through your hair daily.",
    "You watch tragic romantic comedies with a bowl of ice cream",
    "You daydream of talking to someone.",
    "You make your bed when you wake up.",
    "You leave the house.",
    "You can talk with others without making them feel uncomfortable.",
    "You have had a job since you were 21."
];

module.exports = { Person, people, questions };