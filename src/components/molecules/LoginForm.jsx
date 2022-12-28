import React from "react";
import { Form } from "antd";
import Input from "../atoms/input";
import CONSTANTS from "../../helpers/constants";
import ButtonLink from "../atoms/ButtonLink";
import OAuthButton from "../atoms/OAuthButton";
import GoogleIcon from "../../assets/google.svg";
import Button from "../atoms/Button";
import { SHA256 } from "crypto-js";
import { useNavigate, createSearchParams } from "react-router-dom";
import pages from "../../config/pages";
import state from "../../config/state";

const { FORM, SECRET_TOKEN } = CONSTANTS;

const formRules = [
  {
    required: true,
    message: "this field is mandatory",
  },
];

const LoginForm = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();

  const onSuccess = (values) => {
    const body = {
      [FORM.EMAIL.NAME]: values[FORM.EMAIL.NAME],
      [FORM.PASSWORD.NAME]: values[FORM.PASSWORD.NAME],
    };

    const encrypted = SHA256(JSON.stringify(body), SECRET_TOKEN).toString();

    sessionStorage.setItem(state.TOKEN, encrypted);

    navigate({
      pathname: pages.dashboard,
      search: `?${createSearchParams(body)}`,
    });
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
        <OAuthButton
          icon={GoogleIcon}
          label="Continue with Google"
          onClick={() => {}}
        />
      </div>
      <div className="mt-[30px] flex w-full justify-center items-center">
        <Button label="Login" type="submit" />
      </div>
    </Form>
  );
};

export default LoginForm;
