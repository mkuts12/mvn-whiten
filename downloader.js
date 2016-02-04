var child_process = require('child_process');
var path = require('path');
var tmp = require('tmp');
var place = path.resolve(__dirname, 'mvn-dependency-downloader-jar-with-dependencies.jar');
var rm = require('rimraf');

function buildString(groupId, artifactId, version) {
  return `${groupId}:${artifactId}:${version}`;
}

module.exports = function(groupId, artifactId, version) {
  var dirData = tmp.dirSync();
  var dir = dirData.name;
  var rmdir = dirData.removeCallback;
  var proc = `java -jar "${place}" -d "${dir}" ${buildString(groupId, artifactId, version)}`;

  console.log('downloading to ' + dir);

  child_process.execSync(proc, { stdio: [0,1,2] });

  return {
    path: dir,
    delete: function(cb) {
      rm.sync(dir);
    }
  };
}
