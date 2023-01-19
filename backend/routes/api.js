const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController')
const middlewares=require('../middlewares/verifyToken')

router.get('/', (req, res) => {
    res.send("From API route")
})

router.post('/signup', userController.userSignupPost);

router.post('/login', userController.userLoginPost);

router.get('/bookings',userController.bookingsGet);

router.get('/requests', userController.requestsGet);

router.get('/profile', middlewares.verifyToken, userController.profileGet);

module.exports = router;