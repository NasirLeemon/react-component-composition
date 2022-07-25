import './Hero.css';

function Hero() {
    return (
    <div className="hero-area">
        <div className="hero">
            <div className="hero-text">
                <h1 className="hero-title">Managing Business Payments Has Never Been Easier</h1>
                <p className="hero-description">
                    Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing.
                    Indulgence way everything.
                </p>
                <div className="hero-links">
                    <button className="hero-btn primary-btn">Our Process</button>
                    <i className="fa-solid fa-2x fa-circle-play"></i>
                    <a>See How It Works</a>

                </div>

            </div>
            <div className="hero-form">
                <p>Get Started For Free</p>
                <input type="text" placeholder="Email Address" />
                <input type="text" placeholder="Password" />
                <input type="submit" value="Get Started" />
            </div>
        </div>
        <div className="trusted-companies">
            <h3 className="trusted-title">Trusted By Over 100+ Startups and Freelance Business</h3>
            <div>
                <img className="trusted-images" src="./images/oracle.png" alt="Oracle" />
                <img className="trusted-images" src="./images/samsung.png" alt="Samsung" />
                <img className="trusted-images" src="./images/monday.png" alt="Monday" />
                <img className="trusted-images" src="./images/morpheus.png" alt="Morpheus" />
            </div>
        </div>
    </div>
    )
}

export default Hero;