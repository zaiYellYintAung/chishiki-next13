const Model = require("../models/Student");
const generateRandomID = require("../middlewares/randomID");
const User = require("../models/User");

const getAll = async (req, res) => {
  try {
    const items = await Model.find();
    res.status(200).json(items).populate("user");
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const getOne = async (req, res) => {
  try {
    const item = await Model.findById(req.params.id).populate("user");
    if (!item) {
      return res.status(404).json({ message: "Item not found" });
    }
    res.status(200).json(item);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const createOne = async (req, res) => {
  const { user, name, email, birthDate, level, country, city, phoneNumber } =
    req.body;

  try {
    let studentID;
    let idExists = true;
    while (idExists) {
      studentID = generateRandomID("S", 6);
      idExists = await Model.findOne({ studentID });
    }

    const userExist = await Model.findOne({ user });
    console.log(userExist);
    console.log("Updating");
    const updatedUser = await User.findByIdAndUpdate(
      user,
      { role: false },
      { new: true }
    );

    console.log(updatedUser);
    if (userExist) {
      return res.status(400).json({ message: "Can't create 2 profiles." });
    }

    const item = new Model({
      studentID,
      user,
      name,
      email,
      birthDate,
      level,
      country,
      city,
      phoneNumber,
    });

    const savedItem = await item.save();
    res.status(200).json(savedItem);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// const createOne = async (req, res) => {
//   const {
//     studentID,
//     user,
//     firstName,
//     lastName,
//     dob,
//     completedCourses,
//     currentCourses,
//     paid,
//     created,
//   } = req.body;

//   try {
//     const userExist = await Model.findOne({ user });
//     console.log(userExist);
//     if (userExist) {
//       return res.status(400).json({ message: "Can't create 2 profiles." });
//     }

//     const item = new Model({
//       studentID,
//       user,
//       firstName,
//       lastName,
//       dob,
//       completedCourses,
//       currentCourses,
//       paid,
//       created,
//     });

//     const savedItem = await item.save();
//     res.status(200).json(savedItem);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: "Internal server error" });
//   }
// };

const updateOne = async (req, res) => {
  try {
    const {
      name,
      email,
      profilePhoto,
      birthDate,
      level,
      pastDocuments,
      country,
      city,
      phoneNumber,
      completedCourses,
      currentCourses,
      paid,
    } = req.body;
    const item = await Model.findByIdAndUpdate(
      req.params.id,
      {
        firstName,
        lastName,
        dob,
        completedCourses,
        currentCourses,
        paid,
      },
      { new: true }
    );
    if (!item) {
      return res.status(404).json({ message: "Item not found" });
    }
    res.status(200).json(item);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const deleteOne = async (req, res) => {
  try {
    const item = await Model.findByIdAndDelete(req.params.id);
    if (!item) {
      return res.status(404).json({ message: "Item not found" });
    }
    res.status(200).json(item);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = {
  getAll,
  getOne,
  createOne,
  updateOne,
  deleteOne,
};
