import * as messages from '../constants/message';
import {CHANGE_NOTIFY} from '../constants/actionType';

const initialState = messages.MSG_INTRO;

const notify = (state = initialState, action) => {
    switch(action.type){
        case CHANGE_NOTIFY:
            state = action.content;
            return state;
        default:
            return state;
    }
}

export default notify;