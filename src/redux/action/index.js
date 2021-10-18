import axios from 'axios'
import { API_URL } from '../../ApiURL';
export const useCollectionAction = () => async (dispatch) => {
  
  await axios.get(`${API_URL}/collection/getAllCollections`)
    .then(async (res) => {
      if (res.data.status) {
        try {
          for (let elem of res.data.data) {
            await axios.post(`${API_URL}/token/getTop3TokensOfCollection`, { contractAddress: elem.contractAddress }).then((res) => {
              elem.CollectionImage = res.data.data
            })
          }
        }
        catch (err) {
          return false;
        }
        dispatch({
          type: "GETCOLLECTION",
          payload: res.data.data,
        });
      }
    })
    .catch((err) => {
      // console.log(err);
      return false;
    })
};

export const useToken = () => async (dispatch) => {
  await axios.get(`${API_URL}/token/getAllTokens`)
    .then(async (res) => {
      if (res.data.status) {
        try {
          for (let elem of res.data.data) {
            console.log("token id",elem.tokenID)
            await axios.post(`${API_URL}/token/getTokenAndDetails`, { contractAddress: elem.contractAddress,walletAddress:elem.walletAddress,tokenID:elem.tokenID }).then((res) => {
            elem.NftData = res.data.data
            })
          }
        }
        catch (err) {
          return false;
        }
        dispatch({
          type: "GETALLTOKEN",
          payload: res.data.data,
        });
      }
    })
    .catch((err) => {
      return false;
    })
};

export const SingleTokenDataFetch = (_id) => async (dispatch) => {
  await axios.post(`${API_URL}/token/getToken`,{_id : _id})
    .then(async (res) => {
      if (res.data.status) {
        dispatch({
          type: "SINGLETOKENDATA",
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
  await axios.post(`${API_URL}/user/getUser`,{walletAddress : walletAddress.walletAddress})
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

export const AddFollower = (account,toFollow) => async (dispatch) => {
  if(account && toFollow){
    await axios.post(`${API_URL}/user/addFollower`,{walletAddress : account,toFollow:toFollow})
      .then(async (res) => {
        if (res.data.status) {
          dispatch({
            type: "ADDFOLLOWER",
            payload: res.data.data,
          });
        }
      })
      .catch((err) => {
        return false;
      })
  }
  else{
    alert("Both address required")
  }
};

export const RemoveFollower = (account,toFollow) => async (dispatch) => {
 
  await axios.post(`${API_URL}/user/removeFollower`,{walletAddress : account,toFollow:toFollow.walletAddress})
    .then(async (res) => {
      if (res.data.status) {
     
        dispatch({
          type: "REMOVEFOLLOWER",
          payload: res.data.data,
        });
      }
    })
    .catch((err) => {
      return false;
    })
    
};


export const GetAlreadyFollowed = (account,toFollow) => async (dispatch) => {
  if(!account || !toFollow){
    alert("both required")
    return false
  }
  await axios.post(`${API_URL}/user/getAlreadyFollowed`,{walletAddress : account,toFollow:toFollow})
    .then(async (res) => {
      if (res.data.status) {
        dispatch({
          type: "GetAlreadyFollowed",
          payload:res.data.data
        });
      }
    })
    .catch((err) => {
      return false;
    })
};


export const GetNumberOfFollowers = (walletAddress) => async (dispatch) => {
  await axios.post(`${API_URL}/user/getNumberOfFollowers`,{walletAddress : walletAddress.walletAddress})
    .then(async (res) => {
      if (res.data.status) {
        dispatch({
          type: "GETNUMBEROFFOLLOWERS",
          payload: res.data.data,
        });
      }
    })
    .catch((err) => {
      return false;
    })
};

// export const GetFollowing = (walletAddress) => async (dispatch) => {

//   await axios.post('http://192.168.18.40:5000/user/getFollowing',{walletAddress : walletAddress.walletAddress})
//     .then(async (res) => {
//       if (res.data.status) {
//         dispatch({
//           type: "GETFOLLOWING",
//           payload: res.data.data,
//         });
//       }
//     })
//     .catch((err) => {
//       return false;
//     })
// };







