import UsuarioServices from '../../services/usuarios/UsuarioServices'
import './Login.css'
import { useRef, useState } from 'react'

function Login(){
    const usuarioService = new UsuarioServices()

    const user = useRef<HTMLInputElement>(null)
    const pass = useRef<HTMLInputElement>(null)
    const [error, setErrot] = useState<string | null>(null)

    async function logar(){
        const usuario = user.current!.value
        const senha = pass.current!.value
       
        try{
            await usuarioService.logarUsuario(usuario, senha)
            alert('Logado com sucesso')
        } catch (e){
            setErrot("falha ao logar")
        }
        
    }

    return (
        <section className="login">
            <h1>Login</h1>
            {error && <p>{error}</p>}
            <form>
                <input type="text" placeholder="Email" className="form" ref={user}/>
                <input type="password" placeholder="Senha" className="form" ref={pass} />
                <button type='button' className="form" onClick={logar} >Entrar</button>
            </form>
        </section>
    )
}

export default Login