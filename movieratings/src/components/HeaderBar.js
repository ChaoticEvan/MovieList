import {
    Navbar,
    NavbarBrand,
    NavbarText,
} from 'reactstrap';

import SignIn from './SignIn';
import SignOut from './SignOut';

import { useAuthState } from 'react-firebase-hooks/auth';
import firebase from 'firebase/compat/app';

export default function HeaderBar() {
    const auth = firebase.auth();
    const [user] = useAuthState(auth);

    return (
        <Navbar color="dark" dark>
            <NavbarBrand href="/" color="dark">Movie Ratings</NavbarBrand>
            <NavbarText>{user ? <SignOut /> : <SignIn />}</NavbarText>
        </Navbar>
    );
}