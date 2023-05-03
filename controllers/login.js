const router = require('express').Router();
const {User} = require('../models/User')

router.get('/', async (req, res) => {
  res.render('loguser');
});
router.post('/', async (req, res) => {
    try{
    const dbUserData = await User.create({
        email:req.body.email,
        password:req.body.password,
    })
    req.session.save(() => {
        req.session.loggedIn = true;
  
        res
          .status(200)
          .json({ user: dbUserData, message: 'You are now logged in!' });
      });
    }catch(err){

    }
    
})
module.exports = router;