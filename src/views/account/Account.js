import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import { updateValidation } from "../../utils/validationForm";
import { IoEyeSharp } from "react-icons/io5";
import { FaEyeSlash } from "react-icons/fa";
import { Button, Col, Container, Form, Row, Spinner } from "react-bootstrap";
import { logout, updateUser } from "../../store/userReducer/UserReducer";
import "./account.css";
import usePasswordToggle from "../../hooks/useShowPassword";
import { Link } from "react-router-dom";

export default function Account() {
  const dispatch = useDispatch();
  const [passwordInputType, toggleVisibility] = usePasswordToggle();
  const { loading, user } = useSelector((state) => state.user);
  const [isEditMode, setIsEditMode] = useState(false);

  useEffect(() => {
    if (isEditMode) {
      document.getElementById("userNameInput").focus();
    }
  }, [isEditMode]);

  const formik = useFormik({
    initialValues: {
      userName: user?.userName || "",
      email: user?.email || "",
      password: "",
      newPassword: "",
      confirmNewPassword: "",
    },
    validationSchema: updateValidation,
    onSubmit: (values, { resetForm }) => {
      dispatch(updateUser({ values, user }));
      resetForm();
      setIsEditMode(false);
    },
  });

  const handleEditToggle = () => {
    setIsEditMode(!isEditMode);
  };

  return (
    <section className="account__section">
      <Container>
        <Row className="justify-content-md-center mt-5 m-5">
          <Col md={6}>
            <h1 className="mb-4">Account Information</h1>
            <div>
              <Form.Group controlId="formName" className="mb-3">
                <Form.Label>User Name</Form.Label>
                <Form.Control
                  type="text"
                  id="userNameInput"
                  name="userName"
                  placeholder={user?.userName}
                  value={formik.values.userName}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  isInvalid={formik.touched.userName && formik.errors.userName}
                  disabled={!isEditMode}
                />
                <Form.Control.Feedback type="invalid">
                  {formik.errors.userName}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group controlId="formEmail" className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  placeholder={user?.email}
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  isInvalid={formik.touched.email && formik.errors.email}
                  disabled={!isEditMode}
                />
                <Form.Control.Feedback type="invalid">
                  {formik.errors.email}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group controlId="formPassword" className="mb-3">
                <Form.Label>Password</Form.Label>
                <div className="input_password_container d-flex">
                  <Form.Control
                    type={passwordInputType}
                    name="password"
                    id="password__input"
                    placeholder="**********"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    isInvalid={
                      formik.touched.password && formik.errors.password
                    }
                    disabled={!isEditMode}
                  />
                  <Button
                    variant="link"
                    className="eyes_btn text-black-50"
                    onClick={toggleVisibility}
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

              {isEditMode && (
                <>
                  <Form.Group controlId="formNewPassword" className="mb-3">
                    <Form.Label>New Password</Form.Label>
                    <Form.Control
                      type={passwordInputType}
                      name="newPassword"
                      placeholder="New Password"
                      value={formik.values.newPassword}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      isInvalid={
                        formik.touched.newPassword && formik.errors.newPassword
                      }
                    />
                    <Form.Control.Feedback type="invalid">
                      {formik.errors.newPassword}
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group
                    controlId="formConfirmNewPassword"
                    className="mb-3"
                  >
                    <Form.Label>Confirm New Password</Form.Label>
                    <Form.Control
                      type={passwordInputType}
                      name="confirmNewPassword"
                      placeholder="Confirm New Password"
                      value={formik.values.confirmNewPassword}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      isInvalid={
                        formik.touched.confirmNewPassword &&
                        formik.errors.confirmNewPassword
                      }
                    />
                    <Form.Control.Feedback type="invalid">
                      {formik.errors.confirmNewPassword}
                    </Form.Control.Feedback>
                  </Form.Group>
                </>
              )}
              <Button
                onClick={() => {
                  handleEditToggle();
                  formik.handleSubmit();
                }}
                variant="primary"
                type="submit"
                disabled={loading}
              >
                {loading ? (
                  <>
                    <Spinner
                      as="span"
                      animation="border"
                      size="sm"
                      role="status"
                      aria-hidden="true"
                    />
                    <span className="ms-2">Updating...</span>
                  </>
                ) : isEditMode ? (
                  "Update information"
                ) : (
                  "Edit information"
                )}
              </Button>
              <Button
                onClick={() => {
                  dispatch(logout());
                }}
              >
                Log out
              </Button>
              <Link className="btn btn-primary" to={"/dashboard"}>
                dashboard
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
