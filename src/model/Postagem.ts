import Tema from "./Tema";
import Usuario from "./Usuario";

interface Postagem {
    id: number;
    titulo: string;
    texto: string;
    data: Date;
    usuario: Usuario;
    tema: Tema;
}

export default Postagem;