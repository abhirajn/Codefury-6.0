const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require("dotenv").config();
// const adminRouter = require("./routes/admin");
const UserRoute = require("./routes/UserRoute.js");

const app = express();

app.use(cors());
app.use(express.json());

// app.use("/admin", adminRouter)
app.use("/user", UserRoute)

app.use(express.static("public"));
app.use("/", (req, res) => {
    res.send("hello world")
})

mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true });

app.listen( process.env.PORT || 8000, () => console.log('Server running on port 8000'));