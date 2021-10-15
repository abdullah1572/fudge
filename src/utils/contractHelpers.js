import web3NoAccount from './web3'
// import BlueMoonDAOProxyAbi from './BlueMoonDAOProxyAbi.json';
// import BlueMoonExchangeAbi from './BlueMoonExchangeAbi.json';
// import BlueMoonProxyRegistryAbi from './BlueMoonProxyRegistryAbi.json';
// import BlueMoonTokenAbi from './BlueMoonTokenAbi.json';
// import BlueMoonTokenTransferProxyAbi from './BlueMoonTokenTransferProxyAbi.json';
import BlueMoonProAbi from './BlueMoonProAbi.json'
import BlueMoonUniqueAbi from './BlueMoonUniqueAbi.json'
import BlueMoonFreshAbi from './BlueMoonFreshAbi.json'
import  FactoryBlueMoonAbi from './ FactoryBlueMoonAbi.json'

const getContract = (abi, address, web3) => {
    const _web3 = web3 ?? web3NoAccount;
    // console.log('_web3',_web3);
    return new _web3.eth.Contract(abi, address)
}
export const  BlueMoonProContract=(address,web3)=>{
    return getContract(BlueMoonProAbi, address, web3)
}
export const  BlueMoonUniqueContract=(address,web3)=>{
    return getContract(BlueMoonUniqueAbi, address, web3)
}
export const  BlueMoonFreshContract=(address,web3)=>{
    return getContract(BlueMoonFreshAbi, address, web3)
}
export const  BlueMoonFactoryContract=(address,web3)=>{
    return getContract(FactoryBlueMoonAbi, address, web3)
}
// export const daoProxyContract = (address, web3) => {
//     return getContract(BlueMoonDAOProxyAbi, address, web3)
// }

// export const exchangeContract = (address, web3) => {
//     return getContract(BlueMoonExchangeAbi, address, web3)
// }

// export const proxyRegistryContract = (address, web3) => {
//     return getContract(BlueMoonProxyRegistryAbi, address, web3)
// }

// export const tokenContract = (address, web3) => {
//     return getContract(BlueMoonTokenAbi, address, web3)
// }

// export const tokenTransferProxyContract = (address, web3) => {
//     return getContract(BlueMoonTokenTransferProxyAbi, address, web3)
// }