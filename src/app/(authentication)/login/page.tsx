"use client";

import { useState } from "react";
import { Eye, EyeOff, LogIn, UserPlus } from "lucide-react";
import Button from "../../../components/Button/Root";
import Input from "../../../components/Input/Root";
import { Event } from "../../../components/Input/Index";
import useToastStore from "../../../stores/toast";

export type LoginPageProps = Partial<{
  email: string;
  password: string;
  confirmPassword: string;
}>;

const LoginPage = () => {
  const [inputValues, setInputValues] = useState<LoginPageProps>({});
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const showToast = useToastStore(state => state.showToast);

  const handleInputValues = (event: Event) => {
    const { name, value } = event.target;

    setInputValues(prevState => ({ ...prevState, [name]: value }));
  };

  const handleLogin = () => {
    showToast({ message: "Texto aqui" });
  };

  return (
    <form className='flex flex-col gap-4 mt-32 m-auto py-10 items-center justify-between bg-cyan-200 h-3/4 w-full md:w-3/6 rounded-md'>
      <section className='flex items-center justify-center w-full'>
        <h4 className='text-2xl md:text-4xl font-semibold'>Login</h4>
      </section>

      <Input.Container label='E-mail' htmlFor='email'>
        <Input.Index
          id='email'
          name='email'
          onChange={handleInputValues}
          type='email'
          value={inputValues.email || ""}
        />
      </Input.Container>

      <Input.Container label='Senha' htmlFor='password'>
        <Input.Index
          id='password'
          name='password'
          onChange={handleInputValues}
          type={showPassword ? "text" : "password"}
          value={inputValues.password || ""}
        />
        <Input.Icon onClick={() => setShowPassword(prevState => !prevState)} icon={showPassword ? Eye : EyeOff} />
      </Input.Container>

      <section className='flex items-center my-4 justify-center w-3/6'>
        <Button.Container onClick={handleLogin}>
          <Button.Icon icon={LogIn} />
          <Button.Text content='Entrar' />
        </Button.Container>
      </section>

      <section className='flex items-center justify-center w-3/6'>
        <a href='/sign-in' className='text-blue-600'>
          Não tenho conta
        </a>
      </section>
    </form>
  );
};

export default LoginPage;
