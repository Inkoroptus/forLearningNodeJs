let user = require("./user");

let firstUser = new user.User("Vasya");
let secondUser = new user.User("Danila");

firstUser.hello(secondUser);
secondUser.hello(firstUser);