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
