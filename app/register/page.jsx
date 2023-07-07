"use client";

import { useFormik } from "formik";
import InputField from "../../components/Shared/InputField/InputField";
import { object, ref, errors, date, string } from "yup";
import Link from "next/link";

let userSchema = object({
  firstName: string().required("First name is required"),
  lastName: string().required("Last name is required"),
  email: string().email("Invalid email").required("Required"),
  password: string().required("Password is required"),
  confirmPassword: string()
    .required("Please retype your password")
    .oneOf([ref("password"), null], "Password must match"),
  imageFile: string().required("Please choose an image file"),
  website: string().url().nullable(),
  createdOn: date().default(() => new Date()),
});
console.log(errors);

const SignupForm = () => {
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
        imageFile: "",
      },
      onSubmit: values => {
        alert(JSON.stringify(values, null, 2));
      },
      validationSchema: userSchema,
    });
  console.log(values);

  return (
    <div className="mt-20 md:w-full lg:flex lg:flex-col ml-8 px-6">
      <h1 className="text-3xl text-center text-teal-700 font-bold">Sign Up</h1>
      <form
        className="mx-auto max-w-md md:w-full lg:w-screen text-left mt-6"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col gap-4">
          <div>
            <InputField
              label="First Name"
              id="firstName"
              name="firstName"
              type="text"
              placeholder="First Name"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.firstName}
            />

            <div className="text-red-600 italic ">
              {errors.firstName && touched.firstName && (
                <p>{errors.firstName}</p>
              )}
            </div>
          </div>

          <div>
            <InputField
              label="Last Name"
              id="lastName"
              name="lastName"
              type="text"
              placeholder="Last Name"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.lastName}
            />
            <div className="text-red-600 italic ">
              {errors.lastName && touched.lastName && <p>{errors.lastName}</p>}
            </div>
          </div>

          <div>
            <InputField
              label="Email"
              id="email"
              name="email"
              type="email"
              placeholder="Email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
            />
            <div className="text-red-600 italic ">
              {errors.email && touched.email && <p>{errors.email}</p>}
            </div>
          </div>

          <div>
            <InputField
              label="Password"
              id="password"
              name="password"
              type="password"
              placeholder="Password"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
            />
            <div className="text-red-600 italic ">
              {errors.password && touched.password && <p>{errors.password}</p>}
            </div>
          </div>

          <div>
            <InputField
              label="Confirm Password"
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              placeholder="Confirm Password"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.confirmPassword}
            />
            <div className="text-red-600 italic ">
              {errors.confirmPassword && touched.confirmPassword && (
                <p>{errors.confirmPassword}</p>
              )}
            </div>
          </div>
          <div>
            <InputField
              label="Upload Image"
              id="imageFile"
              name="imageFile"
              type="file"
              placeholder="Choose Image"
              onChange={handleChange}
              // onBlur={handleBlur}
              value={values.imageFile}
            />
            <div className="text-red-600 italic">
              {errors.imageFile && touched.imageFile && (
                <p>{errors.imageFile}</p>
              )}
            </div>
          </div>
        </div>
        <button
          className="mt-6 w-full bg-teal-700 px-4 py-2 hover:bg-teal-900 text-white font-bold rounded bottom-2 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110"
          type="submit"
        >
          Register
        </button>
        <div className="mt-4 flex justify-between gap-4 text-lg">
          <p className="text-gray-600">Already have an Account?</p>
          <Link href="/login">
            <span className="text-teal-700 font-bold">Login Instead</span>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default SignupForm;
