const nftExplorer = artifacts.require("nft_explorer");

module.exports = function (deployer) {
  deployer.deploy(nftExplorer);
};
