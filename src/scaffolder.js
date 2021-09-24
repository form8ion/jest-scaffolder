import {promises as fs} from 'fs';
import path from 'path';
import makeDir from '../thirdparty-wrappers/make-dir';

export default async function ({projectRoot}) {
  const eslintConfigs = ['jest'];
  const createdSrcDirectory = await makeDir(`${projectRoot}/src`);

  await fs.copyFile(
    path.resolve(__dirname, '..', 'templates', 'canary.test.js'),
    `${createdSrcDirectory}/canary.test.js`
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
