import { useEffect, useState } from 'react'
import BigNumber from 'bignumber.js'
import { useWeb3React } from '@web3-react/core'
import useWeb3 from './useWeb3'
import useRefresh from './useRefresh'

const EthBalance = () => {
    const [balance, setBalance] = useState(new BigNumber(0))
    console.log("balance",balance)
    const { account } = useWeb3React()
    const web3 = useWeb3()
    const { fastRefresh } = useRefresh()
    useEffect(() => {
        const fetchBalance = async () => {
            const res = await web3.eth.getBalance(account)
            setBalance(new BigNumber(res))
        }
        if (account) {
            fetchBalance()
        }
    }, [account, web3, fastRefresh])

    return balance
}

export default EthBalance
