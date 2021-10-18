import { useWeb3React  } from "@web3-react/core";
import { useCallback } from "react";
import { AddProfile } from "../services/services";
import { getLibraryForSign} from "../utils/web3React";
import { toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Web3 from 'web3';

export const Signature = (data) => {
  // const { account } = useWeb3React()
  const { account } = useWeb3React()
  const library = getLibraryForSign(Web3.givenProvider)
  const sign = useCallback(async () => {
    if ((library && account)) {
      library
        .getSigner(account)
        .signMessage(data)
        .then(signature => {
          // window.alert(`Success!\n\n${signature}${data}`);
          toast.success(`${signature.substring(0, 6)}...${signature.substring(signature.length - 4)}`, {
            position: "top-right",
            autoClose: 2000,
          });
          AddProfile({walletAddress: data} )
        })
        .catch(error => {
          toast.error(error && error.message, {
            position: "top-right",
            autoClose: 2000,
            });
          // window.alert(
          //   "Failure!" +
          //   (error && error.message ? `\n\n${error.message}` : "")
          // );
        });

    }
    return sign;
  }, [account, library,data])
  return { userSign: sign }
}

//  const WalletBalance = (data) => {
//   const { account } = useWeb3React()
//   const library = getLibraryForSign(Web3.givenProvider)
//   const Balance =  library.getBalance(data)
//     console.log("Balance================================",Balance)
    
// }
// export {WalletBalance}
export default Signature