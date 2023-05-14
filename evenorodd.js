var readlineSync = require("readline-sync");
let num = readlineSync.question("enter a number");
if(num%2==0){
    console.log("you have entered a even number");
}else{
    console.log("you have entered a odd number");
}