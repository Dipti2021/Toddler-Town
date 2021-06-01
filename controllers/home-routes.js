
const sequelize = require('../config/connection');

const { Post, User, Comment } = require('../models');

const router = require('express').Router();

router.get('/', (req, res) => {

    Post.findAll({

        attributes: [
            'id',
            'title',
            'content',
            'created_at'
        ],
        include: [{
                model: Comment,
                attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
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

        .then(dbPostData => {
          
            const posts = dbPostData.map(post => post.get({ plain: true }));

            console.log('------------------------------------------');
            console.log(posts);
            console.log('------------------------------------------');

            res.render('homepage', {  loggedIn: req.session.loggedIn });// check it again
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }
    res.render('login');
});

router.get('/login', (req, res) => {
    res.render('signup');
});


module.exports = router;