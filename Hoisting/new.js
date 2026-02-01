//callback hell
// setTimeout(() => {
//   console.log("Step 1");

//   setTimeout(() => {
//     console.log("Step 2");

//     setTimeout(() => {
//       console.log("Step 3");
//     }, 1000);

//   }, 1000);

// }, 1000);


// prototype
function Person(name) {
  this.name = name;
}

Person.prototype.sayHi = function () {
  console.log("Hi " + this.name);
};

const p1 = new Person("Ambika");
p1.sayHi();
