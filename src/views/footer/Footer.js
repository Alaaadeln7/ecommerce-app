import { Container } from "react-bootstrap";
import Logo from "../../components/Logo";
import { RiArrowRightDoubleFill } from "react-icons/ri";

import "./footer.css";
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <footer>
      <Container className="d-flex justify-content-around align-items-start">
        <div className="footer__text">
          <Logo />
          <p>Subscribe</p>
          <p>Get 10% off your first order</p>
          <div className="input">
            <input type="text" placeholder="Enter your email" />
            <span>
              <RiArrowRightDoubleFill />
            </span>
          </div>
        </div>
        <div className="support">
          <h5>Support</h5>
          <ul>
            <li>111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</li>
            <li>exclusive@gmail.com</li>
            <li>+88015-88888-9999</li>
          </ul>
        </div>
        <div className="my__account">
          <h5>Account</h5>
          <ul>
            <li>My Account</li>
            <li>
              <Link>Login / Register</Link>
            </li>
            <li>
              <Link>Cart</Link>
            </li>
            <li>
              <Link>Wishlist</Link>
            </li>
            <li>
              <Link>Shop</Link>
            </li>
          </ul>
        </div>
        <div className="quick__link">
          <h5>Quick Links</h5>
          <ul>
            <li>
              <Link>Privacy Policy</Link>
            </li>
            <li>
              <Link>Terms Of Use</Link>
            </li>
            <li>
              <Link>FAQ</Link>
            </li>
            <li>
              <Link>Contact</Link>
            </li>
          </ul>
        </div>
      </Container>
      <hr />
      <div className="footer__copyright text-center d-flex justify-content-center align-items-center gap-2">
        &copy; <p>Copyright Rimel 2022. All right reserved</p>
      </div>
    </footer>
  );
}
