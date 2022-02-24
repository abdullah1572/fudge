import { useCallback } from 'react'
import { useWeb3React } from '@web3-react/core'
import useWeb3 from './useWeb3';
import environment from '../utils/Environment';
import { FudgeContract,BlueMoonProContract,FudgeTokenContract} from '../utils/contractHelpers';
import Web3 from 'web3';
import { getWei } from '../utils/formatBalance';

export const ByUningBnb = () => {
    const { account } = useWeb3React();
    const web3 = useWeb3();
    const tokenAddress = environment.Fudge;
    const blueMoonUsecontract=environment.BlueMoonPro;
    const contract = FudgeContract(tokenAddress, web3)
    const BNBBuy = useCallback(async (tokenId,price) => {
        const priceToUse=(price*(10**18))
        const  buy =  await contract.methods.buy(blueMoonUsecontract,tokenId).send({ from: account , value: priceToUse })
        return buy
    }, [account, contract,blueMoonUsecontract])

    return { BNBBuy:BNBBuy}
}

export const BuyUsingFudge = () => {
    const { account } = useWeb3React();
    const web3 = useWeb3();
    const tokenAddress = environment.Fudge;
    const blueMoonUsecontract=environment.BlueMoonPro;
    const contract = FudgeContract(tokenAddress, web3)
    const FudgeBuy = useCallback(async (tokenId) => {
        const  buy =  await contract.methods.buyUsingFudge(blueMoonUsecontract,tokenId).send({ from: account})
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
        // console.log("approve",approve)
        return approveAll
    }, [account, contract,fudgeMarketplace])

    return { ApproveAllTokenID:approve}
}

export const ApproveForFudge = () => {
    const { account } = useWeb3React();
    const web3 = useWeb3();
    const Fudge = environment.FudgeToken;
    const contract = FudgeTokenContract(Fudge, web3)
    const fudgeMarketplace = environment.Fudge;
    const approveForFudge = useCallback(async (price) => {
        // const priceToUse = Web3.utils.toWei(price , 'ether')
        console.log("price",price)
        const priceToUse= getWei(price)
        console.log("priceTOUSE",priceToUse)
        const  approve =  await contract.methods.approve(fudgeMarketplace, priceToUse.toString()).send({ from: account})
        // console.log("approve",approve)
        return approve
    }, [account, contract,fudgeMarketplace])

    return { approveForFudge:approveForFudge}
}


export const BNBSalePrice = () => {
  
    const { account } = useWeb3React();
    const web3 = useWeb3();
    const tokenAddress = environment.Fudge;
    const blueMoonUsecontract=environment.BlueMoonPro;
    const contract = FudgeContract(tokenAddress, web3)
    const BNBSale = useCallback(async (tokenId , price) => {
        const priceToUse = Web3.utils.toWei(price , 'ether')
        const  sale =  await contract.methods.setSalePrice(blueMoonUsecontract, tokenId , priceToUse ).send({ from: account })
        return sale
    }, [account, contract,blueMoonUsecontract])

    return { BNBSale:BNBSale}
}

export const FudgeSalePrice = () => {
  
    const { account } = useWeb3React();
    const web3 = useWeb3();
    const tokenAddress = environment.Fudge;
    const blueMoonUsecontract=environment.BlueMoonPro;
    const contract = FudgeContract(tokenAddress, web3)
    const FudgeSale = useCallback(async (tokenId , price) => {
        console.log("tokenId",tokenId);
        console.log("price",price)
        const priceToUse = getWei(price)
        console.log("price in wei ", priceToUse);
        const  sale =  await contract.methods.setSalePriceForFudge(blueMoonUsecontract, tokenId , priceToUse ).send({ from: account })
        return sale
    }, [account, contract,blueMoonUsecontract])

    return { FudgeSale:FudgeSale}
}





