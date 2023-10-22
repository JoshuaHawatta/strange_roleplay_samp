"use client";

import useUserStore from "../stores/user";

const Home = () => {
  const { name } = useUserStore();

  return (
    <div className='flex w-full'>
      <h1 className='text-3xl font-semibold'>Bem-vindo(a) - {name}</h1>
    </div>
  );
};

export default Home;
