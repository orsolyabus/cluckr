# Cluckr

Twitter clone

Assignment to be done Hackaton style in 10 hours max.

## Part 1: App Skeleton
Build an Express app with the following:

* Logging Middleware installed & setup.
* Nodemon tool installed & setup as a dev. dependency.
* Bootstrap installed and served with static assets middleware (Do not use a CDN.)

## Part 2: Sign In
* Create a sign in page that shows a form with a single field for a username. 
* When a user submits the form, store the username in cookies. 
* Also, add the ability for users to sign out as well.

## Part 3: Clucks

Create a Postgres database for Cluckr.
Use a Knex migration to a create table to hold clucks, Cluckr's equivalent of tweets. Clucks should have the following fields:

* A username
* An image_url
* A content
* A self-increment unique id
* created_at and updated_at timestamps

## Part 4: Create Clucks

Create a form page as shown in the wireframe below.

* Routes related to clucks must be in one file.
* When submitted, Cluckr should add a new cluck to the database.
* A user should be able to give a link to an image url.
* Use Bootstrap to build it.
* The cluck should get its username field from the username in the cookies.
* A successfully submitted cluck should redirect the user to the index page.

## Part 5: The Clucks Index

Create a page to list and show all clucks as shown below.

* Order them by their creation date.
* The X-rectangles should be replaced with images only if an image was submitted for the cluck. This would be the same image_url saved from the form above.
* Use Bootstrap to build the list where appropriate.
* Find a image to use in place of the rooster avatar.
* Both path, / and /clucks, should send the user to this index page.

## Part 6: Navigation Bar

Add a navigation bar.

* There should be a "chicken" icon for the brand. Feel free to use any chicken image. The one in the wireframe comes from Twemoji.
* Clicking the brand sends the user to the index.
* The "Cluck!" button should link to the new cluck form.
* It should have a "Sign In" button that links to the /sign_in page.
* When the user is signed in, display their name instead of the "Sign In" button.
* You must use a Bootstrap styled navbar.

## Bonus: Human Friendly Creation Date

Display the created_at date for clucks in a human friendly readable way.

* Display the created_at date besides the username as show in any wireframe with clucks.
* Use plain language to show the date relative to the current date. (e.g. yesterday would appear as 1 day ago, 22 minutes ago, 2 hours ago, etc)
* Anything less than a minute ago should show as Just now

## Bonus: Trending Tags

Add a trending tags section that only appears in sizes larger than mobile as shown below.

* If the user enters a hashtag (such as #Things), then store them in another table alongside a counter with the number of time the hashtag was used.
* Whenever a cluck is created that contains hashtags that already exists, increment each of their counter fields.
* Use that data to make the "Trending Clucks" section functional.
* Sort them by their counter field in a descending order.
