const router = require('express').Router();
const { Daycare, Review } = require('../models');
const withAuth = require('../utils/auth');
const Agegroup = require('../models/Agegroup');



// GET all Daycares's cities
router.get("/daycare", async (req, res) => {
  try {
    const dbDaycareData = await Daycare.findAll({
      attributes: ["city"],
    });
    const citiesArr = dbDaycareData.map((city) => city.get({ plain: true }));
    const cities = [
      ...new Map(
        citiesArr.map((item) => [JSON.stringify(item), item])
      ).values(),
    ];
    console.log("cities", cities);
    res.render("daycareCities", {
      cities,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get("/", async (req, res) => {
  try {
    
        res.render("homepage", {
     
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  res.render('login');
});


router.get('/signup', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('signup');
});


router.get("/daycare/:city", withAuth, async (req, res) => {
  try {
    const dbDaycareData = await Daycare.findAll({
      where: {
        City: req.params.city,
      },
      include:[Agegroup]
    });
    const daycares = dbDaycareData.map((daycare) =>
      daycare.get({ plain: true })
    );
    console.log("daycares", daycares);
    res.render("daycare", {
      daycares,
      loggedIn: true,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});
router.get("/login", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }
  res.render("login");
});
router.get("/signup", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }
  res.render("signup");
});
module.exports = router;

