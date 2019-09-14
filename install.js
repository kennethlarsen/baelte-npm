let exec = require('child_process').exec;

exec('curl -LSfs https://japaric.github.io/trust/install.sh | \
sh -s -- --git kennethlarsen/baelte', (error, stdout, stderr) => {
  console.log(stderr);
});
