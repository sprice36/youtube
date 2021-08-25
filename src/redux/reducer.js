import * as types from "./actions/action-types";
const initialState = {
  searchResults: [], // call API and store results
  videoDetails: {}, // individual video info,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SEARCH_RESULTS:
      return Object.assign({}, state, {
        searchResults: Object.assign({}, state.searchResults, action.payload),
      });

    default:
      return state;
  }
};

export default reducer;
