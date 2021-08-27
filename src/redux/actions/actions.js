import * as types from "./action-types";

export function setVideoDetails(payload) {
  return { type: types.VIDEO_DETAILS, payload }
}

export function setSearchResults(payload) {
  return { type: types.SEARCH_RESULTS, payload }
}

export const mapStateToProps = (state) => {
  return {
    videoDetails: state.videoDetails,
    searchResults: state.searchResults
  }
}

export const mapDispatchToProps = {
  setVideoDetails,
  setSearchResults
}