import _ from "lodash";

import {
  CREATE_STREAM,
  FETCH_STREAMS,
  FETCH_STREAM,
  DELETE_STREAM,
  EDIT_STREAM
} from "../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    // We're taking all the current records we have inside of our state object and adding the men were then calling map keys right here. We're going to take the list of streams that we just got back from our API and we're going to create a object out of it using map keys and the keys inside that object are going to be the IDs of the individual streams themselves. Now map keys returns a big object and we want to take all the key value pairs from that object and add them into the new object that gets created.
    case FETCH_STREAMS:
      return { ...state, ..._.mapKeys(action.payload, "id") };
    case FETCH_STREAM:
      // It's going to have a key of the streams ID and a value of the actual stream itself.
      return { ...state, [action.payload.id]: action.payload };
    case CREATE_STREAM:
      return { ...state, [action.payload.id]: action.payload };
    case EDIT_STREAM:
      return { ...state, [action.payload.id]: action.payload };
    case DELETE_STREAM:
      return _.omit(state, action.payload);
    default:
      return state;
  }
};
