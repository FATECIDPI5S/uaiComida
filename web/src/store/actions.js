import { push } from 'connected-react-router';

export const signIn = () => dispatch => {
    // Do some stuff to authenticate

    return new Promise(resolve => {
        setTimeout(() => {
            console.log('TESTE');
            dispatch(push('/mesas'));
        }, 3000);
    })
};