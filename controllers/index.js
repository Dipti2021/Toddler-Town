const router = require('express').Router();
const apiRoutes = require('./api');
// imports our home-route
const homeRoutes = require('./home-routes.js');
const reviewRoutes = require('./review-routes.js');


router.use('/', homeRoutes);
router.use('/', reviewRoutes);
router.use('/api', apiRoutes);

router.use((req, res) => {
    res.status(404).end();
});
module.exports = router;