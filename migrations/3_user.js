const user = artifacts.require("user");

module.exports = function (deployer) {
  deployer.deploy(Migrations);
};
