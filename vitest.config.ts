import {
  configDefaults,
  coverageConfigDefaults,
  defineConfig,
} from 'vitest/config';

export default defineConfig({
  test: {
    exclude: [...configDefaults.exclude, 'dist/**/*'],
    reporters: [
      'default',
      // 'verbose',
      // 'junit',
      // 'json',
    ],
    outputFile: {
      // junit: './junit-report.xml',
      // json: './json-report.json',
    },
    coverage: {
      provider: 'v8',
      exclude: [
        // 'src/api/const/index.ts',
        // 'src/api/helper/index.ts',
        ...coverageConfigDefaults.exclude,
        'dist/**/*',
      ],
      reporter: [
        'text',
        'text-summary',
        // 'text-lcov',
        'json',
        'html',
      ],
    },
  },
});
