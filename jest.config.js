module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  roots: ["<rootDir>/src", "<rootDir>/tests"],
  testMatch: [
    "**/tests/**/?(*.)+(spec|test).+(ts)",
    "**/?(*.)+(spec|test).+(ts)",
  ],
  // setupFilesAfterEnv: ["<rootDir>/tests/setup.ts"],
  // moduleNameMapper: {
  //   "^src/(.*)$": "<rootDir>/src/$1",
  // },
};
