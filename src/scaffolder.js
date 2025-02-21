import {promises as fs} from 'node:fs';
import {resolve, dirname} from 'node:path';
import {fileURLToPath} from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));          // eslint-disable-line no-underscore-dangle

export default async function ({projectRoot}) {
  const eslintConfigs = ['jest'];
  await fs.mkdir(`${projectRoot}/src`);

  await fs.copyFile(
    resolve(__dirname, '..', 'templates', 'canary.test.js'),
    `${projectRoot}/src/canary.test.js`
  );

  return {
    testFilenamePattern: 'src/**/*.test.js',
    devDependencies: ['jest', 'jest-when'],
    scripts: {'test:unit:base': 'DEBUG=any jest --testPathPattern=src/.*\\.test\\.js$'},
    eslintConfigs,
    eslint: {configs: eslintConfigs},
    nextSteps: [{summary: 'Remove the canary test for jest once more valuable tests exist'}]
  };
}
