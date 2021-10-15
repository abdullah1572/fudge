const initState = {
  GetAllCollection: [],
  GetAllToken: [],
  GetSingletTokenData: [],
  GetSingleCollectionData: { tokens: [], collection: [] },
  GetUserData:[],
  GetUserAllNFTS: [],
  AddFollower:[],
  RemoveFollower:[],
  GetAlreadyFollowed:[],
  GetNumberOfFollowers:[],
  GetFollowing:[],
}
export const CollectionReducer = (state = initState, action) => {
  const { type, payload } = action; //object destructring
  switch (type) {
    case "GETCOLLECTION":
      return {
        ...state,
        GetAllCollection: payload,
      };
    case "GETALLTOKEN":
      return {
        ...state,
        GetAllToken: payload,
      };
    case "SINGLETOKENDATA":
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
      case "ADDFOLLOWER":
      return {
        ...state,
        payload,
      };
      case "REMOVEFOLLOWER":
      return {
        ...state,
        RemoveFollower: payload,
      };

      case "GetAlreadyFollowed":
        return {
          ...state,
          GetAlreadyFollowed:payload,
        };
      case "GETNUMBEROFFOLLOWERS":
      return {
        ...state,
        GetNumberOfFollowers: payload,
      };
      case "GETFOLLOWING":
      return {
        ...state,
        GetFollowing: payload,
      };
    default:
      return state;
  }
};