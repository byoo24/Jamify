![Jamify](https://raw.githubusercontent.com/byoo24/Jamify/master/readme_imgs/logo.png)

# Table of Contents
* Introduction
* Frontend Technologies
* Backend Technologies
* Features
    * User Authentication

For App Academy's FullStack Project, I chose to clone Spotify. Live [Demo](https://jamifyy.herokuapp.com/#/)


## Frontend Technologies used
* [React](https://reactjs.org/)
* [Redux](https://redux.js.org/)
* SCSS
* [Webpack](https://webpack.js.org/)
* [Yarn Package Manager](https://yarnpkg.com/en/)
* [JQuery](https://jquery.com/)


## Backend Technologies used
* [Rails](https://rubyonrails.org/)
* [Ruby](https://www.ruby-lang.org/en/)
* JBuilder


## External Sources
* [Spotify Color Palette](https://developer.spotify.com/branding-guidelines/)
* [Heroku](https://www.heroku.com/)
* [Amazon Web Services](https://aws.amazon.com/)
* [BPM Surpreme](https://www.bpmsupreme.com/)
* Font: Circular
* Font: Spoticon

# Features

## User Authentication

One of the most unique features taught at App Academy is *User Authentication*.  When a user logs in, **Rails** generates a new `session_token` and assigns it to the user. In addition, using **react-router-dom**, we generate `ProtectedRoutes` to ensure User Authentication on the frontend.
