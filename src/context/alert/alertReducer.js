import {HIDE_ALERT, SHOW_ALERT} from "../types";

const handlers = {
DEFAULT: state => state,
[SHOW_ALERT]: (state, {payload}) => ({...payload, visible: true}),
[HIDE_ALERT]: state => ({...state, visible: false})
}

export const alertReducer = (state, action) => {
const handle = handlers[action.type] || handlers.DEFAULT
    return handle(state, action)
}