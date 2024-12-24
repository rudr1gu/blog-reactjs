import './Cadastro.css'
import UsuarioServices from '../../services/usuarios/UsuarioServices'
import { useEffect } from 'react'

function Cadastro(){

    const usuarioServices = new UsuarioServices()

    useEffect(() => {
        usuarioServices.getUsuarios()
    }, [])
   
    return (
        <section className="cadastro">
            <h1 className='titulo-cadastro'>Cadastro de Usuario</h1>
            <form>
                <input name='nome' type="text" placeholder="Nome" className='form'/>
                <input name='user' type="text" placeholder="Email" className='form'/>
                <input name='senha' type="password" placeholder="Senha" className='form'/>
                <button type='button' className='form'>Cadastrar</button>
            </form>

        { usuarioServices.user.map((user) => (
            <article key={user.id}>
            <h2>Usuarios Cadastrados</h2>
            <ul>
                <li>Nome: {user.nome}</li>
                <li>E-mail: {user.email} </li>
            </ul>
            <button className='lixeira'>lixeira</button>
            </article>
            )            
        )}
        </section>
        
    )
}

export default Cadastro