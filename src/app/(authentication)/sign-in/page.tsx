"use client";

import { useState } from "react";
import { Eye, EyeOff, UserPlus } from "lucide-react";
import Button from "../../../components/Button/Root";
import Input from "../../../components/Input/Root";
import { Event } from "../../../components/Input/Index";
import useToastStore from "../../../stores/toast";
import Curtain from "../../../components/Curtain";

export type SignInProps = Partial<{
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}>;

const SignIn = () => {
  const [inputValues, setInputValues] = useState<SignInProps>({});
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const showToast = useToastStore(state => state.showToast);

  const handleInputValues = (event: Event) => {
    const { name, value } = event.target;

    setInputValues(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSignIn = () => {
    showToast({ message: "Texto aqui" });
  };

  return (
    <>
      <Curtain />

      <form className='flex flex-col gap-4 mt-32 m-auto py-10 items-center justify-between bg-cyan-200 h-3/4 w-full md:w-3/6 rounded-md'>
        <section className='flex items-center justify-center w-full'>
          <h4 className='text-2xl md:text-4xl font-semibold'>Cadastrar</h4>
        </section>

        <Input.Container label='Nome' htmlFor='name'>
          <Input.Index
            id='name'
            name='name'
            onChange={handleInputValues}
            type='text'
            value={inputValues.name || ""}
          />
        </Input.Container>

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
          <Input.Icon
            onClick={() => setShowPassword(prevState => !prevState)}
            icon={showPassword ? Eye : EyeOff}
          />
        </Input.Container>

        <Input.Container label='Confirmar senha' htmlFor='confirmPassword'>
          <Input.Index
            id='confirmPassword'
            name='confirmPassword'
            onChange={handleInputValues}
            type={showPassword ? "text" : "password"}
            value={inputValues.confirmPassword || ""}
          />
        </Input.Container>

        <section className='flex items-center my-4 justify-center w-3/6'>
          <Button.Container onClick={handleSignIn}>
            <Button.Icon icon={UserPlus} />
            <Button.Text content='Cadastrar' />
          </Button.Container>
        </section>

        <section className='flex items-center justify-center w-3/6'>
          <a href='/login' className='text-blue-600'>
            Já sou cadastrado
          </a>
        </section>
      </form>
    </>
  );
};

export default SignIn;
