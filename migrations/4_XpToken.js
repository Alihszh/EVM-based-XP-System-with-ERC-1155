const XpToken = artifacts.require("XpToken");

module.exports = function (deployer) {
  deployer.deploy(Migrations);
};
