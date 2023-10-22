"use client";

import { useState } from "react";
import { Check, Eye, EyeOff, LogIn, RefreshCw } from "lucide-react";
import Button from "../../../components/Button/Root";
import Input from "../../../components/Input/Root";
import { Event } from "../../../components/Input/Index";
import useToastStore from "../../../stores/toast";
import Curtain from "../../../components/Curtain";
import useUserStore from "../../../stores/user";
import useLocalStorage from "../../../hooks/useLocalStorage";
import { useRouter } from "next/navigation";

export type LoginPageProps = Partial<{
  name: string;
  password: string;
  confirmPassword: string;
}>;

const LoginPage = () => {
  const [inputValues, setInputValues] = useState<LoginPageProps>({});
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState(false);
  const { showToast } = useToastStore(state => state);
  const { setUserData } = useUserStore();
  const { set } = useLocalStorage();
  const { push } = useRouter();

  const handleInputValues = (event: Event) => {
    const { name, value } = event.target;

    setInputValues(prevState => ({ ...prevState, [name]: value }));
  };

  const handleLogin = () => {
    setIsLoading(true);
    showToast({ message: "Login realizado com sucesso", icon: Check, type: "success" });
    set({ key: "user", item: { id: 1, name: inputValues.name, token: `ey${Date.now()}` } });
    setUserData({ id: 1, name: inputValues.name as string, token: `ey${Date.now()}` });
    push("/");
  };

  return (
    <>
      <Curtain />
      <form className='flex flex-col gap-4 m-auto py-10 items-center justify-between bg-cyan-200 h-3/4 w-full md:w-3/6 rounded-md'>
        <section className='flex items-center justify-center w-full'>
          <h4 className='text-2xl md:text-4xl font-semibold'>Login</h4>
        </section>

        <Input.Container label='Nome de usuário' htmlFor='name'>
          <Input.Index
            id='name'
            name='name'
            onChange={handleInputValues}
            type='text'
            value={inputValues.name || ""}
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

        <section className='flex items-center my-4 justify-center w-3/6'>
          <Button.Container onClick={handleLogin}>
            <Button.Icon styles={isLoading ? "animate-spin" : ""} icon={!isLoading ? LogIn : RefreshCw} />
            <Button.Text content={!isLoading ? "Entrar" : ""} />
          </Button.Container>
        </section>

        <section className='flex items-center justify-center w-3/6'>
          <a href='/sign-in' className='text-blue-600'>
            Não tenho conta
          </a>
        </section>

        <section className='flex items-center justify-center w-3/6'>
          <a href='/recover-password' className='text-blue-600'>
            Esqueci minha senha
          </a>
        </section>
      </form>
    </>
  );
};

export default LoginPage;
