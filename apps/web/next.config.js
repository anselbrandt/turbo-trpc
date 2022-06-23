const withTM = require("next-transpile-modules")([
  "ui",
  "superjson",
  "api",
  "db",
]);

module.exports = withTM({
  reactStrictMode: true,
});
