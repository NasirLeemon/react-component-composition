import './Header.css';

function Header() {
    return (
        <div className="header">
        <div className="logo">
            <img src="/images/Logo.png" alt="Logo" />
        </div>
        <nav className="navigation">
            <ul className="menu">
                <li className="menu-items">
                    <a className="menu-links" href="#">Product</a>
                </li>
                <li className="menu-items">
                    <a className="menu-links" href="#">Template</a>
                </li>
                <li className="menu-items">
                    <a className="menu-links" href="#">Blog</a>
                </li>
                <li className="menu-items">
                    <a className="menu-links" href="#">Pricing</a>
                </li>
            </ul>
        </nav>
        <div className="menu-btn">
            <button className="btn">Sign In</button>
            <button className="primary-btn">Start Free</button>
        </div>
    </div>
    )
}


export default Header;