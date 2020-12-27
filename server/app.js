require('dotenv').config();

var express = require('express');
var app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');

// my routes
const authRoutes = require("./routes/auth");
const userRoutes = require("./routes/user");
const categoryRoutes = require("./routes/category");
const productRoutes = require('./routes/product');
const orderRoutes = require('./routes/order');
const stripeRoutes = require('./routes/stripepayment');

mongoose.connect("mongodb+srv://karan:karanbhanushali@cluster0.mzvjk.mongodb.net/<dbname>?retryWrites=true&w=majority",
{   useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}).then(() => {
    console.log("DB IS CONNECTED")
})

// middleware
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());

// my routes
app.use("/api", authRoutes);
app.use("/api", userRoutes);
app.use("/api", categoryRoutes);
app.use("/api", productRoutes);
app.use("/api", orderRoutes);
app.use("/api", stripeRoutes);

var port = process.env.PORT || 8000;

app.get("/", (req, res) => {
    return res.send("hello world!!!")
})

app.listen(port, () => {
    console.log("port has started")
})