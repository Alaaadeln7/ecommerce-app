import { Link } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";
import { Container } from "react-bootstrap";
export default function OfferPanner() {
  return (
    <div className=" bg-black text-white p-2">
      <Container className="d-flex justify-content-around align-items-center">
        <p>
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
          <Link className="font-weight-bold text-white">Shop Now</Link>
        </p>
        <p>
          English <IoIosArrowDown />
        </p>
      </Container>
    </div>
  );
}
