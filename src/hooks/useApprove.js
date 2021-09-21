import { useCallback } from 'react'
import { useWeb3React } from '@web3-react/core'
import useWeb3 from './useWeb3';
import environment from '../utils/Environment';
import { getBep20Contract } from '../utils/contractHelpers'

const spender='0x68cba4E61288E7D9244739c293B9571E6A873F7c'; //static
export const useApprove = (amount) => {
    const { account } = useWeb3React();
    const web3 = useWeb3();
    const tokenAddress = environment.YfethContractAddress;
    const contract = getBep20Contract(tokenAddress, web3)
    const ApproveTokens = useCallback(async () => {
        const approved = contract.methods.approve(spender,amount).send({ from: account })
        .on('transactionHash', (tx) => { return tx.transactionHash });
        return approved
    },[account, contract, amount])

    return { Approve: ApproveTokens }
}

export default useApprove;