import'./CadastrarPostagem.css';
import { useRef } from 'react';
import Postagem from '../../model/Postagem';
import PostagemService from '../../services/usuarios/PostagemService';

function CadastrarPostagem(){
    const postagemService = new PostagemService();
    

    const titulo = useRef<HTMLInputElement>(null);
    const texto = useRef<HTMLTextAreaElement>(null);

    async function cadastrarPostagem(){
        const novaPostagem: Postagem = {
            titulo: titulo.current!.value,
            texto: texto.current!.value,
            tema: {
                id: 1,
                descricao: 'Tema'
            }
        }

        console.log(novaPostagem);
        await postagemService.criarPostagem(novaPostagem);
    }

    return (
        <section className="container">
            <form>
                <h1>Publicar</h1>
                <input type="text" id="titulo" name="titulo" className="form" placeholder="Titulo" ref={titulo} />
                <textarea id="texto" name="texto" className="form" placeholder="descrição..." ref={texto} ></textarea>
                <button type="button" className="form" onClick={cadastrarPostagem}>Publicar</button>
            </form>
        </section>
    );
}

export default CadastrarPostagem;