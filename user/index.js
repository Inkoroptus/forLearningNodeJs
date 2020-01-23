var phrases = require('./ru');
// for exports

function User(name) {
    this.name = name;
}

User.prototype.hello = function(who) {
        console.log(phrases.Hello + ", " + who.name);
    }
    // ...
exports.User = User;