let user = require("./user");

function run() {
    let firstUser = new user.User("Vasya");
    let secondUser = new user.User("Danila");

    firstUser.hello(secondUser);
    secondUser.hello(firstUser);
}

if (module.parent) {
    exports.run = run;
} else {
    run();
}