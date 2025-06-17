const express = require("express");
const router = express.Router();

// const homeController = require("../controllers/homeController");
const homeController = require("../controllers/homecontroller");
const roomController = require("../controllers/roomController");
const adminController = require("../controllers/adminController");
const contactController = require("../controllers/contactController");
const feedbackController = require("../controllers/feedbackController");
const blogController = require("../controllers/blogController");

// Home and Static Pages
router.get("/", homeController.renderHome);
router.get("/about", homeController.renderAbout);
router.get("/contact", homeController.renderContact);
router.post("/contact", contactController.submitContact);
router.get("/feedback", homeController.renderFeedback);
router.post("/feedback/submit", feedbackController.submitFeedback);

// Booking / Rooms
router.post("/check-availability", roomController.checkAvailability);

// Admin
router.get("/admin/login", adminController.renderLogin);
router.post("/admin/login", adminController.login);
router.get("/admin/admin_dash", adminController.renderDashboard);

// Blog/News
router.get("/blogs", blogController.renderBlogs);
router.get("/news", blogController.renderNews);

module.exports = router;
