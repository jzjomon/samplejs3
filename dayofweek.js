var readlineSync = require("readline-sync");
let num = readlineSync.question("enter a number");
if(num==1){
    console.log("day:monday");
}else if(num==2){
    console.log("day:tuesday");
}else if(num==3){
    console.log("day:wednesday");
}else if(num==4){
    console.log("day:thursday");
}else if(num==5){
    console.log("day:friday");
}else if(num==6){
    console.log("day:saturday");
}else if(num==7){
    console.log("day:sunday");
}