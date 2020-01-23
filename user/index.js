var log = require('logger')(module);
var db = require('db');
// for exports

function User(name) {
    this.name = name;
}

User.prototype.hello = function(who) {
    log(db.getPhrase("Hello") + ", " + who.name);
};
// ...

//module.exports = exports = this
// better use exports
module.exports = User;