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