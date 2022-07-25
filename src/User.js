import './User.css'

function User() {
    return (
        <section class="user-area">

        <div className="user">

            <div className="user-details">
                <div className="user-card card-one">
                    <h3 className="user-card-title">100+ Verified Users</h3>
                    <div className="user-card-details">
                        <img className="user-card-details-image" src="./images/user-1.png" alt="user-1"/>
                        <div className="user-card-details-description">
                            <h2>Theresa Webb</h2>
                            <p>Mentor of Web Design</p>
                        </div>

                    </div>

                    <div className="user-card-details">
                        <img className="user-card-details-image" src="./images/user-2.png" alt="user-2"/>
                        <div className="user-card-details-description">
                            <h2>Albert Flores</h2>
                            <p>Mentor of Web Design</p>
                        </div>

                    </div>

                    <div className="user-card-details">
                        <img className="user-card-details-image" src="./images/user-3.png" alt="user-1"/>
                        <div className="user-card-details-description">
                            <h2>Robert Fox</h2>
                            <p>Mentor of Web UI/UX</p>
                        </div>

                    </div>

                    <a>See More</a>
                </div>

                <div className="user-card card-two">
                    <img className="user-card-two-image" src="./images/AR-Shakir.png" alt="AR Shakir"/>
                    <h3>AR Shakir</h3>
                    <p>Mentor of Web Development</p>
                    <button className="primary-btn">CONTACT</button>
                </div>


            </div>

            <div className="user-text">
                <a> <small> WHY CHOOSE US </small></a>
                <h2 className="user-text-title"> Thirty for remove plenty regard you summer though. </h2>
                <p className="user-text-description">
                    The its enable direct men depend highly. Ham windows sixteen who inquiry fortune demands.
                </p>

                <ul>
                    <li><img src="./images/Yellow Tik.png" alt=""/>Get Overview at a glance</li>
                    <li><img src="./images/Yellow Tik.png" alt=""/>Deoposit funds easily, securlity</li>
                    <li><img src="./images/Yellow Tik.png" alt=""/>Get Live Support</li>

                </ul>

            </div>


        </div>

    </section>
    )
}

export default User;