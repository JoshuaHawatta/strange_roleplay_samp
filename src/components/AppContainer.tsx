"use client";

import Header from "./Header";
import Toast from "./Toast";
import useLocalStorage from "../hooks/useLocalStorage";
import { ChakraProvider } from "@chakra-ui/react";
import { useEffect } from "react";
import useUserStore from "../stores/user";
import LoginPage from "../app/(authentication)/login/page";

const AppContainer = ({ children }: { children: React.ReactNode }) => {
  const { name, getUserData } = useUserStore();

  useEffect(() => getUserData(), [getUserData]);

  return (
    <ChakraProvider>
      <Toast />

      {name && <Header />}

      {name && <main className='mx-8 flex flex-col items-center md:mx-32'>{children}</main>}
      {!name && <main className='mx-8 flex flex-col items-center md:mx-32'>{<LoginPage />}</main>}
    </ChakraProvider>
  );
};

export default AppContainer;
