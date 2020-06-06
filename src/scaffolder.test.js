import scaffold from './scaffolder';

describe('scaffolder', () => {
  it('scaffolds jest', async () => {
    expect(await scaffold()).toEqual({
      devDependencies: ['jest', 'jest-when'],
      scripts: {'test:unit:base': 'DEBUG=any jest --testPathPattern=src/.*\\.test\\.js$'}
    });
  });
});
