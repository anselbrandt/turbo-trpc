const withTM = require("next-transpile-modules")(["ui", "superjson"]);

module.exports = withTM({
  reactStrictMode: true,
});
