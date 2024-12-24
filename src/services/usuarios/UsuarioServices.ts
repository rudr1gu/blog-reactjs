import api from "../api";
import Usuario  from "../../model/Usuario";

class UsuarioServices {
    user: Usuario[] = [];

    async getUsuarios() {
        const reponse = await api.get<Usuario[]>('/usuarios/all')
        this.user = reponse.data
    }

    async postUsuario(usuario: Usuario) {
        await api.post('/usuarios/cadastrar', usuario)
    }

    async logarUsuario(usuario: string, senha: string) {
        const response = await api.post('/usuarios/logar', { usuario, senha });
        const { token } = response.data;

        if (token) {
            localStorage.setItem('token', token);
            api.defaults.headers.common['Authorization'] = token;
        }
    }
}

export default UsuarioServices;