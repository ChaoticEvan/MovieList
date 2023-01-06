// React imports
import React from 'react';
import ReactDOM from 'react-dom/client';

// Reactstrap imports
import 'bootstrap/dist/css/bootstrap.min.css';


// App imports
import MovieList from './components/MovieList';
import HeaderBar from './components/HeaderBar';
import './index.css';

// Firebase imports
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
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

//TODO: Add footer with contact info
export default function Home() {

    return (
        <div>
            <HeaderBar />
            <MovieList />
        </div>
    );
}

// ========================================

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Home />);
