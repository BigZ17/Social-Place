const router = require('express').Router();
const thoughtsRoutes = require('./thoughts');
const userRoutes = require('./users');

// add prefix of `/pizzas` to routes created in `pizza-routes.js`
router.use('/thoughts', thoughtsRoutes);
router.use('/thoughts', userRoutes);

module.exports = router;3