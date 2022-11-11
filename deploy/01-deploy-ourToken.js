const { network } = require("hardhat")
const { developmentChains, INITIAL_SUPPLY } = require("../helper-hardhat-config")
const { verify } = require("../utils/verify")
module.exports = async ({ getNamedAccounts, deployments }) => {
    const { deploy, log } = deployments
    const { deployer } = await getNamedAccounts()
    const ourToken = await deploy("OurToken", {
        from: deployer,
        args: [INITIAL_SUPPLY],
        log: true,
        waitConfirmations: network.config.blockConfirmations || 1,
    })
    log(`OurToken is deployed to ${ourToken.address}`)
    if (!developmentChains.includes(network.name) && procces.env.ETHERSCAN_API_KEY) {
        log(`Verifiying ..... `)
        await verify(ourToken.address, [INITIAL_SUPPLY])
    } else {
        log("Please choose a correct network")
    }
    log("____________________________________")
}
module.exports.tags = ["all", "token"]
