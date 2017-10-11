import objectAssign from 'object-assign';

import { RECEIVE_CTNT } from '../../actions/types';

export const ctnt = (state = {}, action) => {
    switch (action.type) {
    case RECEIVE_CTNT:
        return objectAssign({}, state, action.ctnt);
    default:
        return objectAssign(
            {},
            state,
            { title: 'Now', body: 'Loading...' }
        );
    }
};
