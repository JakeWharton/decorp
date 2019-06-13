De-corp
=======

A simple slackbot for responding to messages which contain `b.corp.google.com/issues/NNNN` links
with the corresponding `issuetracker.google.com/issues/NNNN` link.


Setup
-----

1. Create a [new bot user](https://my.slack.com/services/new/bot) to get a slack api token.
2. Export `DECORP_SLACK_API_TOKEN` environment variable
3. `npm install`
4. `npm start`
5. Try it out on a Slack channel!


Development
-----------

`npm test` to lint and run tests
