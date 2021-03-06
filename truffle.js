require("babel-register")({
  ignore: /node_modules\/(?!zeppelin-solidity)/
});
require("babel-polyfill");

module.exports = {
  migrations_directory: "./migrations",
  networks: {
    development: {
      host: "localhost",
      port: 9545,
      network_id: "*" // Match any network id
    }
  },
  solc: {
    optimizer: {
      enabled: true,
      runs: 500
    }
  }
};
