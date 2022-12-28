import React from "react";
import { Form } from "antd";

const Input = ({ name, placeholder, type, ...rest }) => {
  return (
    <Form.Item name={name} {...rest}>
      <input
        type={type}
        placeholder={placeholder}
        className=" py-3 px-4 border border-gray-medium rounded-[4px] h-12 w-full outline-none"
      />
    </Form.Item>
  );
};

export default Input;
