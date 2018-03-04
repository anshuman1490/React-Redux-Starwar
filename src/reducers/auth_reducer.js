import {
    AUTH_USER,
    UNAUTH_USER,
    AUTH_ERROR,
    FETCH_MESSAGE,
    FETCH_MESSAGES,
    CLEAR_MESSAGE,
    USR_NAME
} from '../actions/types'

export default function (state = {}, action) {
    switch (action.type) {
        case AUTH_USER:
            return { ...state, authenticated: true };
        case UNAUTH_USER:
            return { ...state, authenticated: false };

        case AUTH_ERROR:
            return { ...state, error: action.payload };
        case USR_NAME:
            return { ...state, user: action.payload }
    }
    return state;
}

export function getMessages(state = [], action) {
    switch (action.type) {
        case FETCH_MESSAGES:
           
            // const data=[action.payload];
            //console.log(data);
            state = [];
            const newArr = [...action.payload, ...state];
            const namePos = newArr.map(el => el.name);
            const newPayload = newArr.filter((item, index, inputArray) => {
                return namePos.indexOf(item.name) == index;
            });
            
            return newPayload;
        case CLEAR_MESSAGE:
            return [];

    }
    return state;
}

export function getMessage(state = [], action) {
    switch (action.type) {
        case FETCH_MESSAGE:
           
            // const data=[action.payload];
            //console.log(data);
            //state=[];
            const newArr = [...action.payload, ...state];
            const namePos = newArr.map(el => el.name);
            const newPayload = newArr.filter((item, index, inputArray) => {
                return namePos.indexOf(item.name) == index;
            });
            // return state.merge({payload:newPayload});
           
            return newPayload;

    }
    return state;
}