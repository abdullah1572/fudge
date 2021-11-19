
const initState = {
  GetLatestUploadNfts: [{ users: [], creators: [], orders: [], likedby: [] }],
  GetAllToken: [{ users: [], creators: [], orders: [], likedby: [] }],
  GetSingletTokenData: [],
  GetSingleCollectionData: { tokens: [], collection: [] },
  GetUserData: [],
  GetUserAllNFTS: [],
 
}
export const CollectionReducer = (state = initState, action) => {
  const { type, payload } = action; //object destructring
  switch (type) {
    case "GetTop4TokensOfCollection":
      return {
        ...state,
        GetLatestUploadNfts: payload,
      };
    case "GetAllNftsAndDetals":
      return {
        ...state,
        GetAllToken: payload,
      };
    case "GetTokenAndDetails":
      return {
        ...state,
        GetSingletTokenData: payload,
      };
    case "SINGLECOLLECTIONDATA":
      return {
        ...state,
        GetSingleCollectionData: payload,
      };
    case "GETUSERDATA":
      return {
        ...state,
        GetUserData: payload,
      };
    case "GETUSERNFTS":
      return {
        ...state,
        GetUserAllNFTS: payload,
      };
  
   
    default:
      return state;
  }
};