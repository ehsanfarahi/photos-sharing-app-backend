const uploadPhotoModel = require("../model/uploadPhotoModel")

exports.create = async (req, res) => {
  // Validation
  // if (!req.body) {
  //   res.status(400).send({ message: "Empty form" });
  // }


  // Create User data
  const photoUpload = new uploadPhotoModel({
    photo: req.files.map(file => file.filename),  
    userId: req.body.userId, 
  });  

  const savedPhoto = await photoUpload.save();

  res.status(200).send(savedPhoto);

  // save user data 
  // photoUpload
  //   .save(photoUpload)
  //   .then((data) => {
  //     res.status(200).send(data); 
  //   })
  //   .catch((err) => {
  //     res.status(500).send({
  //       message: err.message || `Error occurerred while uploading data`,
  //     });
  //   });
};

exports.find = (req, res) => {
  if (req.query.id) {
    const id = req.query.id;
    uploadPhotoModel
      .findById(id)
      .then((data) => {
        res.status(200).send(data);
      })
      .catch((err) => {
        res.status(500).send({ message: err.message });
      });
  } else {
    uploadPhotoModel
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
  uploadPhotoModel
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

  uploadPhotoModel
    .findByIdAndDelete(id) 
    .then((data) => {  
      res.status(200).send(data);
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};
