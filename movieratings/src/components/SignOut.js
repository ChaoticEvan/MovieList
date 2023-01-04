import { Button } from "reactstrap";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { useAuthState } from 'react-firebase-hooks/auth';


export default function SignOut() {
    const auth = firebase.auth();
    const [user] = useAuthState(auth);

    return auth.currentUser && (
        <Button className="sign-out" onClick={() => auth.signOut()}>Sign Out of {user.displayName}</Button >
    )

}