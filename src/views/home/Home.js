import { useDispatch, useSelector } from "react-redux";
import "./home.css";
import { fetchCategories } from "../../store/categoryReducer/categoryReducer";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import landingPageImage from "../../assets/Frame560.png";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { fetchProducts } from "../../store/productsReducer/productsReducer";
import Product from "../Products/Product";
import { Container } from "react-bootstrap";
export default function Home() {
  const { categories } = useSelector((state) => state.categories);
  const { products } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const printCategories = categories?.categories?.map((item) => (
    <li key={item.categoryName}>
      <Link>{item.categoryName}</Link>
    </li>
  ));
  console.log(products.data?.products);
  useEffect(() => {
    dispatch(fetchCategories());
    dispatch(fetchProducts());
  }, [dispatch]);
  const printProducts = products.data?.products?.map((product) => (
    <Product
      photo={product.photo}
      price={product.price}
      productName={product.productName}
      productDetail={product.productDetail}
    />
  ));
  return (
    <section className="home__section">
      <div className="container d-flex justify-content-between gap-5">
        <ul>{printCategories}</ul>
        <div className="landing__page__image">
          <LazyLoadImage src={landingPageImage} alt="landing page image" />
          <Container className="d-flex justify-content-around align-align-items-baseline gap-1 flex-wrap">
            {printProducts}
          </Container>
        </div>
      </div>
    </section>
  );
}
