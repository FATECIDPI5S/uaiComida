import { push } from 'connected-react-router';
import firebase from 'firebase';

export const signIn = (email, password) => dispatch => {
    if (email && password) {
        try {
            firebase.auth().signInWithEmailAndPassword(email, password)
                .then(
                    push('/mesas')
                );
        } catch (error) {
            console.log(error);
        }
    }
};