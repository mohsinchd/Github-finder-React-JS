const githubReducer = (state, action) => {
  switch (action.type) {
    case "Get_Users": {
      return {
        ...state,
        users: action.payload,
        isLoading: false,
      };
    }

    case "Get_User": {
      return {
        ...state,
        user: action.payload,
        isLoading: false,
      };
    }
    case "Set_Loading": {
      return {
        ...state,
        isLoading: true,
      };
    }

    case "Clear_Users": {
      return {
        users: [],
      };
    }
    default:
      return state;
  }
};

export default githubReducer;
