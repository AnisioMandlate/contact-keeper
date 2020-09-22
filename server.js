const express = require("express");

/** Initialize the app */

const app = express();

/** Define the routes for the application */

app.get("/", (req, res) => res.json({ msg: "Welcome to the API" }));
app.use("/api/users", require("./routes/users"));
app.use("/api/auth", require("./routes/auth"));
app.use("/api/contacts", require("./routes/contacts"));

/** Configure and initializing the PORT for the server */
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is up and running on port ${PORT}`));
