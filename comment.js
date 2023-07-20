// create new comment
router.post('/new', (req, res) => {
  // create new comment
  const newComment = new Comment({
    text: req.body.text,

