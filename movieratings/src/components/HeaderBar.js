import {
    Button,
    Col,
    Input,
    Form,
    Label,
    Nav,
    NavItem,
    Navbar,
    NavbarBrand,
    NavbarText,
    Row
} from 'reactstrap';

import SignIn from './SignIn';
import SignOut from './SignOut';

import { useAuthState } from 'react-firebase-hooks/auth';
import firebase from 'firebase/compat/app';

export default function HeaderBar() {
    const auth = firebase.auth();
    const [user] = useAuthState(auth);

    return (
        <Navbar color="dark" className="navbar-rounded" dark>
            <NavbarBrand href="/" color="dark">Movie Ratings</NavbarBrand>
            <Nav className="me-auto" navbar>
                <NavItem>

                    <Form>
                        <Row className="row-cols-lg-auto g-3 align-items-center">
                            <Col>
                                <Label className="visually-hidden" for="exampleEmail" >
                                    Email
                                </Label>
                                <Input id="zipCode" name="zipCode" placeholder="Enter ZIP" type="email" />
                            </Col>
                            <Col>
                                <Button>
                                    Search
                                </Button>
                            </Col>
                        </Row>
                    </Form>
                </NavItem>
            </Nav>
            <NavbarText>{user ? <SignOut /> : <SignIn />}</NavbarText>
        </Navbar>
    );
}