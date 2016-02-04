var download = require('./downloader');
var tar = require('tar-fs');
var fs = require('fs');
var args = process.argv.slice(2);

function showUsage() {
  console.log([
    "Maven Whiten",
    "------------",
    "",
    "mvn-whiten <groupId> <artifactId> <version>"
  ].join("\n"));
}

function run(cb) {
  if (args.length != 3) {
    return showUsage();
  }

  var groupId = args[0];
  var artifactId = args[1];
  var version = args[2];

  var result = download(groupId, artifactId, version);
  tar.pack(result.path).pipe(fs.createWriteStream(args.join('-') + '.tar')).on('end', function() {
    result.delete();
  });
}

run(function() {
  console.log('finished downloading. enjoy your file!');
});
