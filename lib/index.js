#!/usr/bin/env node

import tar from 'tar-fs';
import fs from 'fs';
import download from './downloader';

var args = process.argv.slice(2);

function showUsage() {
  console.log([
    "Maven Whiten",
    "------------",
    "",
    "mvn-whiten <groupId>:<artifactId>:<version>[ <groupId>:<artifactId>:<version>...]"
  ].join("\n"));
}

function run(cb) {
  if (args.length === 0 || args.indexOf('--help') != -1 || args.indexOf('-h') != -1) {
    return showUsage();
  }

  var result = download(args);
  tar.pack(result.path).pipe(fs.createWriteStream(args.join('-').replace(/:/g, '_') + '.tar')).on('end', result.delete);
}

run();
