const MusicNFT = artifacts.require("MusicNFT");

module.exports = async function (deployer) {
  await deployer.deploy(MusicNFT);
};
