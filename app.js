// let args = process.argv;

// for(let i=2;i<args.length;i++)
// {
//     console.log("HEllo "+args[i]);
// }

// console.log(process.argv);  


// let data = require("./math");
// console.log(data.sum(22,33));

// let info = require("./fruits");

// console.log(info[0].name);
import { sum,sub } from "./math.js";   
import { generate } from "random-words";

console.log(sum(2,3));
console.log(generate());       