// create new comment
router.post('/new', (req, res) => {
  // create new comment
  const newComment = new Comment({
    text: req.body.text,
    name: req.body.name,
    user: req.body.user,
    post: req.body.post,
  });
  // save comment
  newComment.save().then(comment => res.json(comment));
}
    text: req.body.text,

    


