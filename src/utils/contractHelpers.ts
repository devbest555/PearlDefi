import Web3 from 'web3'
import { AbiItem } from 'web3-utils'
import { getWeb3 } from 'utils/web3'

// Addresses
import {
  getCakeAddress,
  getLotteryAddress,
  getLotteryTicketAddress,
  getMasterChefAddress,
} from 'utils/addressHelpers'

// ABI
import bep20Abi from 'config/abi/erc20.json'
import cakeAbi from 'config/abi/cake.json'
import ifoAbi from 'config/abi/ifo.json'
import lotteryAbi from 'config/abi/lottery.json'
import lotteryTicketAbi from 'config/abi/lotteryNft.json'
import masterChef from 'config/abi/masterchef.json'

const getContract = (abi: any, address: string, web3?: Web3) => {
  const _web3 = web3 ?? getWeb3();
  return new _web3.eth.Contract((abi as unknown) as AbiItem, address)
}

/**
 *  Zap Contracts
 */

export const getErc20 = (address: string, web3?: Web3) => {
  return getContract(bep20Abi, address, web3)
}

/**
 *  Pacnake Swap Contracts
 */

export const getBep20Contract = (address: string, web3?: Web3) => {
  return getContract(bep20Abi, address, web3)
}
export const getIfoContract = (address: string, web3?: Web3) => {
  return getContract(ifoAbi, address, web3)
}
export const getCakeContract = (web3?: Web3) => {
  return getContract(cakeAbi, getCakeAddress(), web3)
}
export const getLotteryContract = (web3?: Web3) => {
  return getContract(lotteryAbi, getLotteryAddress(), web3)
}
export const getLotteryTicketContract = (web3?: Web3) => {
  return getContract(lotteryTicketAbi, getLotteryTicketAddress(), web3)
}
export const getMasterchefContract = (web3?: Web3) => {
  return getContract(masterChef, getMasterChefAddress(), web3)
}
