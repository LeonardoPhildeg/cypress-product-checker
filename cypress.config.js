const { defineConfig } = require('cypress')
require('dotenv').config()

module.exports = defineConfig({
  e2e: {
    watchForFileChanges: false,
    baseUrl: process.env.BASE_URL,
    viewportWidth: 1920,
    viewportHeight: 1080,
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('task', {
        sendWhatsApp({ message }) {
          const client = require('twilio')(
            process.env.TWILIO_ACCOUNT_SID,
            process.env.TWILIO_AUTH_TOKEN,
          )

          return client.messages
            .create({
              body: message,
              to: process.env.WHATSAPP_NUMBER,
              from: process.env.TWILIO_WHATSAPP_FROM,
            })
            .then(() => true)
            .catch((err) => {
              console.error(err)
              return false
            })
        },
      })
    },
  },
})
