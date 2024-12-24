import api from "../api";
import Usuario  from "../../model/Usuario";

class UsuarioServices {
    user: Usuario[] = [];

    async getUsuarios() {
        const reponse = await api.get<Usuario[]>('/usuarios')
        this.user = reponse.data
    }
}

export default UsuarioServices;