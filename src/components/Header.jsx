import logo from '../assets/logo.svg';
import facebook from '../assets/facebook.svg'
import instagram from '../assets/instagram.svg'
export default function header(){
    return(
        <header>
            <div className="header-top">
                <div className="container header-top__content">
                    <div className="header-top__shedule">Mon-Thu:  9:00 AM - 5:30 PM</div>
                    <p className="header-top__address">Visit our showroom in 1234 Street Adress City Address, 1234 <a href="#">Contacts us</a></p>
                    <div className="header-top__contacts">
                        <div className="header-top__phone">
                        Call us: <a href="tel:0012345678">(00) 1234 5678</a>
                        </div>
                        <a href="#"><img src={facebook} alt="facebook-icon" /></a>
                        <a href="#"><img src={instagram} alt="" /></a>
                    </div>
                </div>
            </div>
            <div className="header-main container">
                <img src={logo} alt="" className="logo" />
                <nav className="links">
                    <a href="#">Laptop</a>
                    <a href="#">Desktop PCs</a>
                    <a href="#">Networking Devices</a>
                    <a href="#">Printers & Scanners</a>
                    <a href="#">PC Parts</a>
                    <a href="#">All Other Products</a>
                    <a href="#">Repairs</a>
                    <a href="#">Our Deals</a>
                </nav>
                <div className="actions">
                    <button className="btn">
                        <img src="" alt="" />
                    </button>
                    <button className="btn">
                        <img src="" alt="" />
                    </button>
                    <button className="avatar">
                        <img src="" alt="" />
                    </button>
                </div>
            </div>
        </header>
    )
}