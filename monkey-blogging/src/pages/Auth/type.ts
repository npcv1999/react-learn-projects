import { FormikProps, FormikValues } from "formik";
import React from "react";
export interface IInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  type: React.HTMLInputTypeAttribute | undefined;
  label: string;
  placeholder: string;
  htmlFor: string;
  error?: string;
  formik: FormikProps<{
    email: string;
    password: string;
    fullname?: string;
  }>;
}
