import { myFirebase, db } from "../Firebase/";

export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

export const REGISTRATION_REQUEST = "REGISTRATION_REQUEST";
export const REGISTRATION_SUCCESS = "REGISTRATION_SUCCESS";
export const REGISTRATION_FAILURE = "REGISTRATION_FAILURE";


export const requestRegistration = () => {
    return {
        type: REGISTRATION_REQUEST
    }
}

export const registrationSuccess = () => {
    return {
        type: REGISTRATION_SUCCESS
    }
}

export const registrationFailure = () => {
    return {
        type: REGISTRATION_FAILURE
    }
}

const requestLogin = () => {
    return {
        type: LOGIN_REQUEST
    };
};

const receiveLogin = user => {
    return {
        type: LOGIN_SUCCESS,
        user
    };
};

const loginError = () => {
    return {
        type: LOGIN_FAILURE
    };
};



export const registerUser = (user) => dispatch => {
    console.log(user)
    dispatch(requestRegistration());
    db.collection('users').add(user).then((result) => {
        console.log(result)
    })
        .catch((err) => console.log(err))


}

export const loginUser = (email, password) => dispatch => {
    dispatch(requestLogin());
    const ref = db.collection('users').where('email', '==', email).where('password', '==', password)

    ref.get().then(users => {
        console.log(users)
        if (users.empty) {
            dispatch(loginError())
        }

        users.forEach(doc => {
            console.log(doc.id, '=>', doc.data());
            dispatch(receiveLogin(doc.data()))
        });
    })
        .catch(e => dispatch(loginError()))

}