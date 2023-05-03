const router = require('express').Router();
const homeRoutes = require('./home');
const login = require('./login')

router.use('/home', homeRoutes);
router.use('/login',login)

module.exports = router;
