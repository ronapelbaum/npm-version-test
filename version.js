const exec = require('child_process').exec;

exec("git log -1 --pretty=format:%s", function(error, stdout, stderr) {
  const regRes = /\[(major|minor|patch)\[/ig.exec(stdout);
  const version = (regRes && regRes[1].toLowerCase()) || 'patch';

  console.log(version)
});
