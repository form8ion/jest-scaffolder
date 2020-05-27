import {assert} from 'chai';
import scaffold from './scaffolder';

suite('scaffolder', () => {
  test('that jest gets scaffolder', async () => {
    assert.deepEqual(await scaffold(), {devDependencies: ['jest', 'jest-when']});
  });
});
