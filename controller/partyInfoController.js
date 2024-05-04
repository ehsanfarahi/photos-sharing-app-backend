const partyInfoModel = require("../model/partyInfoModel")

exports.create = async (req, res) => {
  // Validation
  if (!req.body) {
    res.status(400).send({ message: "Empty form" });
  }


  // Create User data
  const partyInfoUpload = new partyInfoModel({
    photo: req.file.filename,  
    name1: req.body.name1, 
    name2: req.body.name2, 
    dateOfParty: req.body.dateOfParty, 
    address: req.body.address,
    message: req.body.message,
    adminId: req.body.adminId
  });  

  // save user data 
  partyInfoUpload
    .save(partyInfoUpload)  
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
    partyInfoModel
      .findById(id)
      .then((data) => {
        res.status(200).send(data);
      })
      .catch((err) => {
        res.status(500).send({ message: err.message });
      });
  } else {
    partyInfoModel
      .find()
      .then((data) => {
        res.status(200).send(data);
      })
      .catch((err) => {
        res.status(500).send({ message: err.message });
      });
  }
};

// exports.update = (req, res) => {
//   // Validation
//   if (!req.body) {
//     res.status(400).send({ message: "Empty form" });
//   }

//   const id = req.params.id;
//   partyInfoModel
//     .findByIdAndUpdate(id, req.body, { useFindAndModify: false })
//     .then((data) => {
//       if (!data) {
//         res.status(404).send({ message: `Cannot update user with id: ${id}` });
//       } else {
//         res.send(data);
//       }
//     })
//     .catch((err) => {
//       res.status(500).send({ message: err.message });
//     }); 
// };

exports.update = (req, res) => {
  // Validation
  if (!req.body) {
    return res.status(400).send({ message: "Empty form" });
  }

  const id = req.params.id; 
  const updates = req.body;

  partyInfoModel
    .findByIdAndUpdate(id, { $set: updates }, { useFindAndModify: false, new: true })
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

  partyInfoModel
    .findByIdAndDelete(id) 
    .then((data) => {  
      res.status(200).send(data);
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};


