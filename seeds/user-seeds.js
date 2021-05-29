const { User } = require('../models');

const userData = [
    {
        username: "ayomide_awonaya",
        //first_name: "ayomide",
       // last_name: "awonaya",
        email: "ayomide_awonaya@gmail.com",
        password: "p@ssword1"
    },
    {
        username: "evrad_ndanga",
        //first_name: "evrad",
        //last_name: "ndanga",
        email: "evrad_ndanga@gmail.com",
        password: "p@ssword2"
    },
    {
        username: "issac_akanbi",
        //first_name: "issac",
        //last_name: "akanbi",
        email: "issac_akanbi@gmail.com",
        password: "p@ssword3"
    },
    {
        username: "dipti_razdan",
        //first_name: "dipti",
       // last_name: "razdan",
        email: "dipti_razdan@gmail.com",
        password: "p@ssword4"
    }
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;