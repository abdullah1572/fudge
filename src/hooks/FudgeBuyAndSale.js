import { useCallback } from 'react'
import { useWeb3React } from '@web3-react/core'
import useWeb3 from './useWeb3';
import environment from '../utils/Environment';
import { FudgeContract,BlueMoonProContract} from '../utils/contractHelpers';
import Web3 from 'web3';

export const Buy = () => {
    const { account } = useWeb3React();
    const web3 = useWeb3();
    const tokenAddress = environment.Fudge;
    const blueMoonUsecontract=environment.BlueMoonPro;
    const contract = FudgeContract(tokenAddress, web3)
    const FudgeBuy = useCallback(async (tokenId,price) => {
        console.log("price========================",price)
        console.log("id==================",tokenId)
        // const priceToUse =  Web3.utils.toWei(price ,'ether')
        const priceToUse=(price*(10**18))
        console.log("priceToUse",priceToUse)
        // const convertPrice=priceToUse.toString()
        const  buy =  await contract.methods.buy(blueMoonUsecontract,tokenId).send({ from: account , value: priceToUse })
        return buy
    }, [account, contract,blueMoonUsecontract])

    return { FudgeBuy:FudgeBuy}
}

export const ApproveForAll = () => {
    const { account } = useWeb3React();
    const web3 = useWeb3();
    const bluemoon = environment.BlueMoonPro;
    const contract = BlueMoonProContract(bluemoon, web3)
    const fudgeMarketplace = environment.Fudge;
    const approve = useCallback(async () => {
        const  approveAll =  await contract.methods.setApprovalForAll(fudgeMarketplace,true).send({ from: account})
        return approveAll
    }, [account, contract,fudgeMarketplace])

    return { ApproveAllTokenID:approve}
}


export const Sale = () => {
  
    const { account } = useWeb3React();
    const web3 = useWeb3();
    const tokenAddress = environment.Fudge;
    const blueMoonUsecontract=environment.BlueMoonPro;
    const contract = FudgeContract(tokenAddress, web3)
    const FudgeSale = useCallback(async (tokenId , price) => {
        const priceToUse = Web3.utils.toWei(price , 'ether')
        const  sale =  await contract.methods.setSalePrice(blueMoonUsecontract, tokenId , priceToUse ).send({ from: account })
        return sale
    }, [account, contract,blueMoonUsecontract])

    return { FudgeSale:FudgeSale}
}




