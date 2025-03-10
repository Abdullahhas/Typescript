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

 
