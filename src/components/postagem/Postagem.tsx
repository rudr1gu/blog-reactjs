import { Link } from 'react-router-dom';

const Postagem = () => {
    return (
        <div>
        <h1>Postagem</h1>
        <p>
            <Link to="/postagem/1">Postagem 1</Link>
        </p>
        <p>
            <Link to="/postagem/2">Postagem 2</Link>
        </p>
        <p>
            <Link to="/postagem/3">Postagem 3</Link>
        </p>
        </div>
    );
}

export default Postagem;
