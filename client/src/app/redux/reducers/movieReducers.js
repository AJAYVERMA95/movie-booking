import { MOVIE_INFO } from "../dispatchTypes/types.js";

const movieReducer = (state = {}, action = {}) => {
    switch (action.type) {
        case MOVIE_INFO:
            return action.payload;
        default:
            return state;
    }
};
export default movieReducer;
