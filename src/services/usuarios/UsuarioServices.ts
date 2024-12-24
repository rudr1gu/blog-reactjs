import api from "../api";
import Usuario  from "../../model/Usuario";

class UsuarioServices {
    user: Usuario[] = [];

    async getUsuarios() {
        const reponse = await api.get<Usuario[]>('/usuarios/all')
        this.user = reponse.data
    }

    async postUsuario(usuario: Usuario) {
        await api.post('/usuarios', usuario)
    }
}

export default UsuarioServices;