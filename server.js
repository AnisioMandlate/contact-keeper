const express = require("express");
const connectDB = require("./config/db");
const path = require("path");

/** Initialize the app */

const app = express();

/** Connect to the database */

connectDB();

/** Middleware */
app.use(express.json({ extended: false }));

/** Define the routes for the application */

app.get("/", (req, res) => res.json({ msg: "Welcome to the API" }));
app.use("/api/users", require("./routes/users"));
app.use("/api/auth", require("./routes/auth"));
app.use("/api/contacts", require("./routes/contacts"));

/** Serve static files */

if (process.env.NODE_ENV === "production") {
  /** Set the static folder */

  app.use(express.static("client/build"));
  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
  );
}

/** Configure and initializing the PORT for the server */
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is up and running on port ${PORT}`));
