// Output a prompt
process.stdout.write('prompt > ');

// The stdin 'data' event fires after a user types in a line

process.stdin.on('data', (data) => { // event listener
  const cmd = data.toString().trim(); // remove new line

  if (cmd === 'pwd') {
    process.stdout.write(`Current directory: ${process.cwd()}`);
  } else {
    process.stdout.write('You typed: ' + cmd);
  }

  process.stdout.write('\nprompt > ');
});
