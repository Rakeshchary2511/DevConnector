const express = require("express");
const connectDB = require("./config/db");

const app = express();

// Connect Database
connectDB();

//Init moddleware
app.use(express.json({ extended: false }));
app.get("/", (req, res) => res.send("API running"));

//Define Routes
app.use("/api/users", require("./routes/api/users.js"));
app.use("/api/auth", require("./routes/api/auth.js"));
app.use("/api/posts", require("./routes/api/posts.js"));
app.use("/api/profiles", require("./routes/api/profiles.js"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
