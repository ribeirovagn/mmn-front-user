'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  LOGIN_ENDPOINT: '"http://mln30.local/v3/oauth"',
  API_ENDPOINT: '"http://mln30.local/v3"',
  CLIENT_SECRET: '"KdKIQjusBXcUghTyJSas5KRnfo9dC1jiL1MFCOWF"',
  CLIENT_ID: '4',
  GRANT_TYPE: '"password"',
  RECAPTCHA_SITE_KEY: '"6LeHN4sUAAAAAIx9y6Ku4uGbFWZa7ilmJPlhdqMa"'
})
