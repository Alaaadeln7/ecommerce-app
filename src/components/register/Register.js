import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { validForm } from "../../utils/validationForm";
import { useDispatch, useSelector } from "react-redux";
import { createUser } from "../../store/userReducer/UserReducer";
import { IoEyeSharp } from "react-icons/io5";
import { FaEyeSlash } from "react-icons/fa";
import { Alert, Button, Container, Form, Spinner } from "react-bootstrap";
import LoadingImage from "../LoadingImage";
import register_image from "../../assets/register_image.png";
import "./register.css";
import usePasswordToggle from "../../hooks/useShowPassword";
import MainLoading from "../loading/MainLoading";
export default function Register() {
  const [passwordInputType, toggleVisibility] = usePasswordToggle();
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      userName: "",
      email: "",
      phone: "",
      password: "",
    },
    validateOnBlur: true,
    validateOnChange: true,
    validationSchema: validForm,
    onSubmit: async (values, { resetForm }) => {
      dispatch(createUser({ userData: values, navigate }));
      resetForm();
    },
  });

  return (
    <section className="register__section">
      {loading && <MainLoading />}
      <Container>
        <div className="register__container row">
          <div className="register__image col">
            <LoadingImage src={register_image} alt={"register image"} />
          </div>
          <div className="register__content col">
            <div>
              <h1>Create an account</h1>
              <p>Enter your details below</p>
            </div>
            <form method="POST" onSubmit={formik.handleSubmit}>
              {error && <Alert variant="danger">{error}</Alert>}
              <Form.Control
                type="text"
                value={formik.values.userName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                isInvalid={formik.errors.userName && formik.touched.userName}
                placeholder="Name"
                name="userName"
              />
              <Form.Control.Feedback type="invalid">
                {formik.errors.userName}
              </Form.Control.Feedback>
              <Form.Control
                type="email"
                placeholder="Email"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                isInvalid={formik.errors.email && formik.touched.email}
              />
              <Form.Control.Feedback type="invalid">
                {formik.errors.email}
              </Form.Control.Feedback>
              <Form.Control
                type="text"
                name="phone"
                placeholder="Phone Number"
                value={formik.values.phone}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                isInvalid={formik.errors.phone && formik.touched.phone}
              />
              <Form.Control.Feedback type="invalid">
                {formik.errors.phone}
              </Form.Control.Feedback>
              <div className="input_password_container d-flex justify-content-center align-items-center ">
                <Form.Control
                  type={passwordInputType}
                  name="password"
                  id="password"
                  className="input_password"
                  placeholder="Password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  isInvalid={formik.errors.password && formik.touched.password}
                />
                <Button
                  variant="link"
                  className="eyes_btn text-black-50"
                  type="button"
                  onClick={() => {
                    toggleVisibility();
                  }}
                >
                  {passwordInputType === "password" ? (
                    <FaEyeSlash />
                  ) : (
                    <IoEyeSharp />
                  )}
                </Button>
              </div>
              <Form.Control.Feedback type="invalid">
                {formik.errors.password}
              </Form.Control.Feedback>
              {loading ? (
                <Button
                  variant="primary "
                  disabled={formik.isSubmitting || loading}
                >
                  <Spinner
                    as="span"
                    animation="border"
                    size="sm"
                    role="status"
                    aria-hidden="true"
                  />
                  <span className=" ms-2 ">Loading....</span>
                </Button>
              ) : (
                <button type="submit" className="submit_btn">
                  Create Account
                </button>
              )}
            </form>
            <div className="login_link d-flex justify-content-center gap-1">
              <p>Already have account?</p>
              <Link to={"/login"}> Log In</Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
