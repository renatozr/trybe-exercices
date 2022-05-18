const express = require('express');

const posts = [{ id: 1, post: 'Muito legal!' }, { id: 2, post: 'Cu de fossa!' }];

const router = express.Router();

router.get('/', (_req, res) => res.status(200).json({ posts }));

router.get('/:id', (req, res) => {
  const { id } = req.params;

  const post = posts.find((p) => p.id === parseInt(id));

  if (!post) return res.status(404).json({ message: 'post not found' });

  res.status(200).json({ post });
});

module.exports = router;