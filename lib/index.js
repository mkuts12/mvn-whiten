import tar from 'tar-fs';
import fs from 'fs';
import download from './downloader';

function run(modules) {
  var result = download(modules);
  return {
    tar: tar.pack(result.path),
    cb: result.delete,
  }
}

export default function mvnWhiten( { modules, callback } ){
  let { tar, cb } = run( modules );
  let err = undefined;
  callback( err, { tar, cb } );
}
