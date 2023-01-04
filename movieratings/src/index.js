// React imports
import React from 'react';
import ReactDOM from 'react-dom/client';

// Reactstrap imports
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    Navbar,
    NavbarBrand,
    NavbarText,
} from 'reactstrap';
import './index.css';

// App imports
import MovieList from './components/MovieList';

// Firebase imports
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionDate } from 'react-firebase-hooks/firestore';


firebase.initializeApp({
    apiKey: "AIzaSyCMZ8zqCS-Z8wZVkCF3ShtZJrFhvrzIog4",
    authDomain: "movielist-41e99.firebaseapp.com",
    projectId: "movielist-41e99",
    storageBucket: "movielist-41e99.appspot.com",
    messagingSenderId: "1063265011886",
    appId: "1:1063265011886:web:44f873e7c856aeb03b453f",
    measurementId: "G-JFQBD9CL7R"
})

const auth = firebase.auth();
const firestore = firebase.firestore();

export default function Home() {
    const user = useAuthState(auth);

    return (
        <div>
            <Navbar color="dark" dark>
                <NavbarBrand href="/" color="dark">Movie Ratings</NavbarBrand>
                <NavbarText>Account</NavbarText>
            </Navbar>
            <MovieList />
        </div>
    );
}

// ========================================

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Home />);
