import { SIDEBAR_STATUS } from "../actions/sidebar.action";

const initialState = { status: window.innerWidth <= 768 ? 'close' : 'open' }
export function sidebarReducer(state = initialState, action) {

    if (SIDEBAR_STATUS === action.type) {
        return { ...state, status: action.payload.status }
    }
    return state
}