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
