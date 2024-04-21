const min = parseInt(prompt("Enter the min value"));
const max = parseInt(prompt("Enter the max value"));

const a = Math.floor(Math.random()*(min-max+1)+min);

console.log(`Random value between${min}and ${max}is ${a}`);