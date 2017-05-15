const exec = require('child_process').exec;

const gitLogCmd = "git log -1 --pretty=format:%s";
const versionRegex = /version=(major|minor|patch)/ig;
const defaultVersion = 'patch';

exec(gitLogCmd, function(error, stdout, stderr) {
  const version = stdout.match(versionRegex);
  if(version && version.length){
    console.log(version[0].replace(/version=/,''))
  } else {
    console.log(defaultVersion);
  }

});
