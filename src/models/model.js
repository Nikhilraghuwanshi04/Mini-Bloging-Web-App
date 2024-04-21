const mongoose = require('mongoose');

// Define Author Schema
const authorSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true,
    enum: ['Mr', 'Mrs', 'Miss']
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  }
});

const Author = mongoose.model('Author', authorSchema);

// Define Blog Schema
const blogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  body: {
    type: String,
    required: true
  },
  authorId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Author',
    required: true
  },
  tags: [String],
  category: {
    type: String,
    required: true
  },
  subcategory: [String],
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  },
  deletedAt: {
    type: Date,
    default: null
  },
  isDeleted: {
    type: Boolean,
    default: false
  },
  publishedAt: {
    type: Date,
    default: null
  },
  isPublished: {
    type: Boolean,
    default: false
  }
});

const Blog = mongoose.model('Blog', blogSchema);

module.exports = { Author, Blog };
