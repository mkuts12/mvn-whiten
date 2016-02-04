import { execSync } from 'child_process';
import path from 'path';
import tmp from 'tmp';
import rm from 'rimraf';
const place = path.resolve(__dirname, '../mvn-dependency-downloader-jar-with-dependencies.jar');

function proc({ dir, packages }) {
  return `java -jar "${place}" -d "${dir}" ${packages.join(' ')}`;
};

function createResult(dir) {
  return {
    path: dir,
    delete: () => {
      rm.sync(dir);
    }
  };
}

export default function download(packages) {
  const { name: dir, removeCallback: rmdir } = tmp.dirSync();
  console.log('downloading to ' + dir);
  execSync(proc({ packages, dir }), { stdio: [0,1,2] });
  return createResult(dir);
}
