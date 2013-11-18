# SendGrid Demo Spec

GET /game/:lifepoints

Should render the game window. Enemy should have full life when page is
initially created. Else, should have the life everyone else sees.

Inbound Parse API will perform a POST to /game and this will emit to the frontend to create a mail animation which will attack the enemy. The subject will determine which id is being attacked. The FE will respond with a number which is the amount of damaged caused. This will then be replied to the original sender.

Hits will be 1-5 life points
Last hit will get notified that killed the enemy and shall be awarded with something

This hacks uses nodejs, jade, html5 canvas, and of course [SendGrid!](http://sendgrid.com)
