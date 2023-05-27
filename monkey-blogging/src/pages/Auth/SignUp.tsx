import React, { useState } from "react";
import InputWithLabel from "./components/InputWithLabel";
import { useFormik } from "formik";
import * as yup from "yup";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { PATHS_ROUTE } from "@utils";
import { Loading } from "@components";

import {
  User,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth, db } from "@firebaseConfig";
import { addDoc, collection } from "firebase/firestore";

const validationSchema = yup.object({
  fullname: yup.string().required("Fullname is required"),
  email: yup
    .string()
    .email("Email not available")
    .required("Email is required"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

const SignUp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      fullname: "",
      email: "",
      password: "",
    } as {
      fullname?: string;
      email: string;
      password: string;
    },
    validationSchema,
    onSubmit: async (values) => {
      await handelSignUp(values);
    },
  });

  const handelSignUp = async (values: {
    fullname?: string;
    email: string;
    password: string;
  }) => {
    try {
      setIsLoading(true);
      // create user with email and password
      const user = await createUserWithEmailAndPassword(
        auth,
        values.email,
        values.password
      );
      await updateProfile(auth.currentUser as User, {
        displayName: values.fullname,
      });

      // add user to firestore
      let colRef = collection(db, "users");
      await addDoc(colRef, {
        uid: user.user.uid,
        email: values.email,
        fullname: values.fullname,
        password: values.password,
        role: "user",
      });

      setIsLoading(false);
      toast.success(`Register successfully!`, {
        autoClose: 1000,
        pauseOnHover: false,
      });
      setTimeout(() => {
        navigate(PATHS_ROUTE.login);
      }, 1500);
    } catch (error) {
      setIsLoading(false);
      toast.success("Register fail, please try again!", {
        autoClose: 1000,
        pauseOnHover: false,
      });
    }
  };

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
            htmlFor="fullname"
            label="Fullname"
            placeholder="Please enter your name"
            formik={formik}
          />
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
            className="mt-[50px] bg-gradient-to-r from-gradient1 to-gradient2 h-[70px] max-w-[343px] mx-auto justify-center w-full rounded-lg text-white"
          >
            {isLoading ? <Loading /> : "Sign Up"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
