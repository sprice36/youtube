import { SEARCH_RESULTS, VIDEO_DETAILS } from "./actions/action-types";
const initialState = {
	videoDetails: {}, // individual video info,
	searchResults: [], // call API and store results
};

function reducer(state = initialState, action) {
	switch (action.type) {
		case SEARCH_RESULTS:
			return Object.assign({}, state, {
				searchResults: action.payload,
			});
		case VIDEO_DETAILS:
			return Object.assign({}, state, {
				videoDetails: action.payload,
			});

		default:
	}
	return state;
}

export default reducer;
