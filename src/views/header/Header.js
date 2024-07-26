import { Link } from "react-router-dom";
import Logo from "../../components/Logo";
import "./header.css";
import { FiShoppingCart } from "react-icons/fi";
import { LuHeart } from "react-icons/lu";
import { CiSearch } from "react-icons/ci";
import { useSelector } from "react-redux";

export default function Header() {
  const { user } = useSelector((state) => state.user);

  return (
    <header>
      <Logo />
      <nav>
        <ul>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={user ? "/contact" : "/login"}>Contact</Link>
          </li>
          <li>
            <Link to={"/about"}>About</Link>
          </li>
          {!user && (
            <li>
              <Link to={"/register"}>Sign Up</Link>
            </li>
          )}
        </ul>
      </nav>
      <div className="d-flex gap-4">
        <div className="search__input">
          <input type="text" placeholder="Search" />
          <CiSearch />
        </div>
        <div className="btns d-flex gap-3">
          <Link>
            <LuHeart />
          </Link>
          <Link to={"/cart"}>
            <FiShoppingCart />
          </Link>
          {user && (
            <Link to={"/account"} className=" text-uppercase userName__letter ">
              {user?.userName?.charAt(0)}
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}
