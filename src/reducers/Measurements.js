import _ from 'lodash';

import { SET_DATA } from '../saga';

const initialState = [];

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_DATA:
            return updateArray(state, action.data);
        default:
            return state;
    }
};

const updateArray = (currentState, data) => {
    const output = _.cloneDeep(currentState);
    const toConcat = [];
    data.forEach(el => {
        const i = _.findIndex(output, { _id: el._id });
        if (i === -1) {
            toConcat.push(el);
        } else {
            output.splice(i, 1, el);
        }
    });
    return [
        ...output,
        ...toConcat
    ]
};