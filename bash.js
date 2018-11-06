// Output a prompt
process.stdout.write('prompt > ');

// The stdin 'data' event fires after a user types in a line
const pwd = require('./pwd');
const ls = require('./ls');
const cat = require('./cat');

process.stdin.on('data', (data) => { // event listener
  const cmd = data.toString().trim(); // remove new line

  if (cmd === 'pwd') {
    pwd();
  } else if (cmd === 'ls') {
    ls();
  } else if (cmd.startsWith('cat')) {
    const fileName = cmd.split(' ')[1];
    cat(fileName);
  }

  process.stdout.write('\nprompt > ');
});
