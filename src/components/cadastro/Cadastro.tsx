import './Cadastro.css'
import Usuario from './User'


function Cadastro(){
    const user1: Usuario = new Usuario(1,'Rodrigo', 'rodrigo@email.com', 'Senha123');
    const user2: Usuario = new Usuario(2,'João', 'jao@email.com', 'Senha123');
    const users = [user1, user2]

    return (
        <section className="cadastro">
            <h1 className='titulo-cadastro'>Cadastro de Usuario</h1>
            <form>
                <input name='nome' type="text" placeholder="Nome" className='form'/>
                <input name='user' type="text" placeholder="Email" className='form'/>
                <input name='senha' type="password" placeholder="Senha" className='form'/>
                <button type='button' className='form'>Cadastrar</button>
            </form>

        { users.map((user) => (
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