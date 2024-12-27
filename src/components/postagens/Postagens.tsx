import Postagem from '../../model/Postagem';
import PostagemService from '../../services/usuarios/PostagemService';
import './Postagens.css';
import { useEffect, useState } from 'react';

function Postagens() {
    const postagemService = new PostagemService();
    
    const [postagens, setPostagens] = useState<Postagem[]>([]);

    useEffect(() => {
        postagemService.listarPostagens().then((postagens) => {
            setPostagens(postagens);
        });
    }, []);


    return ( 
    <div className='container'>
        {
            postagens.map((postagem) => (
                <section className="post-card" key={postagem.id}>
                    <div className="post-header">
                        <p><span>🕒</span> {new Date(postagem.data).toLocaleDateString()}</p>
                        <h3>{postagem.titulo}</h3>
                    </div>
                    <div className="post-body">
                        <p>
                            {postagem.texto}
                        </p>
                    </div>
                    <div className="post-footer">
                        <img src={postagem.usuario?.foto} alt="Author Avatar" className="avatar" />
                        <div>
                            <p><strong>{postagem.usuario?.nome}</strong></p>
                            <p className="subtitle">{postagem.usuario?.usuario}</p>
                        </div>
                    </div>
                </section>
            ))
        }
        
    </div>
    )
}

export default Postagens;