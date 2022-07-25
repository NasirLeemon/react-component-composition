import './Footer.css'

function Footer() {
    return (
        <section id="footer">

        <div className="footer-area">
            <div className="footer">
                <div className="footer-items ar-shakir">
                    <h6 className="footer-items-title ">AR Shakir</h6>
                    <p>Finance helps companies </p>
                    <p> manage payments easily.</p>
                    <div className="ar-shakir-icons">
                        <i className="fa-brands fa-linkedin-in"></i>
                        <i className="fa-brands fa-facebook-messenger"></i>
                        <i className="fa-brands fa-twitter"></i>
                        <i className="fa-solid fa-infinity"></i>
                    </div>
                </div>
                <div className="footer-items companies">
                    <h6 className="footer-items-title ">Companies</h6>
                    <ul>
                        <li><a href="#"></a>About Us</li>
                        <li><a href="#"></a>Careers</li>
                        <li><a href="#"></a>Blogs</li>
                        <li><a href="#"></a>Pricing</li>
                    </ul>
                </div>
                <div class="footer-items Resources">
                    <h6 class="footer-items-title ">Resources</h6>
                    <ul>
                        <li><a href="#"></a>Prposal Template</li>
                        <li><a href="#"></a>Invoice Template</li>
                        <li><a href="#"></a>Tutorial</li>
                        <li><a href="#"></a>How to write a content</li>
                    </ul>
                </div>
                <div class="footer-items news-letter">
                    <h6 class="footer-items-title ">Join our News Letter</h6>
                    <form action="">
                        <input type="email" name="email" id="email" placeholder="Your Email Address"/>
                        <button class="primary-btn">Subscribe</button>
                    </form>
                    <p>*Will send you weekly updates for your better
                        finance management</p>
                </div>
            </div>
        </div>

    </section>
    )
}


export default Footer;