# SendGrid Demo Spec

GET /game/:lifepoints

Should render the game window. Enemy should have full life when page is
initially created. Else, should have the life everyone else sees.

Inbound Parse API will perform a POST to /game and this will emit to the frontend to create a mail animation which will attack the enemy. The subject will determine which id is being attacked. The FE will respond with a number which is the amount of damaged caused. This will then be replied to the original sender.

Hits will be 1-5 life points
Last hit will get notified that killed the enemy and shall be awarded with something

This hacks uses nodejs, jade, html5 canvas, and of course [SendGrid!](http://sendgrid.com)

## Development

### Running locally with azk

To run it using [azk](http://www.azk.io/) just do:

```
$ cp .env.example .env
```

Change the environment variables inside `.env` and run:

```
$ azk start
```

### Running on your machine

After changing the environment variables, start a local redis server:

```
$ redis-server
```

Then run your app:

```
$ npm start
```

You might also want to run ngrok to test your webhook. If you have it installed, open a new terminal and run:

```
$ ngrok 3000
```