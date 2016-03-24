import tar from 'tar-fs';
import fs from 'fs';
import download from './downloader';

function showUsage() {
  console.log([
    'Maven Whiten',
    '------------',
    '',
    'mvn-whiten <groupId>:<artifactId>:<version>',
  ].join('\n'));
}

function run(argv) {
  var args = argv.slice(2);

  if (args.length === 0 || args.indexOf('--help') !== -1 || args.indexOf('-h') !== -1) {
    return showUsage();
  }

  var result = download(args);
  return {
    tar: tar.pack(result.path),
    cb: result.delete,
  }
}

export default function mvnWhiten( modules, cb ){
    var arr = [ '', '' ];
    arr.push(modules);
    cb( run( arr ) );
}
