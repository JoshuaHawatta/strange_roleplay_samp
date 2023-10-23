"use client";

import { FilePlus, MailCheck } from "lucide-react";
import Button from "../../../components/Button/Root";
import Input from "../../../components/Input/Root";
import { Avatar } from "@chakra-ui/react";
import { useState } from "react";

const ConfigurationsPage = () => {
  const [verifiedEmail, setVerifiedEmail] = useState<boolean>(false);

  return (
    <form className='flex flex-col py-5 items-center md:items-start m-auto justify-center md:justify-start w-full'>
      <h1 className='text-3xl mb-24 font-semibold'>Configurações</h1>

      <section className='flex items-center justify-center md:justify-start md:gap-12'>
        <div className='h-full hidden md:block'>
          <Avatar width='100%' height='100%' />
        </div>

        <div className='flex justify-center md:justify-start w-full md:w-2/3 flex-col gap-5'>
          <Input.Container
            containerStyle='w-10/12 md:w-full lg:w-full'
            label='Carregar imagem'
            htmlFor='photo-picker'
          >
            <Button.Container styles='cursor-pointer w-full' onClick={() => {}}>
              <Button.Icon icon={FilePlus} />

              <label htmlFor='photo-picker' className='w-full text-white cursor-pointer text-xs md:text-sm'>
                Carregar
                <Input.Index id='photo-picker' styles='hidden cursor-pointer' onChange={() => {}} type='file' />
              </label>
            </Button.Container>
          </Input.Container>

          {verifiedEmail && (
            <Input.Container
              containerStyle='w-10/12 md:w-full lg:w-full'
              label='trocar e-mail'
              htmlFor='change-email'
            >
              <Input.Index
                type='email'
                id='change-email'
                onChange={() => {}}
                styles='border-2 border-cyan-400 p-4'
              />
            </Input.Container>
          )}

          {!verifiedEmail && (
            <Input.Container
              containerStyle='w-10/12 md:w-full lg:w-full'
              label='verificar e-mail'
              htmlFor='verify-email'
            >
              <Button.Container
                id='verify-email'
                styles='cursor-pointer bg-orange-700 hover:bg-orange-600 w-full'
                onClick={() => {}}
              >
                <Button.Icon icon={MailCheck} />
                <Button.Text content='Enviar código' />
              </Button.Container>
            </Input.Container>
          )}

          <Input.Container
            containerStyle='w-11/12 md:w-full lg:w-full'
            label='Adicionar telefone'
            htmlFor='add-phone'
          >
            <Input.Index type='number' id='add-phone' onChange={() => {}} styles='border-2 border-cyan-400 p-4' />
          </Input.Container>
        </div>
      </section>
    </form>
  );
};

export default ConfigurationsPage;
