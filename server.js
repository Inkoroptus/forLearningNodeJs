require("./user");

let firstUser = new User("Vasya");
let secondUser = new User("Danila");

firstUser.hello(secondUser);
secondUser.hello(firstUser);