import React from "react";
import { Form } from "antd";
import Input from "../atoms/input";
import CONSTANTS from "../../helpers/constants";
import ButtonLink from "../atoms/ButtonLink";
import OAuthButton from "../atoms/OAuthButton";
import Button from "../atoms/Button";
import { useNavigate } from "react-router-dom";
import pages from "../../config/pages";
import state from "../../config/state";
import api from "../../config/api";
import callApi, { getOptions } from "../../utils/callApi";

const { FORM } = CONSTANTS;

const formRules = [
  {
    required: true,
    message: "this field is mandatory",
  },
];

const LoginForm = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();

  const onSuccess = async (values) => {
    const body = {
      [FORM.EMAIL.NAME]: values[FORM.EMAIL.NAME],
      [FORM.PASSWORD.NAME]: values[FORM.PASSWORD.NAME],
    };

    const options = {
      method: "POST",
      body,
    };

    const response = await callApi(api.login, getOptions(options));

    if (!response.access_token) return alert(response);

    sessionStorage.setItem(state.TOKEN, response.access_token);
    navigate(pages.dashboard);
  };

  const onFailed = (values) => {
    console.log(values);
  };

  return (
    <Form
      form={form}
      onFinish={onSuccess}
      onFinishFailed={onFailed}
      autoComplete="off"
    >
      <Input
        type="text"
        name={FORM.EMAIL.NAME}
        placeholder={FORM.EMAIL.PLACEHOLDER}
        rules={formRules}
      />
      <Input
        type="password"
        name={FORM.PASSWORD.NAME}
        placeholder={FORM.PASSWORD.PLACEHOLDER}
        rules={formRules}
      />
      <div className="px-4 text-right w-full mt-[-20px]">
        <ButtonLink label="Forgot Password?" to={pages.auth.forgotPassword} />
      </div>
      <div className=" mt-5">
        <OAuthButton />
      </div>
      <div className="mt-[30px] flex w-full justify-center items-center">
        <Button label="Login" type="submit" />
      </div>
    </Form>
  );
};

export default LoginForm;
