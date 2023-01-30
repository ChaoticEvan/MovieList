import { Table } from 'reactstrap';
import StarRating from './StarRating.js';

function Movie(args) {
    return (
        <div>
            <Table className="movie white-text">
                <tbody>
                    <tr>
                        <td>{args.image}</td>
                    </tr>
                    <tr>
                        <td>{args.title} by {args.director}</td>
                    </tr>
                    <tr>
                        <td><StarRating /></td>
                    </tr>
                </tbody>
            </Table>
        </div>
    )
}

// TODO: Integrate with wrapper API
// TODO: Add reactstrap pagination
export default function MovieList() {
    return (
        <div>
            <Table bordered className="movie-list table-rounded background">
                <tbody>
                    <tr>
                        <td><Movie image="image" title="Movie title 1" director="director" /></td>
                        <td><Movie image="image" title="Movie title 2" director="director" /></td>
                        <td><Movie image="image" title="Movie title 3" director="director" /></td>
                        <td><Movie image="image" title="Movie title 3" director="director" /></td>
                    </tr>
                    <tr>
                        <td><Movie image="image" title="Movie title 4" director="director" /></td>
                        <td><Movie image="image" title="Movie title 5" director="director" /></td>
                        <td><Movie image="image" title="Movie title 6" director="director" /></td>
                        <td><Movie image="image" title="Movie title 6" director="director" /></td>
                    </tr>
                </tbody>
            </Table>
        </div>
    );
}