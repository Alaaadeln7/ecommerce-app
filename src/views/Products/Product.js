import formateCaurrncy from "../../components/formatCurrency";
import LoadingImage from "../../components/LoadingImage";
import "./product.css";
export default function Product(props) {
  return (
    <article className="product">
      <div className="product__image">
        <LoadingImage src={props.photo} alt={props.productName} />
      </div>
      <div className="product__info">
        <h6 className="product__name">{props.productName}</h6>
        <p className="product__price">{formateCaurrncy(props.price)}</p>
        <p className="product__description">
          {props.productDetail.slice(0, 50) + "...."}
        </p>
        <button className="product__button btn btn-primary bg-black">
          Add to cart
        </button>
      </div>
    </article>
  );
}
