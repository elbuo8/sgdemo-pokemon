# SendGrid Demo Spec

get /demo/game/:id

Should render the game window for the specific id. Enemy should have full life when page is
initially created. Else, should have the life everyone else sees.

post /demo/game

Should emit to the frontend to create a mail animation which will attack the enemy. The subject will
determine which id is being attacked. The FE will respond with a number which is the amount of damaged caused.
This will then be replied to the original sender.

Enemy will have 50-100 points
Hits will be 1-5 with lower probability of higher
Last hit will get notified that killed the enemy and shall be awarded with something