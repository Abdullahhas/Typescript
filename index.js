//basic and priitibe data types
var id = 5;
var company = 'Traversy Media';
var isPublished = true;
var x = 'Hello';
var arr = [1, 2, 3, "abdullah", true, { name: "abd" }, { name: 12 }];
var a = [1, 2, 3, 4, 5];
var b = ['a', 'b', 'c', 'd', 'e'];
//tuples jis me ap fixed size bata de or kaha kia aye ga ye b bata de
var tup = ["ali", 3];
// let tup2: [string , number] = [3 , 'ali'] //we can't do this 
//enum
var UserRoles;
(function (UserRoles) {
    UserRoles["ADMIN"] = "admin";
    UserRoles["GUEST"] = "guest";
    UserRoles["AUTHOR"] = "author";
})(UserRoles || (UserRoles = {}));
UserRoles.ADMIN; //admin
UserRoles.GUEST; //guest
UserRoles.AUTHOR; //author
//any unknown void never null undefined 
var any; // by default any type .. typescript off ho jati es me jo marzi assign kar do
any = 1;
any = 'string';
var unknown; // by default unknown type .. is me b jo marzi assign kar do but type check karna parta hai kch karne se pehle
unknown = 1;
unknown = 'string';
if (typeof unknown === 'string') {
    console.log(unknown.toUpperCase());
} // ye hm any me nahi kar sakte
//void
function abcd() {
    console.log('hello');
}
var n; // null
var un; // undefined
//never
function error(message) {
    throw new Error(message);
} // ye function kabhi khatam nahi hoga means never return kare ga
// is ke bad wale code ko b nahi chalne de ga
// intro to type inferece and type annotation
var inference = 5; // number matlab wo value dekh kar type decide kar leta hai
var annotation; // number matlab ye number type hai jis me hm khud bata de
function getDataOfuser(obj) {
    obj.name;
    obj.email;
    obj.password;
}
getDataOfuser({ name: 'abd',
    email: "dg",
    password: "d"
}); //hme yaha object pass karna hi pare ga
var val = 5;
function abc(a) {
}
// abc(true); // we cant do that
abc("abc");
function getAdminDetails(admin) {
    admin.name;
    admin.email;
    admin.getDetails('abc');
}
// fundamentals of classes and objects and constructors
var BottleMaker = /** @class */ (function () {
    function BottleMaker(name, price) {
        this.name = name;
        this.price = price;
    }
    return BottleMaker;
}());
var b1 = new BottleMaker("b1", 20); //object banaya
