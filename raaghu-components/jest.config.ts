import type { Config } from "@jest/types";
import { defaults } from "jest-config";
// Sync object
const config: Config.InitialOptions = {
  moduleFileExtensions: [...defaults.moduleFileExtensions, "mts"],
  preset: "ts-jest",
  testEnvironment: "jsdom",
  moduleNameMapper: {
    "\\.(scss|sass|css)$": "<rootDir>/__mocks__/styleMock.ts",
    "^raaghu-react-elements$": "<rootDir>/node_modules/raaghu-react-elements/dist/types/index.d.ts"
  },
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
};
export default config;
