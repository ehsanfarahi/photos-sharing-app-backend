const adminSignupModel = require("../model/adminSignupModel");

exports.create = (req, res) => {
  // validate data
  if (!req.body) {
    res.status(400).send({ message: `Empty sign up form` });
  }

  // Create New Data
  const adminSignupData = new adminSignupModel({
    email: req.body.email,
    password: req.body.password,
  });

  // Save Data
  adminSignupData
    .save(adminSignupData)
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      res.status(500).send({ message: err.message || `Error occurred` });
    });
};

exports.find = (req, res) => {
  const id = req.query.id;
  if (req.query.id) {
    adminSignupModel
      .findById(id)
      .then((data) => {
        res.status(200).send(data);
      })
      .catch((err) => {
        res.status(500).send({ message: err.message });
      });
  } else {
    adminSignupModel
      .find()
      .then((data) => { 
        res.status(200).send(data);
      })
      .catch((err) => {
        res.status(500).send({ message: err.message });
      });
  }
};

exports.update = (req, res) => {
  if (!req.body) {
    res.status(400).send({ message: "Empty update form" });
  }

  const id = req.params.id;
  adminSignupModel
    .findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then((data) => {
      if (!data) {
        res.status(404).send({ message: `Cannot update user with id: ${id}` });
      } else {
        res.send(data);
      }
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};

exports.delete = (req, res) => {
  const id = req.params.id;

  adminSignupModel
    .findByIdAndDelete(id)
    .then((data) => {
      res.status(200).send({ message: "User deleted" });
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};
