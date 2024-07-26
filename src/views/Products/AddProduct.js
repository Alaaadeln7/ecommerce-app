import { useEffect } from "react";
import { useFormik } from "formik";
import { Button, Container, Form, Spinner, Alert } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../../store/productsReducer/productsReducer";
import { addProductValidation } from "../../utils/validationForm";
import { fetchCategories } from "../../store/categoryReducer/categoryReducer";
import MainLoading from "../../components/loading/MainLoading";
import { Link, useNavigate } from "react-router-dom";

export default function AddProduct() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error, status } = useSelector((state) => state.products);
  const { categories } = useSelector((state) => state.categories);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  const formik = useFormik({
    initialValues: {
      productName: "",
      price: "",
      productDetail: "",
      categoryName: "",
      photo: null,
    },
    validateOnBlur: true,
    validateOnChange: true,
    validationSchema: addProductValidation,
    onSubmit: (values, { resetForm }) => {
      dispatch(addProduct(values));
      resetForm();
      console.log(values);
    },
  });

  return (
    <Container>
      {loading && <MainLoading />}
      {error && <Alert variant="danger">{error}</Alert>}
      {status && (
        <Alert variant="success mt-4 mb-2">add product is successed </Alert>
      )}
      <Button
        onClick={() => {
          navigate(-1);
        }}
        variant="danger mt-2 mb-2"
      >
        back
      </Button>
      <h2>Add Product</h2>
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
          {loading ? <Spinner animation="border" size="sm" /> : "Add Product"}
        </Button>
      </Form>
    </Container>
  );
}
