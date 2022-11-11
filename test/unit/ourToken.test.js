const { assert, expect } = require("chai")
const { network, deployments, ethers, getNamedAccounts } = require("hardhat")
const { developmentChains, INITIAL_SUPPLY } = require("../../helper-hardhat-config")

!developmentChains.includes(network.name)
    ? describe.skip
    : describe("OurToken test", async function () {
          let deployer, OurToken, user1
          beforeEach(async () => {
              const accounts = await getNamedAccounts()
              // the one who deploys the contract
              deployer = accounts.deployer
              //the one who gets transfers etc
              user1 = accounts.user1
              await deployments.fixture("all")
              OurToken = await ethers.getContract("OurToken", deployer)
          })
          it("Was deployed", async () => {
              // A contract isdeployed if it has an address
              assert(OurToken.address)
          })
          //the constructor function tests
          describe("constructor", async () => {
              it("Should create a correct initial suply", async () => {
                  // We should get the current valuue of the initialSupply
                  const totalSupply = (await OurToken.totalSupply()).toString()
                  assert.equal(totalSupply, INITIAL_SUPPLY)
              })
              it("Creates a correct token name and symbol", async () => {
                  //to see a ERC Token name you need to use the name() function
                  const name = (await OurToken.name()).toString()
                  // to see a ERC token symbol you need to use the symbol() function
                  const symbol = (await OurToken.symbol()).toString()
                  assert.equal(name, "OurToken")
                  assert.equal(symbol, "OT")
              })
              it("Mints the token", async () => {
                  expect(OurToken._mint)
              })
          })
          //The transfer function tests
          describe("transfers", async () => {
              it("Emits the transfer event", async () => {
                  expect(OurToken.Transfer)
              })
          })
          describe("The approvance", async () => {
              it("Sends the correct amount from one address to another", async () => {
                  expect(OurToken._approve)
              })
          })
          describe("The Allowance", async () => {
              it("Aloows to spend na certain amount", async () => {
                  expect(OurToken._spendAllowance)
              })
          })
      })
