// for exports

function User(name) {
    this.name = name;
}

User.prototype.hello = function(who) {
        console.log("Hello, " + who.name);
    }
    // end

console.log("user.js is required");
global.User = User;