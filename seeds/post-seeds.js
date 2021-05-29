const { Post } = require('../models');

const postData = [
    {
        title: "topic1!",
        post_content: "New day cares available",
        user_id: 1
    },
    {
        title: "topic2",
        post_content: "nice app",
        user_id: 1
    },
    {
        title: "topic3",
        post_content: "try it out",
        user_id: 2

    },
    {
        title: "topic4",
        post_content: "helpful",
        user_id: 4
    },
    {
        title: "topic5",
        post_content: "web app",
        user_id: 3
    }
]

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;