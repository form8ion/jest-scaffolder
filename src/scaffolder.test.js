import path, {dirname} from 'node:path';
import {fileURLToPath} from 'node:url';

import any from '@travi/any';
import {when} from 'jest-when';
import {beforeEach, describe, expect, it, jest} from '@jest/globals';

const __dirname = dirname(fileURLToPath(import.meta.url));          // eslint-disable-line no-underscore-dangle

jest.unstable_mockModule('node:fs', () => ({
  promises: {
    copyFile: jest.fn(),
    mkdir: jest.fn()
  }
}));

describe('scaffolder', () => {
  let scaffold, fs;

  beforeEach(async () => {
    ({default: scaffold} = await import('./scaffolder.js'));
    ({promises: fs} = await import('node:fs'));
  });

  it('scaffolds jest', async () => {
    const projectRoot = any.string();
    const pathToCreatedSrcDirectory = any.string();
    const eslintConfigs = ['jest'];
    when(fs.mkdir).calledWith(`${projectRoot}/src`, {recursive: true}).mockResolvedValue(pathToCreatedSrcDirectory);

    const results = await scaffold({projectRoot});

    expect(fs.copyFile).toHaveBeenCalledWith(
      path.resolve(__dirname, '..', 'templates', 'canary.test.js'),
      `${projectRoot}/src/canary.test.js`
    );
    expect(results).toEqual({
      testFilenamePattern: 'src/**/*.test.js',
      dependencies: {javascript: {development: ['jest', 'jest-when']}},
      scripts: {'test:unit:base': 'DEBUG=any jest --testPathPattern=src/.*\\.test\\.js$'},
      eslintConfigs,
      eslint: {configs: eslintConfigs},
      nextSteps: [{summary: 'Remove the canary test for jest once more valuable tests exist'}]
    });
  });
});
