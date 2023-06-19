const ESLintPlugin = require('eslint-webpack-plugin');

const options = {
    fix: true,
}
module.exports = {
  plugins: [new ESLintPlugin(options)],
};
