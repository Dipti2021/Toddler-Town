const { Comment } = require('../models');

const commentData = [//added day care id
    {
        user_id: 1,
        post_id: 5,
        //daycare_id:7,
        comment_date:'April 20, 2021',
        comment_text: "Helped me to find a day care very efficiently!"
    },
    {
        user_id: 2,
        post_id: 4,
        //daycare_id:3,
        comment_date:'April 10, 2021',
        comment_text: "Wow, amazing work!"
    },
    {
        user_id: 3,
        post_id: 5,
       // daycare_id:11,
        comment_date:'December 20, 2020',
        comment_text: "Awesome site"
    },
    {
        user_id: 4,
        post_id: 2,
        //daycare_id:16,
        comment_date:'January 20, 2020',
        comment_text: "Thats too cool!"
    }
    
]

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;