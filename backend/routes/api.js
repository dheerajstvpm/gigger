const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");

const userController = require("../controllers/userController");
const middlewares = require("../middlewares/middlewares");

router.get("/", (req, res) => {
  res.send("From API route");
});

router.post(
  "/signup",
  check("name").notEmpty().withMessage("Please enter a Name"),
  check("username").notEmpty().withMessage("Please enter a username"),
  check("username")
    .matches(/^\w+([\._]?\w+)?@\w+(\.\w{2,3})(\.\w{2})?$/)
    .withMessage("Username must be a valid email id"),
  check("password")
    .matches(/[\w\d!@#$%^&*?]{8,}/)
    .withMessage("Password must contain at least eight characters"),
  check("password")
    .matches(/[a-z]/)
    .withMessage("Password must contain at least one lowercase letter"),
  check("password")
    .matches(/[A-Z]/)
    .withMessage("Password must contain at least one uppercase letter"),
  check("password")
    .matches(/\d/)
    .withMessage("Password must contain at least one number"),
  check("password")
    .matches(/[!@#$%^&*?]/)
    .withMessage("Password must contain at least one special character"),
  check("confirmPassword").custom((value, { req }) => {
    if (value !== req.body.password) {
      throw new Error("Passwords do not match");
    }
    return true;
  }),
  middlewares.signupValidation,
  middlewares.OTPStatus,
);

router.post("/login", userController.userLoginPost);

router.post("/adminLogin", userController.adminLoginPost);

router.get("/users", userController.usersGet);

// router.get('/token', middlewares.validToken);

router.get("/profile", middlewares.verifyToken, userController.profileGet);

router.post("/profile", middlewares.verifyToken, userController.profilePost);

router.post(
  "/imageUpload",
  middlewares.verifyToken,
  middlewares.imageUpload,
  userController.profileGet,
);

router.post(
  "/trackUpload",
  middlewares.verifyToken,
  middlewares.trackUpload,
  userController.profileGet,
);

router.post(
  "/albumArtUpload",
  middlewares.verifyToken,
  middlewares.albumArtUpload,
  userController.profileGet,
);

router.post(
  "/videoUpload",
  middlewares.verifyToken,
  middlewares.videoUpload,
  userController.profileGet,
);

router.post(
  "/thumbnailUpload",
  middlewares.verifyToken,
  middlewares.thumbnailUpload,
  userController.profileGet,
);

router.post(
  "/trackDelete",
  middlewares.verifyToken,
  middlewares.deleteTrack,
  userController.profileGet,
);

router.post(
  "/videoDelete",
  middlewares.verifyToken,
  middlewares.deleteVideo,
  userController.profileGet,
);

module.exports = router;
