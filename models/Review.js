const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Review extends Model {
  static uplike(body, models) {
    return models.Like.create({
      user_id: body.user_id,
      review_id: body.review_id
    }).then(() => {
      return Review.findOne({
        where: {
          id: body.review_id
        },
        attributes: [
          'id',
          'review_url',
          'title',
          'created_at',
          [
            sequelize.literal('(SELECT COUNT(*) FROM like WHERE review.id = like.post_id)'),
            'like_count'
          ]
        ]
      });
    });
  }
}

// review 
Review.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    review_url: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isURL: true
      }
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id'
      }
    }
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'review'
  }
);

module.exports = Review;

