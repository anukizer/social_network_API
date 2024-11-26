// main routes
const router = require('express').Router();
const userRoutes = require('./userRoutes.js');
const thoughtRoutes = require('./thoughtRoutes.js');

router.use('/api/users', userRoutes);
router.use('/api/thoughts', thoughtRoutes);

module.exports = router;
