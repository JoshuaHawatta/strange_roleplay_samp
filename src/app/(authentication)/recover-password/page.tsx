"use client";

import { useState } from "react";
import { RefreshCw, Send } from "lucide-react";
import Button from "../../../components/Button/Root";
import Input from "../../../components/Input/Root";
import { Event } from "../../../components/Input/Index";
import useToastStore from "../../../stores/toast";

export type RecoverPasswordPageProps = Partial<{ email: string }>;

const RecoverPasswordPage = () => {
  const [inputValues, setInputValues] = useState<RecoverPasswordPageProps>({});
  const [isLoading, setIsLoading] = useState(false);
  const showToast = useToastStore(state => state.showToast);

  const handleInputValues = (event: Event) => {
    const { name, value } = event.target;

    setInputValues(prevState => ({ ...prevState, [name]: value }));
  };

  const handleLogin = () => {
    showToast({ message: "Enviamos um código de recuperação para seu e-mail" });
    setIsLoading(true);
  };

  return (
    <form className='flex flex-col gap-4 mt-32 m-auto py-10 items-center justify-between bg-cyan-200 h-3/4 w-full md:w-3/6 rounded-md'>
      <section className='flex items-center mb-8 justify-center w-full'>
        <h4 className='text-2xl md:text-4xl font-semibold'>Recuperar senha</h4>
      </section>

      <Input.Container label='Digite seu e-mail' htmlFor='email'>
        <Input.Index
          id='email'
          name='email'
          onChange={handleInputValues}
          type='email'
          value={inputValues.email || ""}
        />
      </Input.Container>

      <section className='flex items-center my-4 justify-center w-3/6'>
        <Button.Container onClick={handleLogin}>
          <Button.Icon styles={isLoading ? "animate-spin" : ""} icon={!isLoading ? Send : RefreshCw} />
          <Button.Text content={!isLoading ? "Enviar" : ""} />
        </Button.Container>
      </section>

      <section className='flex items-center justify-center w-3/6'>
        <a href='/login' className='text-blue-600'>
          Já sou cadastrado
        </a>
      </section>
    </form>
  );
};

export default RecoverPasswordPage;
