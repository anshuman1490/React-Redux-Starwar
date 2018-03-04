
import { browserHistory } from 'react-router'
import {
    AUTH_USER,
    UNAUTH_USER,
    AUTH_ERROR,
    FETCH_MESSAGE,
    FETCH_MESSAGES,
    CLEAR_MESSAGE,
    USR_NAME
} from './types';

const ROOT_URL = `https://swapi.co/api`;


export function signinUser({ name, password }) {

    return function (dispatch) {
        fetch(`${ROOT_URL}/people/?search=${name}`).
            then(response => response.json()).
            then(response => {
                let isAuth = false;
            
                response.results.some(result => {
                    if (result.name === name && result.birth_year === password) {
                        isAuth = true;
                        
                        dispatch({ type: USR_NAME,
                                   payload:name});
                        return isAuth;
                    }
                })
                if (!isAuth) {
                    dispatch(authError('Invalid sign in credential'))
                }
                else {
                    dispatch({ type: AUTH_USER });
                   
                    browserHistory.push('/feature');
                }
            }
            );

    }
}

export function authError(error) {
    return {
        type: AUTH_ERROR,
        payload: error
    }
}

export function signoutUser() {
    return { type: UNAUTH_USER };
}



export function fetchMessage(value) {
    return function (dispatch, getState) {
        const prvst=getState().msgs;
        dispatch({type: CLEAR_MESSAGE});
        
        const newdata=prvst.filter((item)=>{
            if(item.name.toLowerCase()==value.toLowerCase()){
                return true;
            }
        });

         if(getState().msgs.length==0){
            dispatch({
                type: FETCH_MESSAGE,
                payload: newdata
            });
          }
        
      
    }
}

export function fetchMessages(value) {
    return function (dispatch) {
        fetch(`${ROOT_URL}/planets/?search=${value}`).
            then(response => response.json()).
            then(response => {
                const mPlanets = response.results.filter(planet => {
                    if (planet.name.toLowerCase().includes(value.toLowerCase())) {

                        return true;
                    }
                })
                dispatch({
                    type: FETCH_MESSAGES,
                    payload: mPlanets
                })

                //dispatch(fetchPlanet(response, value));
            })
    }
}