const fs = require('fs');

module.exports = function (fileName) {
  fs.readFile(`./${fileName}`, 'utf8', (err, contents) => {
    if (err) throw err;
    console.log(contents);
  });
};
