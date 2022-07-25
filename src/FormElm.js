import './FormElm.css'

function FormElm() {
    return (
        <section id="cta">

        <div className="cta-area">
            <div className="cta">
                <div className="cta-text">
                    <p className="cta-text-small"> Why Choose Us</p>
                    <h2>Partiality on or continue in the particular principles</h2>
                    <p className="cta-text-description">End-to-end payments and financial management in a single solution.
                        Meet the right platform to help realize.</p>
                </div>
                <div className="cta-input">
                    <form>
                        <input type="email" name="email" id="email" placeholder="Email Address" />
                        <input type="password" name="password" id="password" placeholder="Password" />
                        <input type="submit" value="Get Started" />
                    </form>
                </div>

            </div>
        </div>

    </section>
    )
}

export default FormElm;