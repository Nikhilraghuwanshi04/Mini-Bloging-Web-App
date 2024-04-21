const express = require('express');
const router = express.Router();
const { createAuthor,createBlog,getBlogs,updateBlog,deleteBlog} = require('../controllers/controller');
// Author APIs
router.post('/authors', createAuthor);

// Blog APIs
router.post('/blogs', createBlog);
router.get('/blogs', getBlogs);
router.put('/blogs/:blogId', updateBlog);
router.delete('/blogs/:blogId', deleteBlog);

module.exports = router;
