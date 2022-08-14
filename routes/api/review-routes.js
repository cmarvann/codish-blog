const router = require('express').Router();
const sequelize = require('../../config/connection');
const { User, Review, Like, Comment } = require('../../models');


router.get('/', (req, res) => {
  Review.findAll({
    attributes: ['id', 'review_url', 'title', 'created_at',
    [sequelize.literal('(SELECT COUNT(*) FROM like WHERE review.id = like.review_id)'), 'like_count']
  ],
    order: [['created_at', 'DESC']],
    include: [
      {
        model: Comment,
        attributes: ['id', 'comment_text', 'review_id', 'user_id', 'created_at'],
        include: {   
        model: User,
        attributes: ['username']
      }
    },
    {
    model: User,
        attributes: ['username']
    }
    ]
  })
    .then(dbReviewData => res.json(dbReviewData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});



router.get('/:id', (req, res) => {
  Review.findOne({
    where: {
      id: req.params.id
    },
    attributes: ['id', 'review_url', 'title', 'created_at',
    [sequelize.literal('(SELECT COUNT(*) FROM like WHERE review.id = like.review_id)'), 'like_count']
  ],
    include: [
      {
        model: User,
        attributes: ['username']
      }
    ]
  })
    .then(dbReviewData => {
      if (!dbReviewData) {
        res.status(404).json({ message: 'No review found with this id' });
        return;
      }
      res.json(dbReviewData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});


router.post('/', (req, res) => {
  // expects {title: 'Codishblog goes public!', Review_url: 'https://codishblog.com/review', user_id: 1}
  Review.create({
    title: req.body.title,
    review_url: req.body.review_url,
    user_id: req.body.user_id
  })
    .then(dbReviewData => res.json(dbReviewData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});



// Uplike
// router.put('/:id, uplike', (req, res) => {
// Like.create({
//   user_id: req.body.user_id,
//   review_id: req.body.review_id

// }).then(() => {
//   // then find the review we just liked on
//   return Review.findOne({
//     where: {
//       id: req.body.review_id
//     },
//     attributes: [
//       'id',
//       'review_url',
//       'title',
//       'created_at',
//       [
//         sequelize.literal('(SELECT COUNT(*) FROM like WHERE review.id = like.review_id)'),
//         'like_count'
//       ]
//     ]
//   })

//   .then(dbReviewData => res.json(dbReviewData))
//   .catch(err => res.json(err));

//   });
// });

router.put('/uplike', (req, res) => {
  
  Review.uplike(req.body, {Like, User, Comment })
    .then(updatedLikeData => res.json(updatedLikeData))
    .catch(err => {
      console.log(err);
      res.status(400).json(err);
    });
});





router.put('/:id', (req, res) => {
  Review.update(
    {
      title: req.body.title
    },
    {
      where: {
        id: req.params.id
      }
    }
  )
    .then(dbReviewData => {
      if (!dbReviewData) {
        res.status(404).json({ message: 'No review found with this id' });
        return;
      }
      res.json(dbReviewData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});


router.delete('/:id', (req, res) => {
  Review.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(dbReviewData => {
      if (!dbReviewData) {
        res.status(404).json({ message: 'No review found with this id' });
        return;
      }
      res.json(dbReviewData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
