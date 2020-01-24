const express = require("express");
const router = express.Router();
const db = require("../config/database");
const Gig = require("../models/Gig");

// Get gig list
router.get("/", (req, res) =>
  Gig.findAll()
    .then(gigs => {
      res.render("gigs", {
        gigs
      });
    })
    .catch(err => console.log(err))
);

// Display add gig form
router.get("/add", (req, res) => res.render("add"));

// Add a gig
router.post("/add", (req, res) => {
  const data = {
    title: "Looking for a Angular developer",
    technologies: "react,javascript,html,css",
    budget: "$3000",
    decsription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque et dui tortor. Praesent sit amet neque odio. Vestibulum eu nibh libero. Aenean diam velit, accumsan id enim et, vulputate vulputate ante. Aliquam condimentum risus vel libero condimentum vehicula. Morbi imperdiet massa a tempus pulvinar. Praesent tempus sem sed felis bibendum pretium. Suspendisse nulla risus, vehicula vel dui nec, fermentum porttitor ex. Quisque consequat nec dui sed accumsan. ",
    contact_email: "user1@gmail.com"
  };

  let { title, technologies, budget, description, contact_email } = data;

  //Insert into table
  Gig.create({
    title,
    technologies,
    description,
    budget,
    contact_email
  })
    .then(gig => res.redirect("/gigs"))
    .catch(err => console.log(err));
});

module.exports = router;
