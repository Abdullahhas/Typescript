// important note
//typescript hamesha hmare code ko compile kare gi even agar error hai to bhi

//basic and priitibe data types
let id: number = 5;
let company: string = "Traversy Media";
let isPublished: boolean = true;
let x: any = "Hello";

let arr = [1, 2, 3, "abdullah", true, { name: "abd" }, { name: 12 }];

let a: number[] = [1, 2, 3, 4, 5];
let b: string[] = ["a", "b", "c", "d", "e"];

//tuples jis me ap fixed size bata de or kaha kia aye ga ye b bata de

let tup: [string, number] = ["ali", 3];
// let tup2: [string , number] = [3 , 'ali'] //we can't do this

//enum

enum UserRoles {
  ADMIN = "admin",
  GUEST = "guest",
  AUTHOR = "author",
}

UserRoles.ADMIN; //admin
UserRoles.GUEST; //guest
UserRoles.AUTHOR; //author

//any unknown void never null undefined
let any; // by default any type .. typescript off ho jati es me jo marzi assign kar do
any = 1;
any = "string";

let unknown: unknown; // by default unknown type .. is me b jo marzi assign kar do but type check karna parta hai kch karne se pehle
unknown = 1;
unknown = "string";
if (typeof unknown === "string") {
  console.log(unknown.toUpperCase());
} // ye hm any me nahi kar sakte

//void
function abcd(): void {
  console.log("hello");
}

let n: null; // null

let un: undefined; // undefined

//never
function error(message: string): never {
  throw new Error(message);
} // ye function kabhi khatam nahi hoga means never return kare ga
// is ke bad wale code ko b nahi chalne de ga

// intro to type inferece and type annotation

let inference = 5; // number matlab wo value dekh kar type decide kar leta hai
let annotation: number; // number matlab ye number type hai jis me hm khud bata de

//intro to type inference and type alias

//interface ka kam he object ke shape batana
//ap ke object me kia ho ga wo ap interface me batao ge

interface User {
  name: string;
  email: string;
  password: string;
  gender?: string; //agar bata dya to theek ni to error ni aye ga
}

function getDataOfuser(obj: User) {
  obj.name;
  obj.email;
  obj.password;
}

getDataOfuser({ name: "abd", email: "dg", password: "d" }); //hme yaha object pass karna hi pare ga

//extended interfaces
interface U1 {
  name: string;
  email: string;
}

interface Admin extends U1 {
  admin: boolean;
}

//two interfaces of same name are actually merged into one

interface A {
  name: string;
}

interface A {
  email: string;
}

//type aliases
type value = string | number | boolean; //khud ka data type bana sakte hain
let val: value = 5;

type arg = string | null;

function abc(a: arg) {}
// abc(true); // we cant do that
abc("abc");

// intersection types

//union
type A1 = string | number | boolean; // | ko union kehte hain

//intersection

type User2 = {
  name: string;
  email: string;
};

type Admin2 = User & {
  getDetails(User: string): void;
};

function getAdminDetails(admin: Admin2) {
  admin.name;
  admin.email;
  admin.getDetails("abc");
}

// fundamentals of classes and objects and constructors
class BottleMaker {
  name: string;
  price: number;

  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }
}

let b1 = new BottleMaker("b1", 20); //object banaya

//Access modifiers
//public

class bot {
  constructor(public name: string) {}
}

let b2 = new bot("b2");
b2.name = "bbbb"; // this is allowed because we use public

//private
class bot1 {
  constructor(private name: string) {}
}
let b3 = new bot1("b3");
// b3.name = 'jkk' // this is not allowed because we use private but still can compile our code

// when we make private and then inherit that class then it will not be accessible in child class

//protected means we can access in child class but not in object
class bot2 {
  constructor(protected name: string) {}
}

class bot3 extends bot2 {
  constructor(name: string) {
    // we cab change here
    super(name);
  }
}

let b4 = new bot3("b4");
// b4.name = 'jkk' // this is not allowed because we use protected but still can compile our code

// if we dont want to change the value of a property then we use readonly
class bot4 {
  constructor(readonly name: string) {}
}
// b4.name = 'jkk' // this is not allowed because we use readonly but still can compile our code

// ? means optional

//getters and setters
class bot5 {
  constructor(
    private _name: string //_ is lie lagaya he kio ke ye property getter setter me use ho gi
  ) {}

  get name() {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }
}

let b5 = new bot5("b5");
b5.name = "b6";
console.log(b5.name);

//static members

//static values ap bna  object bnae use kar sakte hain

class Hero {
  static version = 1.1;
}

console.log(Hero.version); // can be possible even without made object because we make static

//Abstract classes
//abstract classes are those classes which can't be instantiated
abstract class Hero1 {
  abstract name: string;
  abstract getDetails(): string;
}

class Hero2 extends Hero1 {
  name = "abd";
  getDetails() {
    return this.name;
  }
}

//functions
function add(a: number, b: number): number {
  return a + b;
}

//function type
function abcdd(name: string, cb: (name: string) => void) {
  cb("ali");
}

abcdd("abd", (name) => {
  console.log(name);
});

//Rest parameters
function args(...args: number[]) {}

args(1, 2, 3, 4, 5, 6, 7, 8, 9, 0);

//spread
let arr1 = [1, 2, 3, 4, 5];
let arr2 = [...arr1];

//function overloading
function addd(a: number, b: number): number;
function addd(a: string, b: string): string;
function addd(a: any, b: any): any {
  return a + b;
}

//add(1,2);
//add('a','b');

//generics
function identity<T>(arg: T) {}

identity<string>("abc");
identity<number>(1);
identity<boolean>(true);

//generic interface
interface Halua<T> {
  name: string;
  age: number;
  key: T;
}

function anmd(obj: Halua<string>) {}

anmd({ name: "abd", age: 2, key: "123" });

//generic classes

class Bottle<T> {
  constructor(public key: T) {}
}

let b11 = new Bottle("dg");
let b12 = new Bottle(3);
//or
// let b12 = new Bottle<number>(3)

//Modules

//type assertions
// let assert : any = 12

// (assert as number)

//not null

// a! means a is not null or undefined

//type gaurds means typeof ka use karna
