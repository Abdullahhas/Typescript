// important note
//typescript hamesha hmare code ko compile kare gi even agar error hai to bhi
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
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
//Access modifiers 
//public 
var bot = /** @class */ (function () {
    function bot(name) {
        this.name = name;
    }
    return bot;
}());
var b2 = new bot('b2');
b2.name = "bbbb"; // this is allowed because we use public
//private
var bot1 = /** @class */ (function () {
    function bot1(name) {
        this.name = name;
    }
    return bot1;
}());
var b3 = new bot1('b3');
// b3.name = 'jkk' // this is not allowed because we use private but still can compile our code
// when we make private and then inherit that class then it will not be accessible in child class
//protected means we can access in child class but not in object
var bot2 = /** @class */ (function () {
    function bot2(name) {
        this.name = name;
    }
    return bot2;
}());
var bot3 = /** @class */ (function (_super) {
    __extends(bot3, _super);
    function bot3(name) {
        return _super.call(this, name) || this;
    }
    return bot3;
}(bot2));
var b4 = new bot3('b4');
// b4.name = 'jkk' // this is not allowed because we use protected but still can compile our code
// if we dont want to change the value of a property then we use readonly
var bot4 = /** @class */ (function () {
    function bot4(name) {
        this.name = name;
    }
    return bot4;
}());
// b4.name = 'jkk' // this is not allowed because we use readonly but still can compile our code 
// ? means optional
//getters and setters
var bot5 = /** @class */ (function () {
    function bot5(_name) {
        this._name = _name;
    }
    Object.defineProperty(bot5.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    return bot5;
}());
var b5 = new bot5('b5');
b5.name = 'b6';
console.log(b5.name);
//static members
//static values ap bna  object bnae use kar sakte hain 
var Hero = /** @class */ (function () {
    function Hero() {
    }
    Hero.version = 1.1;
    return Hero;
}());
console.log(Hero.version); // can be possible even without made object because we make static
//Abstract classes
//abstract classes are those classes which can't be instantiated
var Hero1 = /** @class */ (function () {
    function Hero1() {
    }
    return Hero1;
}());
var Hero2 = /** @class */ (function (_super) {
    __extends(Hero2, _super);
    function Hero2() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = 'abd';
        return _this;
    }
    Hero2.prototype.getDetails = function () {
        return this.name;
    };
    return Hero2;
}(Hero1));
//functions
function add(a, b) {
    return a + b;
}
//function type
function abcdd(name, cb) {
    cb("ali");
}
abcdd('abd', function (name) {
    console.log(name);
});
//Rest parameters
function args() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
}
args(1, 2, 3, 4, 5, 6, 7, 8, 9, 0);
//spread
var arr1 = [1, 2, 3, 4, 5];
var arr2 = __spreadArray([], arr1, true);
function addd(a, b) {
    return a + b;
}
//add(1,2);
//add('a','b');
//generics
function identity(arg) {
}
identity('abc');
identity(1);
identity(true);
function anmd(obj) { }
anmd({ name: "abd", age: 2, key: "123" });
//generic classes
var Bottle = /** @class */ (function () {
    function Bottle(key) {
        this.key = key;
    }
    return Bottle;
}());
var b11 = new Bottle("dg");
var b12 = new Bottle(3);
//or
// let b12 = new Bottle<number>(3)
//Modules
//type assertions
// let assert : any = 12
// (assert as number)
//not null
// a! means a is not null or undefined
//type gaurds means typeof ka use karna
