const express = require("express");
const app = express();
require("dotenv").config();
const session = require("express-session");
const cors = require("cors");
const port = process.env.PORT || 2024;
const connect = require("./config/connect");
const serviceRoute = require("./Routes/userRoute");
const profileRoute = require("./Routes/profileRoute");
const appointmentRoute = require("./Routes/appointmentRoute");
const sectionRoute = require("./Routes/availabilityRoute");
const reviewRoute = require("./Routes/reviewRoute");
const Email = require("./Email/email");
const disabledDateRoutes = require('./Routes/disabledDateRoute');
const passport = require("passport");
require('./auth');

// Connect to the database
connect();

// CORS setup, allowing credentials
app.use(cors({
  origin: 'http://localhost:5173', // Frontend URL
  credentials: true
}));

// JSON parsing middleware
app.use(express.json());

// Session configuration (ensure this comes before passport)
app.use(
  session({
    secret: process.env.SESSION_SECRET || "defaultsecret", // Prefer environment variable
    resave: false,
    saveUninitialized: true,
    cookie: {
      httpOnly: false,
    }
  })
);

// Passport initialization
app.use(passport.initialize());
app.use(passport.session());

// Health check endpoint
app.get("/ping", (req, res) => {
  res.send("pong");
});

// Google OAuth routes
app.get('/auth/google',
  passport.authenticate('google', { scope: ['email', 'profile'] })
);

app.get('/auth/google/callback',
  passport.authenticate('google', { failureRedirect: 'http://localhost:5173/sign-up' }),
  (req, res) => {
    // Assuming req.user contains the authenticated user's information
    const userName = req.user.username;
    console.log(req.user)
    // res.redirect(`http://localhost:5173/profile/${userName}`);
    res.redirect(`http://localhost:5173/sign-up?isUpdatingProfile=true&username=${encodeURIComponent(userName)}`);
  }
);


app.get("/auth/failure", (req, res) => {
  res.send('Signup failed');
});

// Define application routes
app.use("/service", serviceRoute);
app.use("/profile", profileRoute);
app.use("/appointment", appointmentRoute);
app.use("/section", sectionRoute);
app.use("/review", reviewRoute);
app.use("/mail", Email);
app.use('/disabled-dates', disabledDateRoutes);

// Start the server
app.listen(port, () => {
  console.log(`🚀 Server running on PORT: ${port}`);
});

module.exports = app;
