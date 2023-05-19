const mongoose = require('mongoose');

const lessonSchema = mongoose.Schema(
  {
    _id: {
      type: mongoose.Schema.Types.ObjectId, // Use ObjectId type for unique IDs
      default: mongoose.Types.ObjectId, // Generate a new ObjectId for each lesson
    },
    courseId: {
      type: String,
      required: true,
    },
    lessonNumber: {
      type: Number,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    duration: {
      type: String,
      required: true,
    },
    videoLink: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Lesson = mongoose.model('Lesson', lessonSchema);
module.exports = Lesson;
