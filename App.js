const mongoose = require('mongoose');
const express = require('express');
require('dotenv').config();
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const authRoutes = require("./routers/auth");
const userRoutes = require("./routers/user");
const usageRouter = require('./routers/usage'); // Adjust the path as needed


const passport = require('passport');
var session = require('cookie-session');
const app = express();


// Middle wares
app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors());
app.use(session({
  name : 'codeil',
  secret : 'something',
  resave :false,
  saveUninitialized: true,
  cookie : {
          maxAge:(1000 * 60 * 100)
  }      
}));

app.use(passport.initialize());
app.use(passport.session());


// Routes
app.use("/auth", authRoutes);
app.use("/user", userRoutes);
app.use('/usage', usageRouter);


app.get('/', (req, res) => {
    res.send('My worldooo!');
})

mongoose.set("strictQuery", false);
mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useCreateIndex: true,    
}).then(() => {
    console.log('DB IS CONNECTED');
});



app.listen(3001, () => {
    console.log(`jebhdhbkd ${3001}`);
})
