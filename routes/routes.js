const express = require("express");
const multer = require("multer");
const path = require("path");

const router = express.Router();

const userController = require("../controller/userController"); 
const uploadPhotoController = require("../controller/uploadPhotoController");
const partyInfoController = require("../controller/partyInfoController"); 
const mainPhotoController = require("../controller/mainPhotoController"); 
const adminSignupController = require("../controller/adminSignupController");

const services = require("../services/render");

// user upload
router.post("/userUpload", userController.create);
router.get("/userUpload", userController.find);
router.put("/userUpload/:id", userController.update);
router.delete("/userUpload/:id", userController.delete);  

// photo upload
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "../client/src/uploads");     
  }, 
  filename: (req, file, cb) => {             
    cb(
      null,
      file.fieldname + "_" + Date.now() + path.extname(file.originalname) 
    );   
  },             
});                        
 
const upload = multer({ storage: storage });

router.post("/photoUpload", upload.array("file", 10), uploadPhotoController.create);
router.get("/photoUpload", uploadPhotoController.find);
router.put("/photoUpload/:id", uploadPhotoController.update);
router.delete("/photoUpload/:id", uploadPhotoController.delete);  
    
// party info upload
router.post("/partyInfoUpload", upload.single("file"), partyInfoController.create);
router.get("/partyInfoUpload", partyInfoController.find);
router.put("/partyInfoUpload/:id", partyInfoController.update);
router.delete("/partyInfoUpload/:id", partyInfoController.delete);   
 
// main photo upload
router.post("/mainPhotoUpload", upload.single("file"), mainPhotoController.create);
router.get("/mainPhotoUpload", mainPhotoController.find);
router.put("/mainPhotoUpload/:id", upload.single("file"), mainPhotoController.update); 
router.delete("/mainPhotoUpload/:id", mainPhotoController.delete);  

// Admin Sign in
router.post("/admin-signin", services.adminSignin);

// Admin Signup
router.post("/admin-signup", adminSignupController.create);
  
  
module.exports = router;  
     