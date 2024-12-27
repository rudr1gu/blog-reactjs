import Postagem from "../../model/Postagem";
import api from "../api";

class PostagemService{
    async criarPostagem(postagem: Postagem){
        await api.post('/postagens', postagem)
    }
    async listarPostagens(){
        const response = await api.get<Postagem[]>('/postagens')
        return response.data
    }
    async buscarPostagemPorId(id: number){
        const response = await api.get<Postagem>(`/postagens/${id}`)
        return response.data
    }
    async atualizarPostagem(id: number, postagem: Postagem){
        await api.put(`/postagens/${id}`, postagem)
    }
    async deletarPostagem(id: number){
        await api.delete(`/postagens/${id}`)
    }
}

export default PostagemService;