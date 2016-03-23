import tar from 'tar-fs';
import fs from 'fs';
import download from './downloader';
export download from './downloader';

function showUsage() {
  console.log([
    "Maven Whiten",
    "------------",
    "",
    "mvn-whiten <groupId>:<artifactId>:<version>"
  ].join("\n"));
}

export function run(argv, cb) {
  var args = argv.slice(2);

  if (args.length === 0 || args.indexOf('--help') != -1 || args.indexOf('-h') != -1) {
    return showUsage();
  }

  var result = download(args);
  tar.pack(result.path).pipe(fs.createWriteStream(args.join('-').replace(/:/g, '_') + '.tar')).on('end', () => {
      result.delete();
      cb ? cb( result.path ) : undefined;
  });
}

export default function mvnWhiten( modules, cb ){
    var arr = [ '', '' ];
    arr.push(modules);
    run(arr, cb);
}
