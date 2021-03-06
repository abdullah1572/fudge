// import { useEffect } from 'react'
// import useAuth from './useAuth'
// const ConnectorNames =  {
//   Injected : "injected",
//   WalletConnect : "walletconnect",
//   BSC : "bsc"
// }
// const useEagerConnect = () => {
//   const { login } = useAuth()

//   useEffect(() => {

//     const item = localStorage.getItem("flag")
//     // console.log("item",item)
//     if (item === 'true') {
//       login("injected")
//     }
//     const connectorId = window.localStorage.getItem("connectorId")

//     // Disable eager connect for BSC Wallet. Currently the BSC Wallet extension does not inject BinanceChain
//     // into the Window object in time causing it to throw an error
//     // TODO: Figure out an elegant way to listen for when the BinanceChain object is ready
//     login("injected")
//     // if (  && connectorId !== ConnectorNames.BSC) {
//     // }
//   }, [login])
// }

// export default useEagerConnect

import { useEffect } from 'react'
import useAuth from './useAuth'
const ConnectorNames =  {
  Injected : "injected",
  WalletConnect : "walletconnect",
  BSC : "bsc"
}
const useEagerConnect = () => {
  const { login } = useAuth()
  useEffect(() => {
    const item = localStorage.getItem("flag")
    if (item === 'true') {
      login("injected")
    }
    login("injected")
  }, [login])
}

export default useEagerConnect
