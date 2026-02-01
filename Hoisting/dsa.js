// const a = 10;
//  a = 20;



// let b = 10;
//  b = 30;

// var c = 10;
// var c = 30;


// console.log(a)

// 1. Function Declaration
function add(a, b) {
  return a + b;
}

// 2. Function Expression
const add2 = function (a, b) {
  return a + b;
};

// 3. Arrow Function
const add3 = (a, b) => a + b;
 add3(2,5)


//  JWT generate token

const express = require("express");
const jwt = require("jsonwebtoken");

const app = express();
app.use(express.json());

const SECRET_KEY = "mysecretkey"; // keep in env in real apps

app.post("/login", (req, res) => {
  const { email, password } = req.body;

  // fake check (normally DB)
  if (email === "test@gmail.com" && password === "1234") {
    const token = jwt.sign(
      { userId: 1, role: "user" },
      SECRET_KEY,
      { expiresIn: "1h" }
    );

    return res.json({ token });
  }

  res.status(401).json({ message: "Invalid credentials" });
});


JWT middleware

function authMiddleware(req, res, next) {
  const authHeader = req.headers.authorization;

  if (!authHeader)
    return res.status(401).json({ message: "Token missing" });

  const token = authHeader.split(" ")[1]; // Bearer token

  jwt.verify(token, SECRET_KEY, (err, user) => {
    if (err)
      return res.status(403).json({ message: "Invalid token" });

    req.user = user;
    next();
  });
}

// 

const express = require("express");
const jwt = require("jsonwebtoken");

const app = express();
app.use(express.json());

const SECRET_KEY = "mysecretkey"; // keep in env in real apps

app.post("/login", (req, res) => {
  const { email, password } = req.body;

  // fake check (normally DB)
  if (email === "test@gmail.com" && password === "1234") {
    const token = jwt.sign(
      { userId: 1, role: "user" },
      SECRET_KEY,
      { expiresIn: "1h" }
    );

    return res.json({ token });
  }

  res.status(401).json({ message: "Invalid credentials" });
});


//protect routes

app.get("/profile", authMiddleware, (req, res) => {
  res.json({
    message: "Profile data",
    user: req.user
  });
});


