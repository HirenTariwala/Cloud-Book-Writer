"use client";

import Input from "@/components/common/Input/Input";
import useLogin from "./useLogin";
import Spinner from "@/components/common/Spinner/Spinner";

const Login = () => {
  const {
    loginDetails,
    formErrors,
    loginError,
    isLoading,
    onChangeHandler,
    onSubmitHandler,
  } = useLogin();

  if (isLoading) {
    return <Spinner size={35} />;
  }
  return (
    <form
      onSubmit={onSubmitHandler}
      className="flex flex-col gap-5 w-80 m-auto mt-20"
    >
      <h1 className="text-black text-center text-2xl">Login here</h1>
      <Input
        type="text"
        name="email"
        value={loginDetails.email}
        onChange={onChangeHandler}
        error={formErrors.email}
        placeholder="Enter your email"
        classname="p-2"
      />
      <Input
        type="password"
        name="password"
        value={loginDetails.password}
        onChange={onChangeHandler}
        error={formErrors.password}
        placeholder="Enter your password"
        classname="p-2"
      />
      {loginError?.length > 0 && (
        <span className="text-red-600">{loginError}</span>
      )}
      <button type="submit" className="bg-[#D4715C] text-white p-2">
        Login
      </button>
    </form>
  );
};

export default Login;
