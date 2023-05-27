import React from "react";
import { IInputProps } from "../type";

const InputWithLabel = ({
  htmlFor,
  type,
  placeholder,
  label,
  formik,
  ...props
}: IInputProps) => {
  return (
    <>
      <label className="block text-start" htmlFor={htmlFor}>
        {label}
      </label>
      <input
        {...props}
        id={htmlFor}
        className="bg-gray-100 cursor-pointer w-[800px] h-[50px] py-[25px] px-[27px] rounded-lg border outline-none placeholder-gray-400  focus:placeholder-primary  focus:border-primary focus:bg-white"
        type={type}
        placeholder={placeholder}
        onChange={formik.handleChange}
        value={formik.values[htmlFor as keyof typeof formik.values]}
      />
      {formik.touched[htmlFor as keyof typeof formik.values] &&
        formik.errors[htmlFor as keyof typeof formik.values] && (
          <p className="text-red-500 text-sm mt-[5px]">
            {formik.errors[htmlFor as keyof typeof formik.values]}
          </p>
        )}
    </>
  );
};

export default InputWithLabel;
