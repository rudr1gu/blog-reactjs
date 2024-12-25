import './Footer.css'

function Footer() {
    return (
        <footer className="site-footer">
            <div className="footer-container">
                <div className="footer-section about">
                    <h3>Blog Pessoal - Rudr1gu</h3>
                    <p>
                        Projeto do Bootcamp de Desenvolvimento Full Stack da Generation Brasil.
                    </p>
                </div>
                <div className="footer-section links">
                    <h3>Links Úteis</h3>
                    <ul>
                        <li><a href="#about">Sobre Nós</a></li>
                        <li><a href="#projects">Projetos</a></li>
                        <li><a href="#contact">Contato</a></li>
                        <li><a href="#faq">FAQ</a></li>
                    </ul>
                </div>
                <div className="footer-section contact">
                    <h3>Contato</h3>
                    <p><span>📧</span> rodrigo.santos.ii@hotmail.com</p>
                    <p><span>📍</span> São Paulo, Brasil</p>
                </div>
            </div>
            <div className="footer-bottom">
                <p>© 2024 Blog Pessoal - Rudr1gu. Todos os direitos reservados.</p>
            </div>
        </footer>

    )
}

export default Footer