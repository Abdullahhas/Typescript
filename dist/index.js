"use strict";
// let helloWorld = "Hello World";
let helloWorld = "Hello World";
//defining types
const user = {
    name: "abdullah",
    id: 0,
};
const user1 = {
    name: "abdullah",
    id: 0,
};
class UserAccount {
    constructor(name, id) {
        this.name = name;
        this.id = id;
    }
}
const user2 = new UserAccount("ali", 2);
//functions
function getAdminUser() {
    return {
        name: "admin",
        id: 3
    };
}
function deleteUser(user) {
    return "deleted";
}
function getStatus(status) {
    return status;
}
//generics
function createUser(name, id) {
    return {
        name,
        id
    };
}
