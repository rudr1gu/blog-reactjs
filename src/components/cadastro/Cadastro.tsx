import './Cadastro.css'

function Cadastro(){
    return (
        <section className="cadastro">
            <h1 className='titulo-cadastro'>Cadastro de Usuario</h1>
            <form>
                <input type="text" placeholder="Nome" className='form'/>
                <input type="text" placeholder="Email" className='form'/>
                <input type="password" placeholder="Senha" className='form'/>
                <button className='form'>Cadastrar</button>
            </form>
        </section>
    )
}

export default Cadastro