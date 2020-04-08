import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    REGISTRATION_REQUEST,
    REGISTRATION_SUCCESS,
    REGISTRATION_FAILURE
} from '../Actions/UserActions';;

let initialState = {
    inProgress: false,
    isRegistered: false,
    isRegistrationFail: false,
    isAuthenticated: false,
    loginError: false
}


export default (state = initialState, action) => {
    switch (action.type) {
        case REGISTRATION_REQUEST:
            return {
                ...state,
                inProgress: true,
                isRegistered: false,
                isRegistrationFail: false
            };
        case REGISTRATION_SUCCESS:
            return {
                ...state,
                inProgress: false,
                isRegistered: true,
                isRegistrationFail: false
            };
        case REGISTRATION_FAILURE:
            return {
                ...state,
                inProgress: false,
                isRegistered: false,
                isRegistrationFail: true
            };
        case LOGIN_REQUEST:
            return {
                ...state,
                inProgress: true,
                isAuthenticated: false,
                loginError: false
            };
        case LOGIN_SUCCESS:
            return {
                ...state,
                inProgress: false,
                isAuthenticated: true,
                user: action.user
            };
        case LOGIN_FAILURE:
            return {
                ...state,
                inProgress: false,
                isAuthenticated: false,
                loginError: true
            };
        default:
            return state;
    }
}