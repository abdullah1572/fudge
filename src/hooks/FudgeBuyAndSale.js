import { useCallback } from 'react'
import { useWeb3React } from '@web3-react/core'
import useWeb3 from './useWeb3';
import environment from '../utils/Environment';
import { FudgeContract,BlueMoonProContract} from '../utils/contractHelpers';


export const Buy = (price,tokenId) => {
    const { account } = useWeb3React();
    const web3 = useWeb3();
    const tokenAddress = environment.Fudge;
    const blueMoonUsecontract=environment.BlueMoonPro;
    const contract = FudgeContract(tokenAddress, web3)
    const FudgeBuy = useCallback(async () => {
        const  buy =  await contract.methods.buy(blueMoonUsecontract,tokenId).send({ from: account , value: price })
        // console.log("mint",mint.events.Transfer.returnValues.tokenId)
        return buy
    }, [account, contract,price,tokenId])

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
        // console.log("mint",mint.events.Transfer.returnValues.tokenId)
        return approveAll
    }, [account, contract])

    return { ApproveAllTokenID:approve}
}

// export const PutForSale = (tokenId,price) => {
//     const { account } = useWeb3React();
//     const web3 = useWeb3();
//     const tokenAddress = environment.Fudge;
//     const blueMoonUsecontract=environment.BlueMoonPro;
//     const contract = FudgeContract(tokenAddress, web3)
//     const FudgePutOnsale = useCallback(async () => {
//         const  sale =  await contract.methods.setSalePrice(blueMoonUsecontract,tokenId,price).send({ from: account  })
//         // console.log("mint",mint.events.Transfer.returnValues.tokenId)
//         return sale
//     }, [account, contract,tokenId,price])

//     return { FudgeSale:FudgePutOnsale}
// }


export const Sale = (tokenId,price) => {
    const { account } = useWeb3React();
    const web3 = useWeb3();
    const tokenAddress = environment.Fudge;
    const blueMoonUsecontract=environment.BlueMoonPro;
    const contract = FudgeContract(tokenAddress, web3)
    const FudgeSale = useCallback(async () => {
        const  buy =  await contract.methods.setSalePrice(blueMoonUsecontract,tokenId,price).send({ from: account })
        // console.log("mint",mint.events.Transfer.returnValues.tokenId)
        return buy
    }, [account, contract,tokenId,price])

    return { FudgeSale:FudgeSale}
}




