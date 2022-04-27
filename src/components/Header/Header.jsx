import { Link } from 'react-router-dom';
import clsx from 'clsx';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import { ReactComponent as Facebook } from '../../assets/facebook.svg';
import { ReactComponent as Instagram } from '../../assets/instagram.svg';
import { ReactComponent as SearchIcon } from '../../assets/search.svg';
import css from './header.module.css';

function Header() {
  return (
    <header className={css.header}>
      <div className={css.top}>
        <div className={clsx(css.content, "container")}>
          <div className={css.schedule}>Mon-Thu: 9:00 AM - 5:30 PM</div>
          <p className={css.address}>
            Visit our showroom in 1234 Street Adress City Address, 1234{' '}
            <a href="#">Contact Us</a>
          </p>
          <div className={css.contacts}>
            <div className={css.phone}>
              Call Us: <a href="tel:0012345678">(00) 1234 5678</a>
            </div>
            <a href="https://facebook.com">
              <Facebook />
            </a>
            <a href="https://instagram.com">
             <Instagram />
            </a>
          </div>
        </div>
      </div>
      <div className={clsx(css.main, "container")}>
        <Link to="/"><Logo className={css.logo} /></Link>
        <nav className={css.links}>
          <Link to="/category/laptops">Laptops</Link>
          <Link to="/category/desktops">Desktop PCs</Link>
          <Link to="/category/networks">Networking Devices</Link>
          <Link to="/category/PC-parts">PC Parts</Link>
          <Link to="/category/other">All Other Products</Link>
          <Link to="/repairs">Repairs</Link>
          <Link to="/deals">Our Deals</Link>
        </nav>
        <div className={css.actions}>
          <button className={css.btn}>
            <SearchIcon />
          </button>
          <button className={css.btn}>
            <img src="" alt="" />
          </button>
          <button className={css.avatar}>
            <img src="https://ggsc.s3.amazonaws.com/images/uploads/The_Science-Backed_Benefits_of_Being_a_Dog_Owner.jpg" alt="" />
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
