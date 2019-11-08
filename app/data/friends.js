function Person(name, photo, scores) {
    this.name = name;
    this.photo = photo;
    this.scores = scores;

    this.calcSurveyDiff = function(people) {
        var prevScoreDiff = 50;
        var currScoreDiff = 0;
        var friendFound;
        people.forEach(person => {
            if (person.name != this.name) {
                for (var i = 0; i < person.scores.length; ++i) {
                    scoreDiff += Math.abs(person.scores[i] - this.scores[i]);
                }
                console.log(person.name + " has score of " + scoreDiff)
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

var people = [];
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

module.exports = { people, questions };