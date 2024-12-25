import './Postagens.css';

function Postagens() {
    return (
        <section className="post-card">
            <div className="post-header">
                <p><span>🕒</span> 5:00pm - 6:30pm</p>
                <h3>Improving the quality of the management</h3>
            </div>
            <div className="post-body">
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
            </div>
            <div className="post-footer">
                <img src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="Author Avatar" className="avatar" />
                <div>
                    <p><strong>Dr. Ariful Islam Abid</strong></p>
                    <p className="subtitle">CEO of AIA software agency, USA</p>
                </div>
            </div>
        </section>
    )
}

export default Postagens;