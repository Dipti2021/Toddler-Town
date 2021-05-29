const { Comment } = require('../models');

const commentData = [
    {
        user_id: 1,
        post_id: 5,
        comment_date:05/05/2050,
        comment_text: "Helped me to find a day care very efficirntly!"
    },
    {
        user_id: 2,
        post_id: 4,
        comment_date:05/05/2050,
        comment_text: "Wow, amazing work!"
    },
    {
        user_id: 3,
        post_id: 6,
        comment_date:05/05/2050,
        comment_text: "Awesome site"
    },
    {
        user_id: 4,
        post_id: 2,
        comment_date:05/05/2050,
        comment_text: "Thats too cool!"
    }
    
]

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;