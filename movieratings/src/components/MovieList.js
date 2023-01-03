import { Table } from 'reactstrap';
function Movie(args) {
    return (
        <div>
            <Table>
                <tbody>
                    <tr>
                        <td>{args.image}</td>
                    </tr>
                    <tr>
                        <td>{args.title}</td>
                    </tr>
                    <tr>
                        <td>{args.director}</td>
                    </tr>
                </tbody>
            </Table>
        </div>
    )
}

export default function MovieList() {
    return (
        <div className="movie-list">
            <Table striped hover bordered>
                <tbody>
                    <tr>
                        <td><Movie image="image" title="Movie title 1" director="director" /></td>
                        <td><Movie image="image" title="Movie title 1" director="director" /></td>
                        <td><Movie image="image" title="Movie title 1" director="director" /></td>
                    </tr>
                    <tr>
                        <td><Movie image="image" title="Movie title 1" director="director" /></td>
                        <td><Movie image="image" title="Movie title 1" director="director" /></td>
                        <td><Movie image="image" title="Movie title 1" director="director" /></td>
                    </tr>
                </tbody>
            </Table>
        </div>
    );
}