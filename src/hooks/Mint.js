import { useCallback } from 'react'
import { useWeb3React } from '@web3-react/core'
import useWeb3 from './useWeb3';
import environment from '../utils/Environment';
import { BlueMoonProContract ,BlueMoonUniqueContract,BlueMoonFreshContract,BlueMoonFactoryContract} from '../utils/contractHelpers'

export const MintPro = (uri) => {
    const { account } = useWeb3React();
    const web3 = useWeb3();
    const tokenAddress = environment.BlueMoonPro;
    const contract = BlueMoonProContract(tokenAddress, web3)
    const MintProFun = useCallback(async () => {
        const  mint=  await contract.methods.mintPro(account,uri).send({ from: account })
        // console.log("mint",mint.events.Transfer.returnValues.tokenId)
        return mint.events.Transfer.returnValues.tokenId;
    }, [account, contract,uri])

    return { mintPro: MintProFun }
}

export const MintUnique = (uri) => {
    const { account } = useWeb3React();
    const web3 = useWeb3();
    const tokenAddress = environment.BlueMoonUnique;
    const contract = BlueMoonUniqueContract(tokenAddress, web3)
    const MintUniqueFun = useCallback(async () => {
        const  mint=  await contract.methods.mintUnique(account,uri).send({ from: account }).on('transactionHash', (tx) => { return tx.transactionHash });
        return mint.events.Transfer.returnValues.tokenId;;
    }, [account, contract,uri])

    return { mintUnique: MintUniqueFun }
}

export const MintFresh = (uri) => {
    const { account } = useWeb3React();
    const web3 = useWeb3();
    const tokenAddress = environment.BlueMoonFresh;
    const contract = BlueMoonFreshContract(tokenAddress, web3)
    const MintFreshFun = useCallback(async () => {
        const  mint=  await contract.methods.mintFresh(account,uri).send({ from: account }).on('transactionHash', (tx) => { return tx.transactionHash });
        return mint.events.Transfer.returnValues.tokenId;
    }, [account, contract,uri])

    return { mintFresh: MintFreshFun }
}

export const MintCustomCollection = (name,symbol) => {
    const { account } = useWeb3React();
    const web3 = useWeb3();
    const tokenAddress = environment.FactoryBlueMoon;
    const contract = BlueMoonFactoryContract(tokenAddress, web3)
    const MintCustomCollection = useCallback(async () => {
        const  mint=  await contract.methods.deployNewCollection(account,name,symbol).send({ from: account });
        // console.log("mint",mint.events.newCollection.returnValues.contractAddress)
        return mint.events.newCollection.returnValues.contractAddress
    }, [account, contract,name,symbol])

    return { mintCustom: MintCustomCollection }
}
// export default Mint;

// value: '1000000000000', gas: '1000000000', gasLimit: '223232'