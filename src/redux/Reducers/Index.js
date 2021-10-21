const initState = {
  GetAllCollection: [],
  GetAllToken: [{ user: [] }],
  GetSingletTokenData: [],
  GetSingleCollectionData: { tokens: [], collection: [] },
  GetUserData: [],
  GetUserAllNFTS: [],
  AddFollower: [],
  RemoveFollower: [],
  GetAlreadyFollowed: [],
  GetNumberOfFollowers: [],
  GetFollowing: [],

  Art: [{ user: [] }],
  PhotoGraphy: [{ user: [] }],
  Games: [{ user: [] }],
  Sports: [{ user: [] }],
  Memes: [{ user: [] }],
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
    default:
      return state;
  }
};