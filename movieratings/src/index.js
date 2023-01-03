import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    Navbar,
    NavbarBrand,
    NavbarText,
} from 'reactstrap';
import './index.css';
import MovieList from './components/MovieList';

class Home extends React.Component {
    render() {
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
}

// ========================================

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Home />);
