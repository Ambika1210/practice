console.log("abc")

//routes

app.get("/profile", authMiddleware, (req, res) => {
  res.json({
    message: "Profile data",
    user: req.user
  });
});


// callback hell
setTimeout(() => {
  console.log("Step 1");

  setTimeout(() => {
    console.log("Step 2");

    setTimeout(() => {
      console.log("Step 3");
    }, 1000);

  }, 1000);

}, 1000);
