import { execSync } from 'child_process';
import path from 'path';
import tmp from 'tmp';
import rm from 'rimraf';
import md5 from 'md5';

const place = path.join(os.tmpdir(), 'whiten-' + md5(new Date().toString()));

function proc({ dir, packages }) {
  return `java -jar "${place}" -d "${dir}" ${packages.join(' ')}`;
}

function createResult(dir) {
  return {
    path: dir,
    delete: () => {
      rm.sync(dir);
    },
  };
}

export default function download(packages) {
  const { name: dir,removeCallback: rmdir } = tmp.dirSync();
  console.log('downloading to ' + dir);
  execSync(proc({ packages, dir }), { stdio: [0,1,2] });
  return createResult(dir);
}
