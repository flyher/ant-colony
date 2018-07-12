// requires all tests in `project/test/src/components/**/index.js`
const tests = require.context('./unit/', true, /main.spec\.js$/);
tests.keys().forEach(tests);

// requires all components in `project/src/components/**/index.js`
const components = require.context('../src/entry', true, /app\.js$/);
components.keys().forEach(components);
