import './Testimonial.css'

function Testimonial() {
    return (  
     <section id="testimonial">
        <div className="testimonial-area">
            <div className="testimonial">
                <div className="testimonial-title">
                    <p>Testimonials</p>
                    <h2>Check what our
                        clients are saying</h2>
                </div>
                <div className="testimonial-description">
                    <div className="testimonial-description-image">
                        <img src="./images/testimonial-image.png" alt="Testimonial Image"/>
                        <div className="testimonial-description-image-icon">
                            <i className="fa-solid fa-circle-arrow-left"></i>
                            <i className="fa-solid fa-circle-arrow-right"></i>
                        </div>

                    </div>
                    <div className="testimonial-description-text">
                        <i className="fa-solid fa-2x fa-quote-left"></i>
                        <h3>Save Time Managing Social
                            Media For Your Business</h3>
                        <p>Is be upon sang fond must shew. Really boy law county she unable her sister. Feet you off its
                            like like six. Among sex are leave law built now. In built table in an rapid blush. Merits
                            behind on afraid or warmly.

                            <br/><br/> Believing neglected so so allowance existence departure in. In design active temper
                            be
                            uneasy.
                        </p>

                        <div className="testimonial-description-text-icons">
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                        </div>
                        <h4>AR Shakir</h4>
                            <p>CEO GetNextDesign</p>
                    </div>

                </div>
            </div>
        </div>
    </section>
    )
}


export default Testimonial;