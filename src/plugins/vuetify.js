import { createRulesPlugin } from 'vuetify/labs/rules'

export default createRulesPlugin({
  rules: {
    aliases: {
      // Create a new rule named "pinCode"
      pinCode: (err) => {
        return (v) => /^[\d]{4}$/.test(v) || err || 'Field must contain a 4-digit PIN'
      },
      // Overwrite an existing rule by redefining it
      integer: (err) => {
        return (v) => Number.isInteger(v) || err || 'Field must contain an integer value'
      },
    },
  },
})
