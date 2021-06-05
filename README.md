# Group 2 project: Day care finder application 
# Members: Isaac Akanbi, Dipti Razdan, Ayomide Awonaya, Evrard Ndanga 

<img width="1060" alt="Screen Shot 2021-06-05 at 12 20 12 PM" src="https://user-images.githubusercontent.com/78707812/120898651-c81ffc00-c5f9-11eb-9842-cf26470a4439.png">


<img width="1234" alt="Screen Shot 2021-06-05 at 12 20 46 PM" src="https://user-images.githubusercontent.com/78707812/120898670-d40bbe00-c5f9-11eb-89da-e91ff6efd709.png">


<img width="1234" alt="Screen Shot 2021-06-05 at 12 21 11 PM" src="https://user-images.githubusercontent.com/78707812/120898675-dc63f900-c5f9-11eb-920c-d37ba79e0fa5.png">
 
## User Stories

 * As a user, I want to see a list of available daycares in my city(cities around canada).
 * As a user, I want to be able to create an account.
 * As a registered user, when i'm logged in, i want to be able to see a list of daycares in my city, post and edit post.


### Project details
* it is done when the `/` homepage route renders a list of all cities from the database.

* It is done when the `/daycare/:id` route renders all daycares associated with a city based on the route parameter id.

* It's done when the `/login` route renders a form to log in and a form to create a new account.

* It's done when an existing user can enter their credentials on the login page to create a session on the server.

* It's done when a new user can create an account on the login page and then be immediately logged in with a session.

* It's done when the views are rendered with Handlebars.js templates.

* It's done when a logged-in user can select a "Logout" button to remove their session.

* It's done when a user can comment, edit post and leave reviews 


## Specifications
* The database models have the following fields and assocociations: 

db schema : `/images/db schema toddle town.jpg`
    * `User`

        * `id`: primary key
        * `name`
        * `email`
        * `password`

    * `Daycare`
        * `id` : primary key
        * `Name`     
        * `Age_Group`
        * `Phone_number`
        * `Email`
        * `Details`

## Files Layout

* config  / connections.js : 

* controllers / api / comment-routes.js, daycare-routes.js, index.js, post-routes.js, home-routes.js, review-routes.js

* db / schema.sql

* models / Agegroup.js, Comment.js, Daycare.js, index.js, Post.js, User.js

* public/ css / jass.css, style.css
* public / images 
* public / js / add-post.js, comment.js, create-post.js, delete-post.js, edit-post.js, login.js, logout.js, signup.js

* utils / auth.js, helper.js

* views / layouts / main.handlebars

* views / layouts / partials / create-post.handlebars, daycare.handlebars, edit-post.handlebars, homepage.handlebars, login.handlebars, review.handlebars, signup.handlebars, single-post.handlebars

* package-lock.json, package.json, README.md, server.js 





