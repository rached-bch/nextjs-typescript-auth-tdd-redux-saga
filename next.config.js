const withCSS = require("@zeit/next-css");
const withSass = require("@zeit/next-sass");

// module.exports = withCSS(withSass());
// module.exports = {
//   env: {
//     customKey: "my-value"
//   }
// };
//module.exports = withCSS(withSass());
let nextConfig = withCSS(withSass());
nextConfig = {
  ...nextConfig,
  env: {
    REACT_APP_GRAPHQL_HTTP: "https://graphqlzero.almansi.me/api"
  }
};
module.exports = nextConfig;
//console.log({ module });
// module.exports = {
//   env: {
//     customKey: "my-value"
//   }
// };
