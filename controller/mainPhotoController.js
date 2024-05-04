const mainPhotoModel = require("../model/mainPhotoModel")

exports.create = async (req, res) => {
  // Validation
  if (!req.body) {
    res.status(400).send({ message: "Empty form" });
  }


  // Create User data
  const mainPhotoUpload = new mainPhotoModel({
    photo: req.file.filename,  
    adminId: req.body.adminId,
  });  
 
  // save user data 
  mainPhotoUpload
    .save(mainPhotoUpload)  
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
    mainPhotoModel
      .findById(id)
      .then((data) => {
        res.status(200).send(data);
      })
      .catch((err) => {
        res.status(500).send({ message: err.message });
      });
  } else {
    mainPhotoModel
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
    return res.status(400).send({ message: "Empty form" });
  }

  const id = req.params.id;  

  mainPhotoModel
    .findByIdAndUpdate(id, {photo: req.file.filename}, { useFindAndModify: false })
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

  mainPhotoModel
    .findByIdAndDelete(id) 
    .then((data) => {  
      res.status(200).send(data);
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};


