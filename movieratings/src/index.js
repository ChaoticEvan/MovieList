import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    Navbar,
    NavbarBrand,
    Table,
    NavbarText,
} from 'reactstrap'; import './index.css';

class Movie extends React.Component {
    render() {
        return (
            <div className='title'>
                <Table>
                    <tbody>
                        <tr>
                            {this.props.image}
                        </tr>
                        <tr>
                            {this.props.title}
                        </tr>
                        <tr>
                            {this.props.director}
                        </tr>
                    </tbody>
                </Table>

            </div>
        );
    }
}

class MovieList extends React.Component {
    render() {
        return (
            <div className="movie-list">
                <Table striped hover bordered>
                    <tbody>
                        <tr>
                            <td><Movie image="href.jpg" title="Movie 1" director="JJ Abrams" /></td>
                            <td><Movie image="href.jpg" title="Movie 2" director="JJ Abrams" /></td>
                            <td><Movie image="href.jpg" title="Movie 3" director="JJ Abrams" /></td>
                        </tr>
                        <tr>
                            <td><Movie image="href.jpg" title="Movie 4" director="JJ Abrams" /></td>
                            <td><Movie image="href.jpg" title="Movie 5" director="JJ Abrams" /></td>
                            <td><Movie image="href.jpg" title="Movie 6" director="JJ Abrams" /></td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        );
    }
}

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
