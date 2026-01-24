// const colors = ["red", "green", "blue"];

// for (let i = 0; i < colors.length; i++) {
// console.log(colors[i]);
// }



// function outer() {
// let count = 0;
// function inner() {
// count++;
// console.log(count);
// }
// return inner;
// }
// const counter = outer();

// counter();
// counter();
// counter();


// console.log(a);
// var a = 10;
// console.log(a);


// function addNumbers(a, b) {
//   return a + b;
// }
// const num1 = 5;
// const num2 = 10;

// const result = addNumbers(num1, num2);
// console.log("Sum:", result);

// map exmaple
// const nums = [1, 2, 3, 4];

// const squares = nums.map(num => num * num);

// console.log(squares);

// filter example

const nums = [1, 2, 3, 4, 5, 6];

const evenNumbers = nums.filter(num => num % 2 === 0);

console.log(evenNumbers);

// reduce example
const users = [
  { name: "A", age: 20 },
  { name: "B", age: 17 },
  { name: "C", age: 25 }
];
const names = users
  .filter(user => user.age >= 18)
  .map(user => user.name);

console.log(names);

function greet(name, callback) {
  console.log("Hello " + name);
  callback();
}

function sayBye() {
  console.log("Bye!");
}

greet("Ambika", sayBye);





async function getData() {
  try {
    const result = await fetchUserData(2);
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}

getData();


//repo practice
createUser = async (data) => {
    try {
      logger.info(`UserRepo >>>> createUser >>>> Creating user with email: ${data.email}, role: ${data.role}`);
      const user = await User.create(data);
