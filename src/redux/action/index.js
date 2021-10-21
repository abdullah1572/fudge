import axios from 'axios'
import { API_URL } from '../../ApiURL';



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

export const GetAllTokensOfCreator = (creatorAddress) => async (dispatch) => {

  await axios.post(`${API_URL}/token/getAllTokensOfCreator`,{ creatorAddress : creatorAddress})
    .then(async (res) => {
      if (res.data.status) {
        dispatch({
          type: "GetAllTokensOfCreator",
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


// export const Art = () => async (dispatch) => {
//   await axios.get(`${API_URL}/token/getAllTokensOfArt`)
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
//           type: "ART",
//           payload: res.data.data,
//         });
//       }
//     })
//     .catch((err) => {
//       return false;
//     })
// };


export const Art = () => async (dispatch) => {
  await axios.get(`${API_URL}/token/getAllTokensOfArt`)
    .then(async (res) => {
      if (res.data.status) {
        dispatch({
          type: "ART",
          payload: res.data.data,
        });
      }
    })
    .catch((err) => {
      return false;
    })
};
export const Photography = () => async (dispatch) => {
  await axios.get(`${API_URL}/token/getAllTokensOfPhotography`)
    .then(async (res) => {
      if (res.data.status) {
        dispatch({
          type: "PHOTOGRAPHY",
          payload: res.data.data,
        });
      }
    })
    .catch((err) => {
      return false;
    })
};

export const Games = () => async (dispatch) => {
  await axios.get(`${API_URL}/token/getAllTokensOfGames`)
  .then(async (res) => {
    if (res.data.status) {
      dispatch({
        type: "GAMES",
        payload: res.data.data,
      });
    }
  })
  .catch((err) => {
    return false;
  })
};


export const Sports = () => async (dispatch) => {
  await axios.get(`${API_URL}/token/getAllTokensOfSports`)
    .then(async (res) => {
      if (res.data.status) {
        dispatch({
          type: "SPORTS",
          payload: res.data.data,
        });
      }
    })
    .catch((err) => {
      return false;
    })
};

export const Memes = () => async (dispatch) => {
  await axios.get(`${API_URL}/token/getAllTokensOfMemes`)
  .then(async (res) => {
    if (res.data.status) {
      dispatch({
        type: "MEMES",
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







