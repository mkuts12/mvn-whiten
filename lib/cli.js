#!/usr/bin/env node

import whiten from './index';


function showUsage() {
  console.log([
    'Maven Whiten',
    '------------',
    '',
    'mvn-whiten <groupId>:<artifactId>:<version>',
  ].join('\n'));
}
let packages = process.argv.slice(2);
if (args.length === 0 || args.indexOf('--help') !== -1 || args.indexOf('-h') !== -1) {
  return showUsage();
}

let { tar, cd } = whiten( packages );
let filePath = packages.join('-').replace(/:/g, '_') + '.tar';
tar.pipe(fs.createWriteStream(filePath)).on('end', () => {
  cb();
});
