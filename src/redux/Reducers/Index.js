
const initState = {
  GetLatestUploadNfts: [{ users: [], creators: [], orders: [], likedby: [] }],
  GetAllToken: [{ users: [], creators: [], orders: [], likedby: [] }],
  GetSingletTokenData: [],
  GetSingleCollectionData: { tokens: [], collection: [] },
  GetUserData: [],
  GetUserAllNFTS: [],
  AddFollower: [],
  RemoveFollower: [],
  GetAlreadyFollowed: [],
  GetNumberOfFollowers: [],
  GetFollowing: [],
  Art: [{ users: [], creators: [], orders: [], likedby: [] }],
  PhotoGraphy: [{ users: [], creators: [], orders: [], likedby: [] }],
  Games: [{ users: [], creators: [], orders: [], likedby: [] }],
  Sports: [{ users: [], creators: [], orders: [], likedby: [] }],
  Memes: [{ users: [], creators: [], orders: [], likedby: [] }],

  GetAllTokensOfCreator: [{ users: [], creators: [], orders: [], likedby: [] }],
  //user Profile apis
  GetOwnedData: [{ users: [], creators: [], orders: [], likedby: [] }],
  GetOnSaleData: [{ users: [], creators: [], orders: [], likedby: [] }],
  GetLikedData: [{ users: [], creators: [], orders: [], likedby: [] }],
  GetCreatedData: [{ users: [], creators: [], orders: [], likedby: [] }],

  GetLikeToken: [{ likeToken: [], userLikes: [] }],
  GetUnLikeToken: [{ likeToken: [], userLikes: [] }],

  //get followers in profile
  GetFollowersInProfile: [],
  //get following in profile
  GetFollowingInProfile: []
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
        GetAlreadyFollowed: payload,
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

    case "ART":
      return {
        ...state,
        Art: payload,
      };

    case "PHOTOGRAPHY":
      return {
        ...state,
        PhotoGraphy: payload,
      };

    case "GAMES":
      return {
        ...state,
        Games: payload,
      };

    case "SPORTS":
      return {
        ...state,
        Sports: payload,
      };
    case "MEMES":
      return {
        ...state,
        Memes: payload,
      };

    case "GetAllTokensOfCreator":
      return {
        ...state,
        GetAllTokensOfCreator: payload,
      };

    case "OWNED":
      return {
        ...state,
        GetOwnedData: payload,
      };
    case "ONSALE":
      return {
        ...state,
        GetOnSaleData: payload,
      };
    case "LIKED":
      return {
        ...state,
        GetLikedData: payload,
      };
    case "CREATED":
      return {
        ...state,
        GetCreatedData: payload,
      };

    //Like and Unlike

    case "LIKE":
      return {
        ...state,
        GetLikeToken: payload,
      };
    case "UNLIKE":
      return {
        ...state,
        GetUnLikeToken: payload,
      };

      //get followers in profile
      case "GETFOLLOWERS":
        return {
          ...state,
          GetFollowersInProfile: payload,
        };
        case "GETFOLLOWING":
          return {
            ...state,
            GetFollowingInProfile: payload,
          };
  




    default:
      return state;
  }
};