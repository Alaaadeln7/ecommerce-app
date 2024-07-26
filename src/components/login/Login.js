import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../store/userReducer/UserReducer";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { loginValidation, validForm } from "../../utils/validationForm";
import { IoEyeSharp } from "react-icons/io5";
import { FaEyeSlash } from "react-icons/fa";
import { Alert, Button, Container, Form, Spinner } from "react-bootstrap";
import LoadingImage from "../LoadingImage";
import Login_image from "../../assets/register_image.png";
import "./login.css";
import usePasswordToggle from "../../hooks/useShowPassword";
import MainLoading from "../loading/MainLoading";

const Login = () => {
  const dispatch = useDispatch();
  const { loading, user, error } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const [passwordInputType, toggleVisibility] = usePasswordToggle();

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user, navigate]);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validateOnBlur: true,
    validateOnChange: true,
    validationSchema: loginValidation,
    onSubmit: (values, { resetForm }) => {
      dispatch(loginUser(values));
      resetForm();
    },
  });

  return (
    <section className="login__section">
      <Container>
        {loading && <MainLoading />}
        <div className="login__container row">
          <div className="login__image col">
            <LoadingImage src={Login_image} alt={"Login image"} />
          </div>
          <div className="login__content col">
            <div>
              <h1>Login</h1>
              <p>Enter your details below</p>
            </div>
            {error && <Alert variant="danger">{"** " + error + " **"}</Alert>}
            <Form onSubmit={formik.handleSubmit}>
              <Form.Group controlId="formEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  isInvalid={formik.errors.email && formik.touched.email}
                />
                <Form.Control.Feedback type="invalid">
                  {formik.errors.email}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group controlId="formPassword">
                <Form.Label>Password</Form.Label>
                <div className="input_password_container d-flex justify-content-center align-items-center">
                  <Form.Control
                    type={passwordInputType}
                    name="password"
                    placeholder="Password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    isInvalid={
                      formik.errors.password && formik.touched.password
                    }
                  />
                  <Button
                    variant="link"
                    className="eyes_btn text-black-50"
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
              </Form.Group>

              {loading ? (
                <Button
                  variant="primary"
                  disabled={formik.isSubmitting || loading}
                >
                  <Spinner
                    as="span"
                    animation="border"
                    size="sm"
                    role="status"
                    aria-hidden="true"
                  />
                  <span className="ms-2">Loading...</span>
                </Button>
              ) : (
                <Button type="submit" className="submit_btn">
                  Login
                </Button>
              )}
            </Form>
            <div className="login_link d-flex justify-content-center gap-1">
              <p>Create an account </p>
              <Link to={"/register"}>Sign Up</Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Login;
