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
    REACT_APP_GRAPHQL_HTTP: "https://48p1r2roz4.sse.codesandbox.io"
  }
};
module.exports = nextConfig;
//console.log({ module });
// module.exports = {
//   env: {
//     customKey: "my-value"
//   }
// };
