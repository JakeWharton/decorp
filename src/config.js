var config = {
  slack_api_token: process.env.DECORP_SLACK_API_TOKEN,

  regexes: [
    { regex: /(?: |^)https:\/\/(?:b(?:uganizer)?|partnerissuetracker)\.corp\.google\.com\/issues\/(\d+)#([^ >]+)(?: |$)/g, message: 'Public link: https://issuetracker.google.com/issues/[1]#[2]' },
    { regex: /(?: |^)https:\/\/(?:b(?:uganizer)?|partnerissuetracker)\.corp\.google\.com\/issues\/(\d+)(?: |$)/g, message: 'Public link: https://issuetracker.google.com/issues/[1]' },
    { regex: /(?: |^)b\/(\d+)(?: |$)/g, message: 'Public link: https://issuetracker.google.com/issues/[1]' }
  ]
};
module.exports = config;
