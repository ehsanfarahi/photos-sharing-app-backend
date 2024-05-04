const adminSignupModel = require("../model/adminSignupModel");

exports.adminSignin = async (req, res) => {
    if (req.body.email && req.body.password) {
      const adminSigninData = await adminSignupModel.findOne(req.body);
  
      if (adminSigninData) {
        res.send(adminSigninData);
      } else {
        res.status(500).send("Admin not found");
      }
    } else {
      res.status(500).send("Wrong data entered");
    }
  };  