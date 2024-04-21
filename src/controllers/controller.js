const { Author, Blog } = require('../models/model.js');

// Create Author
async function createAuthor(req, res) {
  try {
    const newAuthor = await Author.create(req.body);
    res.status(201).json({ status: true, data: newAuthor });
  } catch (error) {
    res.status(400).json({ status: false, message: error.message });
  }
}

// Create Blog
async function createBlog(req, res) {
  try {
    const newBlog = await Blog.create(req.body);
    res.status(201).json({ status: true, data: newBlog });
  } catch (error) {
    res.status(400).json({ status: false, message: error.message });
  }
}

// Get Blogs
async function getBlogs(req, res) {
  try {
    const blogs = await Blog.find({ isDeleted: false, isPublished: true });
    res.status(200).json({ status: true, data: blogs });
  } catch (error) {
    res.status(500).json({ status: false, message: error.message });
  }
}

// Update Blog
async function updateBlog(req, res) {
  try {
    const updatedBlog = await Blog.findByIdAndUpdate(req.params.blogId, req.body, { new: true });
    res.status(200).json({ status: true, message: "Blog updated successfully", data: updatedBlog });
  } catch (error) {
    res.status(400).json({ status: false, message: error.message });
  }
}

// Delete Blog
async function deleteBlog(req, res) {
  try {
    await Blog.findByIdAndUpdate(req.params.blogId, { isDeleted: true, deletedAt: Date.now() });
    res.status(200).json({ status: true, message: "Blog deleted successfully" });
  } catch (error) {
    res.status(400).json({ status: false, message: error.message });
  }
}

module.exports = { createAuthor, createBlog, getBlogs, updateBlog, deleteBlog };
