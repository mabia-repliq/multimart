"use client";
import { useFormik } from "formik";
import InputField from "../../components/Shared/InputField/InputField";
import { object, errors, string } from "yup";
import Link from "next/link";

let userSchema = object({
  email: string().email("Invalid email").required("Required"),
  password: string().required("Password is required"),
});
console.log(errors);

const LoginForm = () => {
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
      },
      onSubmit: values => {
        alert(JSON.stringify(values, null, 2));
      },
      validationSchema: userSchema,
    });

  console.log(values);
  return (
    <div className="mb-40 text-center flex flex-col justify-center align-center">
      <h1 className="mt-28 mb-8 text-3xl text-teal-700 font-bold">Sign In</h1>

      <form
        className="mx-auto sm:w-2/4 md:w-80 lg:w-96 text-left mt-8"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col gap-4">
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
        </div>
        <div className="text-right">
          <Link
            href="/register"
            className="text-right text-lg inline-block align-baseline font-bold text-teal-700 hover:text-teal-800"
          >
            Forgot Password?
          </Link>
        </div>
        <div>
          <button
            className="mt-6 w-full bg-teal-700 px-4 py-2 hover:bg-teal-900 text-white font-bold rounded bottom-2 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110"
            type="submit"
          >
            Sign in
          </button>
        </div>
        <div className="mt-6 text-center">
          <p className="text-base text-gray-600">Do not have an Account yet?</p>
          <Link href="/register">
            <span className="text-xl font-bold text-teal-700">
              Create Account
            </span>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
