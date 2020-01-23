var db = require('./db');
let User = require("./user");

function run() {
    let firstUser = new User("Vasya");
    let secondUser = new User("Danila");

    firstUser.hello(secondUser);
    secondUser.hello(firstUser);

    console.log(db.getPhrase("Run successful"));
}

if (module.parent) {
    exports.run = run();
} else {
    run();
}