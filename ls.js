const fs = require('fs');

module.exports = function () {
  fs.readdir('./', 'utf8', (err, files) => {
    if (err) {
      throw err;
    } else {
      // TODO: find a way to hide files
      process.stdout.write(files.join('\n'));
    };
  });
};
