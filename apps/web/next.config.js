const withTM = require("next-transpile-modules")(["ui", "superjson", "api"]);

module.exports = withTM({
  reactStrictMode: true,
});
