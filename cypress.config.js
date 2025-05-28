require('dotenv').config();

module.exports = {
  e2e: {
    baseUrl: 'https://api.trello.com/1',
    env: {
      TRELLO_KEY: process.env.TRELLO_KEY,
      TRELLO_TOKEN: process.env.TRELLO_TOKEN
    }
  }
}