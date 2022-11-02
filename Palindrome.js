let string = "naman";

function reverse(string){
let bag="";
 for(let i=0;i<=string.length;i++){
bag+=string[i];
}
return bag;
}

let reversed=reverse(string);

if(string==reversed){
console.log("is Palindrome");
} else {
 console.log("Is not Palindrome");
}