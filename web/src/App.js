import React from "react";
import Routes from "./routes";
import { Provider } from "react-redux";
import store from "./store";

import * as firebase from "firebase";

import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import "./styles.css";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAFzxApzgkzm20Wn5cHJkErz6ecCT6s61o",
    authDomain: "uaicomida-eea47.firebaseapp.com",
    databaseURL: "https://uaicomida-eea47.firebaseio.com",
    projectId: "uaicomida-eea47",
    storageBucket: "uaicomida-eea47.appspot.com",
    messagingSenderId: "1092962940311",
    appId: "1:1092962940311:web:ae62eb8c572a6792"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const customTheme = createMuiTheme({
    palette: {
        primary: {
            main: "#b71c1c"
        },
        secondary: {
            main: "#c62828"
        }
    }
});

const App = () => (
    <div className="App">
        <MuiThemeProvider theme={customTheme}>
            <Provider store={store}>
                <Routes />
            </Provider>
        </MuiThemeProvider>
    </div>
);

export default App;