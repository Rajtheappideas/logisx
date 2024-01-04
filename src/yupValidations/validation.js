import moment from "moment";
import * as yup from "yup";

export const signinSchema = yup.object({
  email: yup.string().email().required("Email is required").trim(),
  password: yup.string().required("Password is required").trim(),
});

export const signUpComponentSchema = yup.object({
  email: yup.string().email().required("Email is required").trim(),
  password: yup
    .string()
    .required("Password is required")
    .matches(
      /^(?=.*?[A-Z])(?=.*?[a-z])(?!.*?[=?<>()'"\/\&]).{10,20}$/,
      "Please create a strong password."
    )
    .trim(),
});

export const tellusschema = yup.object({
  fname: yup
    .string()
    .required("firstname is required")
    .max(60, "Max character limit reached")
    .min(2, "minimum two character required")
    .typeError("Only characters allowed")
    .matches(
      /^([A-Za-z\u00C0-\u00D6\u00D8-\u00f6\u00f8-\u00ff\s]*)$/gi,
      "only contain Latin letters."
    ),
  lname: yup
    .string()
    .required("lastname is required")
    .max(60, "Max character limit reached")
    .min(2, "minimum two character required")
    .typeError("Only characters allowed")
    .matches(
      /^([A-Za-z\u00C0-\u00D6\u00D8-\u00f6\u00f8-\u00ff\s]*)$/gi,
      "only contain Latin letters."
    ),
  companyName: yup
    .string()
    .required("companyname is required")
    .max(60, "Max character limit reached")
    .min(2, "minimum three character required"),
});

export const shippingSchema = yup.object({
  shipperFname: yup
    .string()
    .required("firstname is required")
    .max(60, "Max character limit reached")
    .min(2, "minimum two character required")
    .typeError("Only characters allowed")
    .matches(
      /^([A-Za-z\u00C0-\u00D6\u00D8-\u00f6\u00f8-\u00ff\s]*)$/gi,
      "only contain Latin letters."
    ),
  shipperLname: yup
    .string()
    .required("lastname is required")
    .max(60, "Max character limit reached")
    .min(2, "minimum two character required")
    .typeError("Only characters allowed")
    .matches(
      /^([A-Za-z\u00C0-\u00D6\u00D8-\u00f6\u00f8-\u00ff\s]*)$/gi,
      "only contain Latin letters."
    ),
  shipperEmail: yup.string().required("email is required").trim(),
  shipperPhone: yup.string().required("phone is required").trim(),
});

export const uploadDocsSchema = yup.object({
  ein: yup
    .string()
    .required("ein is required")
    .max(20, "20 Max limit reached")
    .min(2, "minimum two digits required")
    .typeError("Only characters allowed")
    .trim(),
  totalDocks: yup
    .string()
    .required("totaldocks is required")
    .matches(/[0-9]{1,3}$/, "Max 3 digit allowed ")
    .typeError("totaldocks is required, only numbers allowed"),
  dockNumbers: yup
    .string()
    .required("totaldocks is required")
    .max(10, "only 10 digit number allowed")
    .min(1, "add atleast 1 digit number")
    .matches(/[0-9]{1,10}$/, "Max 10 digit allowed ")
    .typeError("totaldocks is required, only numbers allowed"),
  photo: yup
    .mixed()
    .required("photo is required")
    .test("is-valid-size", "Max allowed size is 1 MB", (value) => {
      for (const item of value) {
        return item?.size < 1_000_000;
      }
    })
    .test("is_valid_type", "Not valid image type", (value) => {
      for (const item of value) {
        return item.name.includes("png", "jpg", "jpeg");
      }
    })
    .typeError("Photos is required."),
});

export const pickUpInfoStepOne = yup.object({
  departureLocation: yup.string().required("departure locations is required"),
  arrivalLocation: yup.string().required("arrival locations is required"),
  departureDate: yup.string().required("departure date is required"),
  departureTime: yup.string().required("departure time is required"),
  arrivalDate: yup.string().required("arrival date is required"),
  arrivalTime: yup.string().required("arrival time is required"),
  emptyAtBidding: yup.string().required("please choose from above options"),
  jobDescription: yup.string().required("job description is required"),
  receiverAddress: yup.string().required("address is required"),
  receiverName: yup
    .string()
    .required("name is required")
    .max(60, "Max character limit reached")
    .min(2, "minimum two character required")
    .typeError("Only characters allowed")
    .matches(
      /^([A-Za-z\u00C0-\u00D6\u00D8-\u00f6\u00f8-\u00ff\s]*)$/gi,
      "only contain Latin letters."
    ),
  receiverEmail: yup.string().email().required("email is required"),
  receiverPhone: yup.string().required("phone is required"),
  bidExpriry: yup.string().required("expiry date is required"),
  price: yup.string().required("price is required"),
});

export const pickUpInfoStepTwo = yup.object({
  weight: yup.string().required("weight is required"),
});
