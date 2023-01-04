import { Button } from "reactstrap";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';


export default function SignIn() {
    const auth = firebase.auth();
    const signInWithGoogle = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        auth.signInWithPopup(provider);
    }

    return (
        <Button className="sign-in" onClick={signInWithGoogle}>Sign in</Button>
    )

}