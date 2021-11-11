const chorus = "blue";
// chorus = "Lets dance": Really cannot change the value of a const var
let repeat = 0;
// repeat = 10; This makes the code print only "until sun comes up"
while (repeat < 10) {
  if (repeat === 5) {
    console.log("*change key*");
  }
  console.log(chorus);
  repeat++;
}
console.log("Until the sun comes up!");
