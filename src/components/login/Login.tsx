import './Login.css'

function Login(){
    return (
        <section className="login">
            <h1>Login</h1>
            <form>
                <input type="text" placeholder="Email" className="form" />
                <input type="password" placeholder="Senha" className="form" />
                <button type='button' className="form" >Entrar</button>
            </form>
        </section>
    )
}

export default Login