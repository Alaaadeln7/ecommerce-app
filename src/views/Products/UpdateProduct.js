import React, { useEffect } from "react";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { Button, Container, Form, Spinner, Alert } from "react-bootstrap";
import {
  fetchSingleProduct,
  updateProduct,
} from "../../store/productsReducer/productsReducer";
import { fetchCategories } from "../../store/categoryReducer/categoryReducer";
import { updateProductValidation } from "../../utils/validationForm";
import { useNavigate, useParams } from "react-router-dom";
import MainLoading from "../../components/loading/MainLoading";

export default function UpdateProduct() {
  const { productId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error, product, status } = useSelector(
    (state) => state.products
  );
  const { categories } = useSelector((state) => state.categories);
  useEffect(() => {
    dispatch(fetchSingleProduct(productId));
    dispatch(fetchCategories());
  }, [dispatch, productId]);

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      productName: product?.productName || "",
      price: product?.price || "",
      productDetail: product?.productDetail || "",
      categoryName: product?.categoryName || "",
      photo: null,
    },
    validationSchema: updateProductValidation,
    onSubmit: (values) => {
      dispatch(updateProduct({ productId, values }));
    },
  });

  if (loading) return <MainLoading />;

  return (
    <Container>
      <Button
        variant="danger mt-3 mb-3"
        onClick={() => {
          navigate(-1);
        }}
      >
        Back
      </Button>
      {status && <Alert variant="success">the product is updated</Alert>}
      <h2>Update Product</h2>
      {error && <Alert variant="danger">{error}</Alert>}
      <Form onSubmit={formik.handleSubmit}>
        <Form.Group controlId="productName">
          <Form.Label>Product Name</Form.Label>
          <Form.Control
            type="text"
            name="productName"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.productName}
            isInvalid={formik.touched.productName && formik.errors.productName}
          />
          <Form.Control.Feedback type="invalid">
            {formik.errors.productName}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="price">
          <Form.Label>Price</Form.Label>
          <Form.Control
            type="number"
            name="price"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.price}
            isInvalid={formik.touched.price && formik.errors.price}
          />
          <Form.Control.Feedback type="invalid">
            {formik.errors.price}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="productDetail">
          <Form.Label>Product Detail</Form.Label>
          <Form.Control
            type="text"
            name="productDetail"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.productDetail}
            isInvalid={
              formik.touched.productDetail && formik.errors.productDetail
            }
          />
          <Form.Control.Feedback type="invalid">
            {formik.errors.productDetail}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="categoryName">
          <Form.Label>Category</Form.Label>
          <Form.Control
            as="select"
            name="categoryName"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.categoryName}
            isInvalid={
              formik.touched.categoryName && formik.errors.categoryName
            }
          >
            <option value="">Choose...</option>
            {categories.categories?.map((category) => (
              <option key={category._id} value={category._id}>
                {category.categoryName}
              </option>
            ))}
          </Form.Control>
          <Form.Control.Feedback type="invalid">
            {formik.errors.categoryName}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="photo">
          <Form.Label>Photo</Form.Label>
          <Form.Control
            type="file"
            name="photo"
            onChange={(event) => {
              formik.setFieldValue("photo", event.currentTarget.files[0]);
            }}
            onBlur={formik.handleBlur}
            isInvalid={formik.touched.photo && formik.errors.photo}
          />
          <Form.Control.Feedback type="invalid">
            {formik.errors.photo}
          </Form.Control.Feedback>
        </Form.Group>

        <Button type="submit" disabled={loading}>
          {loading ? (
            <Spinner animation="border" size="sm" />
          ) : (
            "Update Product"
          )}
        </Button>
      </Form>
    </Container>
  );
}
