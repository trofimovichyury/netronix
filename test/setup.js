require('babel-polyfill');
require('babel-core/register');

var configure = require('enzyme').configure;
var Adapter = require('enzyme-adapter-react-16');

configure({ adapter: new Adapter() });

const hook = require('css-modules-require-hook');
hook({
    extensions: ['.css'],
    generateScopedName: '[local]'
});