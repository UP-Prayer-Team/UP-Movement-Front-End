// Imports
const { injectSassVariables } = require('@vuetify/cli-plugin-utils')

// Bootstraps Vue CLI with the target SASS variables
module.exports = api => injectSassVariables(
  api,
  // Path to the variables file
  './preset/variables.scss',
  // Modules to inject variables
  ['vue-modules', 'vue', 'normal-modules', 'normal'], // default
)