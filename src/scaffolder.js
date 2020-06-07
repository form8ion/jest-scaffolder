export default function () {
  return {
    devDependencies: ['jest', 'jest-when'],
    scripts: {'test:unit:base': 'DEBUG=any jest --testPathPattern=src/.*\\.test\\.js$'},
    eslintConfigs: ['jest']
  };
}
