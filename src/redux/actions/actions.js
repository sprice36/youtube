import * as types from "./actionTypes";

export function setVideoDetails(payload) {
  return { type: types.VIDEO_DETAILS, payload };
}

export function getSearchResults(payload) {
  return { type: types.SEARCH_RESULTS, payload };
}
