
const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');
const Daycare = require('./Daycare');
const Agegroup = require('./Agegroup');

User.hasMany(Post, {
// as foreign key to User
    foreignKey: 'user_id'
});


Post.belongsTo(User, {

    foreignKey: 'user_id',

    onDelete: "cascade"
});

Comment.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: "cascade"
});

Comment.belongsTo(Post, {
    foreignKey: 'post_id',
    onDelete: "cascade"
});
Post. hasMany(Comment, {
    foreignKey: 'post_id',
    onDelete: "cascade"
});
  

User.hasMany(Comment, {
    foreignKey: 'user_id',
    onDelete: "cascade"
});

Comment.belongsTo(Daycare, {//added by me
  foreignKey: 'daycare_id',
    onDelete: "cascade"

});

Daycare.hasMany(Agegroup, {//added by me
    foreignKey: 'daycare_id',
      onDelete: "cascade"
  
  });

Agegroup.belongsTo(Daycare,{
    foreignKey: 'daycare_id',
      onDelete: "cascade"
  
  
})
  

Daycare.hasMany(Post, {//added by me
  foreignKey: 'daycare_id',
    onDelete: "cascade"

});



Post.belongsTo(Daycare, {
    foreignKey: 'post_id',
    onDelete: "cascade"
})
module.exports = { User, Post, Comment,  Daycare };
