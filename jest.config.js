module.exports = {
  roots: ['<rootDir>/src'],
  collectCoverageFrom: [
    '<rootDir>/src/**/*.{ts,tsx}'
    // '!<rootDir>/src/main/**/*',
    // '!<rootDir>/src/**/index.ts',
    // '!**/*.d.ts'
  ],
  coverageDirectory: 'coverage',
  //   setupFilesAfterEnv: ['<rootDir>/src/main/config/jest-setup.ts'],
  //   testPathIgnorePatterns: [
  //     '<rootDir>/node_modules/',
  //     '<rootDir>/tests/e2e/cypress'
  //   ],
  testEnvironment: 'node',
  transform: {
    '.+\\.(ts|tsx)$': 'ts-jest'
  }
//   moduleNameMapper: {
//     '@/tests/(.*)': '<rootDir>/tests/$1',
//     '@/(.*)': '<rootDir>/src/$1',
//     '\\.scss$': 'identity-obj-proxy'
//   }
}
