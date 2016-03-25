#!/usr/bin/env node

import whiten from './index';
import fs from 'fs';


function showUsage() {
  console.log([
    'Maven Whiten',
    '------------',
    '',
    'mvn-whiten <groupId>:<artifactId>:<version>',
  ].join('\n'));
}

let packages = process.argv.slice(2);
if (packages.length === 0 || packages.indexOf('--help') !== -1 || packages.indexOf('-h') !== -1) {
  showUsage();
  process.exit(1);
}

whiten( packages, ( err, { tar, cb }  ) => {
  let filePath = packages.join('-').replace(/:/g, '_') + '.tar';
  tar.pipe(fs.createWriteStream(filePath)).on('end', () => {
      cb();
  });

} );
