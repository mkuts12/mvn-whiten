var child_process = require('child_process');
var path = require('path');
var tmp = require('tmp');
var place = path.resolve(__dirname, 'ivy-2.3.0.jar');
var rm = require('rimraf');

module.exports = function(groupId, artifactId, version) {
  var dirData = tmp.dirSync();
  var dir = dirData.name;
  var rmdir = dirData.removeCallback;
  var proc = `java -jar "${place}" -m2compatible -dependency "${groupId}" "${artifactId}" "${version}" -retrieve "${dir}/[artifact]-[revision](-[classifier]).[ext]"`;

  console.log('downloading to ' + dir);

  child_process.execSync(proc, { stdio: [0,1,2] });

  return {
    path: dir,
    delete: function(cb) {
      rm.sync(dir);
    }
  };
}
