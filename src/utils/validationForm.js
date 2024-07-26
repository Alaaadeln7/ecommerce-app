import * as Yup from "yup";
/**
 *  when you make confirmation password
 *  you use onOf([Yup.ref("password")])
 */
export const validForm = Yup.object().shape({
  userName: Yup.string("user name must be string")
    .min(2, "user name is too short")
    .max(20, "user name is too long")
    .required("user name is required"),
  email: Yup.string("user email must be string")
    .min(2, "email is too short")
    .max(50, "email is too long")
    .required("email is required"),
  phone: Yup.string("user phone must be string")
    .min(2, "phone is too short")
    .max(20, "phone is too long")
    .required("phone is required"),
  password: Yup.string()
    .min(2, "password is too short")
    .max(20, "password is too long")
    .required("password is required"),
});

export const loginValidation = Yup.object().shape({
  email: Yup.string("user email must be string")
    .min(2, "email is too short")
    .max(50, "email is too long")
    .required("email is required"),
  password: Yup.string()
    .min(2, "password is too short")
    .max(20, "password is too long")
    .required("password is required"),
});
export const updateValidation = Yup.object({
  userName: Yup.string().required("Name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string().min(3, "Password must be at least 6 characters"),
  newPassword: Yup.string().min(3, "Password must be at least 6 characters"),
  confirmNewPassword: Yup.string().min(
    3,
    "Password must be at least 6 characters"
  ),
  // .onOf([Yup.ref("newPassword")]),
});

export const addProductValidation = Yup.object({
  productName: Yup.string().required("Required"),
  price: Yup.number().required("Required").positive("Must be positive"),
  productDetail: Yup.string().required("Required"),
  categoryName: Yup.string().required("Required"),
  photo: Yup.mixed().required("Required"),
});
export const updateProductValidation = Yup.object({
  productName: Yup.string().required("Required"),
  price: Yup.number().required("Required").positive("Must be positive"),
  productDetail: Yup.string().required("Required"),
  categoryName: Yup.string().required("Required"),
  photo: Yup.mixed().required("Required"),
});
