let User = require("./user");

function run() {
    let firstUser = new User("Vasya");
    let secondUser = new User("Danila");

    firstUser.hello(secondUser);
    secondUser.hello(firstUser);
}

if (module.parent) {
    exports.run = run();
} else {
    run();
}