//basic and priitibe data types
let id: number = 5;
let company: string = 'Traversy Media';
let isPublished: boolean = true;
let x: any = 'Hello';

let arr = [1,2,3 , "abdullah", true , {name : "abd" } , {name : 12} ];

let a : number[] = [1,2,3,4,5 ];
let b : string[] = ['a','b','c','d','e'];

//tuples jis me ap fixed size bata de or kaha kia aye ga ye b bata de

let tup: [string , number] = ["ali" , 3] 
// let tup2: [string , number] = [3 , 'ali'] //we can't do this 


//enum

enum UserRoles {
    ADMIN = 'admin',
    GUEST = 'guest',
    AUTHOR = 'author'
}

UserRoles.ADMIN //admin
UserRoles.GUEST //guest
UserRoles.AUTHOR //author

//any unknown void never null undefined 
let any  // by default any type .. typescript off ho jati es me jo marzi assign kar do
any = 1;
any = 'string'; 

let unknown: unknown // by default unknown type .. is me b jo marzi assign kar do but type check karna parta hai kch karne se pehle
unknown = 1;
unknown = 'string';
if(typeof unknown === 'string'){
    console.log(unknown.toUpperCase());
} // ye hm any me nahi kar sakte
 
//void
function abcd () : void {
    console.log('hello');
}

 let n : null // null

let un:undefined // undefined

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
    name : string,
    email : string,
    password : string,
    gender? : string //agar bata dya to theek ni to error ni aye ga
}

function getDataOfuser(obj: User)
{
    obj.name
    obj.email
    obj.password
}
 
getDataOfuser({name : 'abd',
    email : "dg",
    password : "d"
}) //hme yaha object pass karna hi pare ga




//extended interfaces
interface U1 {
    name : string,
    email :string;
}

interface Admin extends U1{
    admin : boolean
}


//two interfaces of same name are actually merged into one

interface A {
    name : string
}

interface A{
    email :string
}

//type aliases 
type value = string|number|boolean; //khud ka data type bana sakte hain
let val : value = 5;

type arg = string | null;

function abc (a: arg){

}
// abc(true); // we cant do that
abc("abc");

// intersection types

//union
type A1 = string | number | boolean;  // | ko union kehte hain

//intersection

type User2 = {
    name : string,
    email : string
}

type Admin2 = User & {
    getDetails(User : string) : void
}

function getAdminDetails(admin :  Admin2){
    admin.name
    admin.email
    admin.getDetails('abc')
}


// fundamentals of classes and objects