const mongoose = require('mongoose');
const express = require('express');
require('dotenv').config()

const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const authRoutes = require("./routers/auth");
const userRoutes = require("./routers/user");
const usageRouter = require('./routers/usage'); // Adjust the path as needed


const passport = require('passport');

var session = require('express-session');
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


// Configure the Google OAuth2 strategy
// passport.use(new OAuth2Strategy({
//     authorizationURL: 'https://accounts.google.com/o/oauth2/auth',
//     tokenURL: 'https://accounts.google.com/o/oauth2/token',
//     clientID: '801486379998-agbopdvuqo9pnm1o7hcjdsij8oebsp1s.apps.googleusercontent.com',
//     clientSecret: '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',
//     callbackURL: 'http://localhost:3001/auth/google/callback', // This should be a route in your Mongoose app that handles the callback
//     scope: ['email', 'profile']
// },
// function(accessToken, refreshToken, profile, done) {


//     }));


// function ensureAuthenticated(req, res, next) {
//     if (req.isAuthenticated()) {
//       return next();
//     }
//     res.redirect('/login');
// }

// // Define a middleware function to check if the user's email is allowed
// function ensureEmailAllowed(req, res, next) {
//     const email = req.user.email;
//     if (email.endsWith('@myinstitute.edu')) {
//       return next();
//     }
//     res.status(403).send('Access denied.');
// }

// Define a restricted route that requires authentication and email validation
// app.get('/restricted', ensureAuthenticated, ensureEmailAllowed, (req, res) => {
//     res.send('This is a restricted page that requires authentication and email validation.');
// });

// Define a login route that uses OAuth authentication


// Define a callback route that handles the OAuth callback and redirects to the restricted route
// app.get('/auth/google/callback', passport.authenticate('google', { failureRedirect: '/login' }), (req, res) => {
//     res.redirect('/restricted');
// });


// app.get('/login', passport.authenticate('google'));

// // Define a route to handle the callback from Google
// app.get('/auth/google/callback',
// passport.authenticate('google', { failureRedirect: '/login' }),
// function(req, res) {
//     res.redirect('/');
// });


app.listen(3001, () => {
    console.log(`jebhdhbkd ${3001}`);
})
