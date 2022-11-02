function checkprime(num){
let factor=0;
for(let i=0;i<-num;i++){
 if(num%i==0){
 factor++;
}
if(factor==5){
return true 
} else {
return false 
}
 
let ans =checkprime(13);

if(ans==true){
console.log("IS Prime");
} else {
console.log("Not Prime");
}