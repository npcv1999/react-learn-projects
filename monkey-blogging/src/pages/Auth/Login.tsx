import React, { useEffect, useState } from "react";
import InputWithLabel from "./components/InputWithLabel";
import { useFormik } from "formik";
import * as yup from "yup";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { PATHS_ROUTE } from "@utils";
import { Loading } from "@components";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@firebaseConfig";
import { useAuth } from "@contexts";

const validationSchema = yup.object({
  email: yup
    .string()
    .email("Email not available")
    .required("Email is required"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

const Login = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: async (values) => {
      try {
        setIsLoading(true);
        await signInWithEmailAndPassword(auth, values.email, values.password);
        setIsLoading(false);
        toast.success(`Login successfully!`);
        // setTimeout(() => {
        //   navigate(PATHS_ROUTE.home);
        // }, 5500);
      } catch (error) {
        setIsLoading(false);
        toast.success(`Login fail, please try again!`);
      }
    },
  });
  const { user } = useAuth();
  useEffect(() => {
    document.title = "Login";
    if (user) {
      navigate(PATHS_ROUTE.home);
    }
  }, [user]);

  return (
    <div className="container">
      <img
        className="w-[121px] h-[156px] object-contain mx-auto mt-[20px]"
        src={"/monkey.png"}
        alt=""
      />
      <h2 className="text-[40px] font-bold text-center mt-[27px] text-primary">
        Monkey Blogging
      </h2>
      <form onSubmit={formik.handleSubmit}>
        <div className="flex flex-col gap-y-5 mx-auto w-full max-w-[800px]">
          <InputWithLabel
            type="text"
            htmlFor="email"
            label="Email Address"
            placeholder="Please enter your email address"
            formik={formik}
          />

          <InputWithLabel
            type="password"
            htmlFor="password"
            label="Password"
            placeholder="Please enter your password"
            formik={formik}
          />

          <button
            type="submit"
            className="mt-[50px] bg-gradient-to-br from-gradient1 to-gradient2 h-[70px] max-w-[343px] mx-auto justify-center w-full rounded-lg text-white"
          >
            {isLoading ? <Loading /> : "Login"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
