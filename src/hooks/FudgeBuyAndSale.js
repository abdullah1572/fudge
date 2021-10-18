import { useCallback } from 'react'
import { useWeb3React } from '@web3-react/core'
import useWeb3 from './useWeb3';
import environment from '../utils/Environment';
import { FudgeContract} from '../utils/contractHelpers';


export const Buy = (price,tokenId) => {
    const { account } = useWeb3React();
    const web3 = useWeb3();
    const tokenAddress = environment.Fudge;
    const blueMoonUsecontract=environment.BlueMoonPro;
    const contract = FudgeContract(tokenAddress, web3)
    const FudgeBuy = useCallback(async () => {
        const  buy=  await contract.methods.buy(price,blueMoonUsecontract,tokenId).send({ from: account })
        // console.log("mint",mint.events.Transfer.returnValues.tokenId)
        return buy
    }, [account, contract])

    return { FudgeBuy:FudgeBuy}
}


