import scaffold from './scaffolder';

describe('scaffolder', () => {
  it('scaffolds jest', async () => {
    expect(await scaffold()).toEqual({devDependencies: ['jest', 'jest-when']});
  });
});
