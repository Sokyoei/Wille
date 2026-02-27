import { type Config } from "prettier";

const config: Config = {
  trailingComma: "all",
  endOfLine: "lf",
  tabWidth: 2,
  printWidth: 120,
  plugins: ["prettier-plugin-organize-imports"],
};

export default config;
