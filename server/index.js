const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require("dotenv").config();
// const adminRouter = require("./routes/admin");
// const userRouter = require("./routes/user");

const app = express();

app.use(cors());
app.use(express.json());

// app.use("/admin", adminRouter)
// app.use("/", userRouter)

app.use(express.static("public"));
app.use("/*", (req, res) => {
    res.send("hello world")
})

mongoose.connect('', { useNewUrlParser: true, useUnifiedTopology: true, dbName: "courses" });

app.listen( process.env.PORT || 8000, () => console.log('Server running on port 8000'));