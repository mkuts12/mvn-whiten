import tar from 'tar-fs';
import fs from 'fs';
import download from './downloader';

function run(argv) {
  var result = download(args);
  return {
    tar: tar.pack(result.path),
    cb: result.delete,
  }
}

export default function mvnWhiten( modules, cb ){
    cb( run( modules ) );
}
