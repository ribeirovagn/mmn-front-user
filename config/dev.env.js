'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  LOGIN_ENDPOINT: '"http://mln30.local/v3/oauth"',
  API_ENDPOINT: '"http://mln30.local/v3"',
  CLIENT_SECRET: '"qY4n5MT7X75OpklXttVok8dGtycH6UUUw0asV0pU"',
  CLIENT_ID: '1',
  GRANT_TYPE: '"password"',
  RECAPTCHA_SITE_KEY: '"6LeHN4sUAAAAAIx9y6Ku4uGbFWZa7ilmJPlhdqMa"'
})
