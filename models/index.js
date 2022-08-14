const User = require('./User');
const Review = require('./Review');
const Like = require('./like');
const Comment = require('./comment');



// User to Review
User.hasMany(Review, {
    foreignKey: 'user_id'
  });
  
  Review.belongsTo(User, {
    foreignKey: 'user_id'
  });

  //User to Reviews
  User.belongsToMany(Review, {
    through: Like,
    as: 'liked_reviews',
    foreignKey: 'user_id'
  });
  
  Review.belongsToMany(User, {
    through: Like,
    as: 'liked_reviews',
    foreignKey: 'reviews_id'
  });

  // Users to likes

  Like.belongsTo(User, {
    foreignKey: 'user_id'
  });
  
  Like.belongsTo(Review, {
    foreignKey: 'review_id'
  });
  
  User.hasMany(Like, {
    foreignKey: 'user_id'
  });
  
  Review.hasMany(Like, {
    foreignKey: 'review_id'
  });


  Comment.belongsTo(User, {
    foreignKey: 'user_id'
  });
  
  Comment.belongsTo(Review, {
    foreignKey: 'review_id'
  });
  
  User.hasMany(Comment, {
    foreignKey: 'user_id'
  });
  
  Review.hasMany(Comment, {
    foreignKey: 'Review_id'
  });
  



module.exports = { User, Review, Like, Comment };
