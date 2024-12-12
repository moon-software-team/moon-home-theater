module.exports = {
  testEnvironment: "jsdom",
  collectCoverageFrom: ["packages/**/*.{ts,tsx,js,jsx}"],
  moduleFileExtensions: ["ts", "tsx", "js", "jsx"],
  modulePathIgnorePatterns: ["<rootDir>/examples", "<rootDir>/tooling/cra-template*"],
  transform: {
    "^.+\\.(t|j)sx?$": [
      "@swc/jest",
      {
        jsc: {
          transform: {
            react: {
              runtime: "automatic",
            },
          },
        },
      },
    ],
  },
  transformIgnorePatterns: ["[/\\\\]node_modules[/\\\\].+\\.(js|jsx)$"]
};
