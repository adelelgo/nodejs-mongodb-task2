const express = require("express");
const User = require("../models/user");

const router = express.Router();

// post docs
router.post("/users", (req, res) => {
  console.log(req.body);

  const user = new User(req.body);
  user
    .save()
    .then((user) => {
      res.status(200).send(user);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
});

// get all
router.get("/users", (req, res) => {
  User.find({})
    .then((users) => {
      res.status(200).send(users);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});

// get First 2
router.get("/first2users", (req, res) => {
  User.find({})
    .limit(2)
    .then((users) => {
      res.status(200).send(users);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});

// patch first 3
router.patch("/updat_group_of_users", (req, res) => {
  try {
    req.body.forEach((element) => {
      User.updateOne({ _id: element._id }, { $set: element })
        .then((data1) => {
          console.log(data1.modifiedCount);
        })
        .catch((err) => {
          res.status(404).send("No User found");
        });
    });
    res.status(200).send(req.body);
  } catch (error) {
    res.status(500).send(error);
  }
});

// del 2
router.delete("/delete_group_of_users", (req, res) => {
  try {
    req.body.forEach((element) => {
      User.deleteOne({ _id: element._id })
        .then((data1) => {
          console.log(data1.modifiedCount);
        })
        .catch((err) => {
          res.status(404).send("No User found");
        });
    });
    res.status(200).send(req.body);
  } catch (error) {
    res.status(500).send(error);
  }
});
module.exports = router;

// Task
// post 5 doc
// get all data
// get first 2
// patch first 3
//  delete 2

// post 5
// get all // get 1 2
// patch first 3 3
// del 2

// router.get("/users/:id", (req, res) => {
//   // console.log(req.params);
//   const _id = req.params._id;
//   User.findById(_id)
//     .then((user) => {
//       if (!user) {
//         res.status(404).send("Unable to find user");
//       }
//       res.status(200).send(user);
//     })
//     .catch((err) => {
//       res.status(500).send(err);
//     });
// });

// router.patch("/users/:id", async (req, res) => {
//   try {
//     const _id = req.param.id;
//     const user = await User.findByIdAndUpdate(_id, req.body, {
//       new: true,
//       runValidators: true,
//     });
//     if (!user) {
//       return res.status(404).send("No User found");
//     }
//     res.status(200).send(user);
//   } catch (error) {
//     res.status(500).send(error);
//   }
// });

// router.delete("/users/:id", async (req, res) => {
//   try {
//     const _id = req.param.id;
//     const user = await User.findByIdAndDelete(_id);
//     if (!user) {
//       return res.status(404).send("No User found");
//     }
//     res.status(200).send(user);
//   } catch (error) {
//     res.status(500).send(error);
//   }
// });
