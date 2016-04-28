Salty Daze
----------

Find your perfect surf spot using the Salty Daze website to access realtime surf-weather stats alongside live webcam and image streams of what the beach conditions look like right now.

Designed and developed in a 2 week sprint for our final project at Makers Academy.

[Use it now on Heroku. Please note, you must allow the website to know your location when prompted. ](https://mighty-sands-50291.herokuapp.com/#/map)

![alt text](http://i.imgur.com/k7X5kXX.png)

![alt text](http://i.imgur.com/v09fahl.png)

Problem statement
-----------------
Where can I go surfing right now? Where is best to surf over the next 7 days?

Approach
-----------------
The project was designed and developed in a 2 week sprint, for our final project for Makers Academy. We followed the concepts of Agile, held regular stand ups, and pair programmed every day.

How it works
------------
We have a database with over 300 beach locations stored, which is served to our front end via our API built using Ruby on Rails ([GNAR-api](https://github.com/michaeljcollinsuk/GNAR-api)).

These locations are then displayed on our custom map. When the user clicks on a location, a call to the Marine Weather Api is made so that the weather info can be displayed. The Instagram API is also used to bring in pictures using the location name as a hashtag.

Currently the locations are limited to the UK and New Zealand. If it were not for time limitations and our focus on getting a MVP deployed, we would have liked to have added more locations around the world.

Technologies
------------
* Angular JS via Node.js for the front end
* Ruby on Rails for the back end. We decoupled this part of the app - please see [GNAR-api](https://github.com/michaeljcollinsuk/GNAR-api) repo for more info. It serves json with our beach surf location co-ordinates, which are stored in our database
* World Weather Online's Marine Weather API
* Instagram API
* Google Maps API
* PostgreSQL to store the surf locations
* Karma, RSpec for testing
* Git/Github/Waffle for version control
* GNAR-api (our API mentioned above)
* HMTL and CSS (no Bootstrap!)
* Hosted on Heroku

Contributors
------------
* [Michael Collins](https://github.com/michaeljcollinsuk)
* [Harry Gordon](https://github.com/hwgordon247)
* [Heather Campbell](https://github.com/heather-camcam)
* [Sarah Crawley](https://github.com/sara6)
