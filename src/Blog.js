import './Blog.css'

function Blog() {
    return (
        <section className="blog">
        <div className="blog-area">
            <div className="blog-header">
                <h2>Our Latest Blog Posts</h2>
                <button className="primary-btn">See All Blog Posts</button>
            </div>
            <div className="blogs">
                <div className="blog-items">
                    <img className="blog-items-image" src="./images/blog-image-1.png" alt=""/>
                    <p> <small> 09-12-2022 </small></p>
                    <h4>Believing neglected so so allowance existence departure.</h4>
                    <p className="blog-items-description">End-to-end payments and financial management in a single solution.
                        Meet the right platform to
                        help realize.</p>
                </div>
                <div className="blog-items">
                    <img className="blog-items-image" src="./images/blog-image-2.png" alt=""/>
                    <p> <small> 09-12-2022 </small></p>
                    <h4>In design active temper be uneasy. Thirty for remove plenty regard you.</h4>
                    <p className="blog-items-description">End-to-end payments and financial management in a single solution.
                        Meet the right platform to
                        help realize.</p>
                </div>
                <div className="blog-items">
                    <div className="blog-items-list">
                        <img className="blog-items-list-image" src="./images/blog-list-items.png" alt=""/>
                        <div className="blog-items-list-description">
                            <p> <small> 09-12-2022 </small></p>
                            <h5>Partiality on or continuing in particular principles</h5>
                        </div>

                    </div>
                    <hr/>
                    <div className="blog-items-list">
                        <img className="blog-items-list-image" src="./images/blog-list-items-2.png" alt=""/>
                        <div className="blog-items-list-description">
                            <p> <small> 09-12-2022 </small> </p>
                            <h5>Partiality on or continuing in particular principles</h5>
                        </div>

                    </div>
                    <hr/>
                    <div className="blog-items-list">
                        <img className="blog-items-list-image" src="./images/blog-list-items-3.png" alt=""/>
                        <div className="blog-items-list-description">
                            <p> <small> 09-12-2022 </small></p>
                            <h5>Partiality on or continuing in particular principles</h5>
                        </div>


                    </div>
                    <hr/>
                    <div className="blog-items-list">
                        <img className="blog-items-list-image" src="./images/blog-list-items-4.png" alt=""/>
                        <div className="blog-items-list-description">
                            <p> <small> 09-12-2022 </small></p>
                            <h5>Partiality on or continuing in particular principles</h5>
                        </div>
                    </div>
                    <hr/>
                </div>
            </div>
        </div>
    </section>
    )
}

export default Blog;