// Requiring path to so we can use relative routes to our HTML files
const path = require("path");

// Requiring our custom middleware for checking if a user is logged in
const isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function (app) {
  app.get("/", (req, res) => {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/members");
    }
    res.render('index')
  });

  app.get("/login", (req, res) => {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/members");
    }
    res.render('login')
  });

  app.get("/signup" , (req, res) => {
    // If the user already has an account send them to the members page
    res.render('signup')
  })


  // Here we've add our isAuthenticated middleware to this route.
  // If a user who is not logged in tries to access this route they will be redirected to the signup page
  app.get("/members", isAuthenticated, (req, res) => {
    res.render('members', {
      user: req.user
    })
  });


app.get("/game", isAuthenticated, (req, res) => {
  res.render('game')
  console.log(req.body)
})
app.get("/forms", isAuthenticated, (req, res) => {
  res.render('forms')
})

};
