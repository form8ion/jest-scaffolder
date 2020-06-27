import {promises as fs} from 'fs';
import path from 'path';
import any from '@travi/any';
import {when} from 'jest-when';
import * as makeDir from '../thirdparty-wrappers/make-dir';
import scaffold from './scaffolder';

describe('scaffolder', () => {
  beforeEach(() => {
    jest.spyOn(makeDir, 'default');
    jest.spyOn(fs, 'copyFile');
    fs.copyFile.mockImplementation(() => Promise.resolve());
  });

  it('scaffolds jest', async () => {
    const projectRoot = any.string();
    const pathToCreatedSrcDirectory = any.string();
    when(makeDir.default).calledWith(`${projectRoot}/src`).mockResolvedValue(pathToCreatedSrcDirectory);

    const results = await scaffold({projectRoot});

    expect(fs.copyFile).toHaveBeenCalledWith(
      path.resolve(__dirname, '..', 'templates', 'canary.test.js'),
      `${pathToCreatedSrcDirectory}/canary.test.js`
    );
    expect(results).toEqual({
      devDependencies: ['jest', 'jest-when'],
      scripts: {'test:unit:base': 'DEBUG=any jest --testPathPattern=src/.*\\.test\\.js$'},
      eslintConfigs: ['jest'],
      nextSteps: [{summary: 'Remove the canary test for jest once more valuable tests exist'}]
    });
  });
});
