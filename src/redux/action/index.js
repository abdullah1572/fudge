import axios from 'axios'
import { API_URL } from '../../ApiURL';
import { toast } from 'react-toastify';
export const GetTop4TokensOfCollection = () => async (dispatch) => {
  
  await axios.get(`${API_URL}/token/getTop4TokensOfCollection`)
    .then(async (res) => {
      if (res.data.status) {
        dispatch({
          type: "GetTop4TokensOfCollection",
          payload: res.data.data,
        });
      }
    })
    .catch((err) => {
      // console.log(err);
      return false;
    })
};

export const GetAllNftsAndDetails = () => async (dispatch) => {
  await axios.get(`${API_URL}/token/getAllTokensAndDetails`)
    .then(async (res) => {
      if (res.data.status) {
        dispatch({
          type: "GetAllNftsAndDetals",
          payload: res.data.data,
        });
      }
    })
    .catch((err) => {
      return false;
    })
};



// export const useToken = () => async (dispatch) => {
//   await axios.get(`${API_URL}/token/getAllTokens`)
//     .then(async (res) => {
//       if (res.data.status) {
//         try {
//           for (let elem of res.data.data) {
//             await axios.post(`${API_URL}/token/getTokenAndDetails`, { contractAddress: elem.contractAddress,walletAddress:elem.walletAddress,tokenID:elem.tokenID }).then((res) => {
//             elem.NftData = res.data.data
//             })
//           }
//         }
//         catch (err) {
//           return false;
//         }
//         dispatch({
//           type: "GETALLTOKEN",
//           payload: res.data.data,
//         });
//       }
//     })
//     .catch((err) => {
//       return false;
//     })
// };

export const GetTokenAndDetails = (contractAddress,walletAddress,tokenID) => async (dispatch) => {
  await axios.post(`${API_URL}/token/getTokenAndDetails`,{contractAddress: contractAddress,walletAddress:walletAddress,tokenID:tokenID })
    .then(async (res) => {
      if (res.data.status) {
        dispatch({
          type: "GetTokenAndDetails",
          payload: res.data.data,
        });
      }
    })
    .catch((err) => {
      return false;
    })
};


export const GetUserNFTS = (walletAddress) => async (dispatch) => {
  await axios.post(`${API_URL}/token/getTokensOfUser`,{walletAddress : walletAddress.walletAddress})
    .then(async (res) => {
      if (res.data.status) {
        dispatch({
          type: "GETUSERNFTS",
          payload: res.data.data,
        });
      }
    })
    .catch((err) => {
      return false;
    })
};
export const GetUserData = (walletAddress) => async (dispatch) => {
  await axios.post(`${API_URL}/user/getUser`,{walletAddress : walletAddress})
    .then(async (res) => {
      if (res.data.status) {
        dispatch({
          type: "GETUSERDATA",
          payload: res.data.data,
        });
      }
    })
    .catch((err) => {
      return false;
    })
};


export const SingleCollectionDataFetch = (contractAddress) => async (dispatch) => {

  await axios.post(`${API_URL}/token/getAllTokensOfCollectionAndCollectionData`,{contractAddress : contractAddress.contractAddress})
    .then(async (res) => {
      if (res.data.status) {
        dispatch({
          type: "SINGLECOLLECTIONDATA",
          payload: res.data.data,
        });
      }
    })
    .catch((err) => {
      return false;
    })
};



