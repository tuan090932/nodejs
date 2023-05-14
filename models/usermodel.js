const mongoose = require('mongoose')
const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter a name"],
    },
    email: {
      type: String,
      required: [true, "Please enter an email address"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Please enter a password"],
    },
    role: {
      type: String,
      enum: ["admin", "user"],
      default: "user",
    },
    enrolledCourses: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Course",
      },
    ],
    purchasedCourses: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Course",
      },
    ],
  },
  {
    timestamps: true,
  }
);




const user = mongoose.model('user', userSchema);
module.exports = user;