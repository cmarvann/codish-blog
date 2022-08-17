const User = require('./User');
const Cherry = require('./cherry');
const Site = require('./site');
const Like = require('./like');
const Comment = require('./comment');


//Cherry
Site.hasMany(Cherry, {
  foreignKey: 'site_id',
});

Cherry.belongsTo(Site, {
  foreignKey: 'site_id',
});

  // Users to likes

  Like.belongsTo(User, {
    foreignKey: 'user_id'
  });

  User.hasMany(Like, {
    foreignKey: 'user_id'
  });

  Comment.belongsTo(User, {
    foreignKey: 'user_id'
  });
  
  User.hasMany(Comment, {
    foreignKey: 'user_id'
  });
  


module.exports = { User, Cherry, Site, Like, Comment };
