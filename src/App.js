import { Route, Routes } from "react-router-dom";
import OfferPanner from "./components/offerPanner/OfferPanner";
import Header from "./views/header/Header";
import Register from "./components/register/Register";
import Home from "./views/home/Home";
import Login from "./components/login/Login";
import Dashboard from "./views/dashboard/Dashboard";
import About from "./views/about/About";
import Footer from "./views/footer/Footer";
import Account from "./views/account/Account";
import PrivateRoute from "./components/PrivateRoute";
import Contact from "./views/contact/Contact";
import Cart from "./views/cart/Cart";
import ProductsList from "./views/Products/ProductsList";
import NotFound from "./components/NotFound";
import AddProduct from "./views/Products/AddProduct";
import UpdateProduct from "./views/Products/UpdateProduct";
export default function App() {
  return (
    <main className="app">
      <OfferPanner />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/account" element={<PrivateRoute element={Account} />} />
        <Route path="/cart" element={<PrivateRoute element={Cart} />} />
        <Route path="*" element={<NotFound />} />
        <Route path={"dashboard/about"} element={<About />} />
        <Route path="dashboard/productslist" element={<ProductsList />} />
        <Route path="dashboard/addProduct" element={<AddProduct />} />
        <Route path="/update-product/:productId" element={<UpdateProduct />} />
      </Routes>
      <Footer />
    </main>
  );
}
