"use client";

import { useState } from "react";
import { Check, Eye, EyeOff, RefreshCw, UserPlus } from "lucide-react";
import Button from "../../../components/Button/Root";
import Input from "../../../components/Input/Root";
import { Event } from "../../../components/Input/Index";
import useToastStore from "../../../stores/toast";
import Curtain from "../../../components/Curtain";
import { useRouter } from "next/navigation";
import useUserStore from "../../../stores/user";
import useLocalStorage from "../../../hooks/useLocalStorage";

export type SignInProps = Partial<{
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}>;

const SignIn = () => {
  const [inputValues, setInputValues] = useState<SignInProps>({});
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState(false);
  const { showToast } = useToastStore(state => state);
  const { setUserData, name } = useUserStore();
  const { push } = useRouter();
  const { set } = useLocalStorage();

  const [formWithoutMargin, formWithMargin] = [
    "flex flex-col gap-4 m-auto py-10 items-center justify-between bg-cyan-200 h-3/4 w-full md:w-3/6 rounded-md",
    "flex flex-col gap-4 m-auto mt-20 py-10 items-center justify-between bg-cyan-200 h-3/4 w-full md:w-3/6 rounded-md",
  ];

  const handleInputValues = (event: Event) => {
    const { name, value } = event.target;

    setInputValues(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSignIn = () => {
    setIsLoading(true);
    showToast({ message: "Cadastro realizado com sucesso", icon: Check, type: "success" });
    set({ key: "user", item: { id: 1, name: inputValues.name, token: `ey${Date.now()}` } });
    setUserData({ id: 1, name: inputValues.email as string, token: `ey${Date.now()}` });
    setTimeout(() => push("/login"), 6000);
  };

  return (
    <>
      <Curtain />

      <form className={name ? formWithoutMargin : formWithMargin}>
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
            <Button.Icon styles={isLoading ? "animate-spin" : ""} icon={!isLoading ? UserPlus : RefreshCw} />
            <Button.Text content={!isLoading ? "Cadastrar" : ""} />
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
