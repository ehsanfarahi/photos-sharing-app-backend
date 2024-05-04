const userModel = require("../model/userModel")

exports.create = async (req, res) => {
  // Validation
  if (!req.body) {
    res.status(400).send({ message: "Empty form" });
  }

  // Create User data
  const user = new userModel({
    name: req.body.name,
  }); 

  // save user data 
  user.save(user)
    .then((data) => {
      res.status(200).send(data); 
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || `Error occurerred while uploading data`,
      });
    });
};

exports.find = (req, res) => {
  if (req.query.id) {
    const id = req.query.id;
    userModel
      .findById(id)
      .then((data) => {
        res.status(200).send(data);
      })
      .catch((err) => {
        res.status(500).send({ message: err.message });
      });
  } else {
    userModel
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
  // Validation
  if (!req.body) {
    res.status(400).send({ message: "Empty form" });
  }

  const id = req.params.id;
  userModel
    .findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};

exports.delete = (req, res) => {
  const id = req.params.id;

  userModel
    .findByIdAndDelete(id) 
    .then((data) => {  
      res.status(200).send(data);
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};
