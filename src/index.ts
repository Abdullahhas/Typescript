// let helloWorld = "Hello World";
let helloWorld :string = "Hello World";

//defining types

const user ={
    name :"abdullah",
    id : 0,
}

//interface
interface User{
    name : string;
    id : number
}

const user1: User ={
    name :"abdullah",
    id : 0,
}

//classes
interface UserInterface{
    name : string;
    id : number
}

class UserAccount{
    name : string;
    id : number

    constructor(name : string, id : number){
        this.name = name;
        this.id = id;
    }   
}

const user2 = new UserAccount("ali",2);

//functions
function getAdminUser(): User{
    return {
        name : "admin",
        id : 3
    }
}

function deleteUser(user: User){
    return "deleted"
}

//union types
type Status = "success" | "failure";

function getStatus(status: Status){
    return status;
}

//generics

function createUser<T>(name: T, id: T){
    return {
        name,
        id
    }
}

