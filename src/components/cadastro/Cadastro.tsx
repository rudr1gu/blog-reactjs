import './Cadastro.css'
import UsuarioServices from '../../services/usuarios/UsuarioServices'
import { useEffect, useState, useRef } from 'react'
import Usuario from '../../model/Usuario'

function Cadastro(){

    const usuarioServices = new UsuarioServices()
    const [user, setUser] = useState<Usuario[]>([])

    const nome = useRef<HTMLInputElement>(null)
    const usuario = useRef<HTMLInputElement>(null)
    const senha = useRef<HTMLInputElement>(null)

    useEffect(() => {
        usuarioServices.getUsuarios().then(() => {
            setUser(usuarioServices.user)
        })
    }, [])

    async function cadastrarUsuario(){
        const novoUsuario: Usuario = {
            nome: nome.current!.value,
            usuario: usuario.current!.value,
            senha: senha.current!.value
        }

        console.log(novoUsuario)

        await usuarioServices.postUsuario(novoUsuario)
    }
   
    return (
        <section className="cadastro">
            <h1 className='titulo-cadastro'>Cadastro de Usuario</h1>
            <form>
                <input name='nome' type="text" placeholder="Nome" className='form' ref={nome}/>
                <input name='user' type="text" placeholder="Email" className='form' ref={usuario} />
                <input name='senha' type="password" placeholder="Senha" className='form' ref={senha} />
                <button type='button' className='form' onClick={cadastrarUsuario}>Cadastrar</button>
            </form>

        { user.map((user) => (
            <article>
            <h2>Usuarios Cadastrados</h2>
            <ul>
                <li>Nome: {user.nome}</li>
                <li>E-mail: {user.usuario} </li>
            </ul>
            <button className='lixeira'>lixeira</button>
            </article>
            )            
        )}
        </section>
        
    )
}

export default Cadastro