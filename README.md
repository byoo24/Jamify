<img src="https://raw.githubusercontent.com/byoo24/Jamify/master/readme_imgs/logo.png" width:"300">


# Table of Contents
* [Introduction](#introduction)
* [Frontend Technologies](#frontend-technologies-used)
* [Backend Technologies](#backend-technologies-used)
* [External Sources](#external-sources)
* Features
    * [User Authentication](#user-authentication)
    * [Browse](#browse)
    * [Empty State](#empty-state)
    * [Add Playlist](#add-playlist)


## Introduction
For App Academy's FullStack Project, I chose to clone `Spotify`. The app has a functional music player.  The music is supplied by `BPMSupreme`. The app is hosted on `Heroku`. And the assets are hosted on `Amazon Web Services`.

[Live Demo](https://jamifyy.herokuapp.com/#/)


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
* [Spotify Branding Guidelines](https://developer.spotify.com/branding-guidelines/)
* [Heroku](https://www.heroku.com/)
* [Amazon Web Services](https://aws.amazon.com/)
* [BPM Surpreme](https://www.bpmsupreme.com/)
* Font: Circular
* Font: Spoticon

# Features

## User Authentication

One of the most unique features taught at App Academy is *User Authentication*.  When a user logs in, **Rails** generates a new `session_token` and assigns it to the user. In addition, using **react-router-dom**, we generate `ProtectedRoutes` to ensure User Authentication on the frontend.



## Signup and Login pages:

<p style="text-align:center">
  <img src="https://raw.githubusercontent.com/byoo24/Jamify/master/readme_imgs/signup.png" width="250" />
  <img src="https://raw.githubusercontent.com/byoo24/Jamify/master/readme_imgs/login.png" width="250" />
  <img src="https://raw.githubusercontent.com/byoo24/Jamify/master/readme_imgs/login_errors.png" width="250" />
</p>




## Browse:
<img src="https://raw.githubusercontent.com/byoo24/Jamify/master/readme_imgs/look_and_feel.png" width="720">

## Empty State:
<img src="https://raw.githubusercontent.com/byoo24/Jamify/master/readme_imgs/empty_state.png" width="720">

## Add Playlist:
<img src="https://raw.githubusercontent.com/byoo24/Jamify/master/readme_imgs/add_playlist.png" width="720">
