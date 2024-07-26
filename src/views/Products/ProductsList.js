/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useEffect } from "react";
import { Button, Container, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteProduct,
  fetchProducts,
  updateProduct,
} from "../../store/productsReducer/productsReducer";
import "./productsList.css";
import { FaRegTrashCan } from "react-icons/fa6";
import MainLoading from "../../components/loading/MainLoading";
import { Link, useNavigate } from "react-router-dom";
import LoadingImage from "../../components/LoadingImage";
export default function ProductsList() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { products, loading } = useSelector((state) => state.products);
  const handleUpdateClick = (productId) => {
    navigate(`/update-product/${productId}`);
  };
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);
  return (
    <Container>
      <Button
        variant="danger me-3"
        onClick={() => {
          navigate(-1);
        }}
      >
        Back
      </Button>
      <Link to={"/dashboard/addProduct"} className="btn btn-success mt-3 mb-3">
        Add Product
      </Link>
      <div className="table-responsive">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Image</th>
              <th>Price</th>
              <th>Description</th>
              <th>Delete</th>
              <th>Update</th>
            </tr>
          </thead>
          <tbody>
            {products.data?.products?.map((product, index) => (
              <tr key={product._id}>
                <td>{index + 1}</td>
                <td>{product.productName}</td>
                <td style={{ width: "fit-content" }}>
                  {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
                  {/* <img
                    className="img-fluid"
                    src={product.photo}
                    alt="product image"
                    style={{ maxWidth: "100px", height: "auto" }}
                  /> */}
                  <LoadingImage
                    className="img-fluid"
                    src={product.photo}
                    alt="product image"
                    style={{ maxWidth: "100px", height: "auto" }}
                  />
                </td>
                <td>{product.price}</td>
                <td>{product.productDetail}</td>
                <td>
                  <Button
                    onClick={() => {
                      dispatch(deleteProduct(product._id));
                    }}
                    variant="danger text-white"
                  >
                    <FaRegTrashCan />
                  </Button>
                </td>
                <td>
                  <Button
                    onClick={() => {
                      handleUpdateClick(product._id);
                    }}
                    variant="info text-white"
                  >
                    Update
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
      {loading && <MainLoading />}
    </Container>
  );
}
