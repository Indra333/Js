

const semver = require('semver');

console.log(semver.gt('1.2.3', '9.8.7')) // false
console.log(semver.lt('1.2.3', '9.8.7') )// true