"use client";

import Button from "../../../components/Button/Root";
import Input from "../../../components/Input/Root";

const ConfigurationsPage = () => {
  return (
    <form className='flex flex-col items-start justify-start w-full'>
      <h1 className='text-3xl mb-24 font-semibold'>Configurações</h1>
      <Input.Index id='photo-picker' styles='opacity-0' onChange={() => {}} type='file' />
    </form>
  );
};

export default ConfigurationsPage;
