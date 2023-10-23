"use client";

import Header from "./Header";
import Toast from "./Toast";
import { ChakraProvider } from "@chakra-ui/react";
import { useEffect } from "react";
import useUserStore from "../stores/user";
import LoginPage from "../app/(authentication)/login/page";
import { usePathname, useRouter } from "next/navigation";

const AppContainer = ({ children }: { children: React.ReactNode }) => {
  const { name, getUserData } = useUserStore();
  const pathname = usePathname();
  const { push } = useRouter();

  useEffect(() => getUserData(), [getUserData]);

  useEffect(() => {
    if (!["/login", "/sign-in", "/recover-password"].includes(pathname) && !name) push("/login");
  }, [name, pathname, push]);

  return (
    <ChakraProvider>
      <Toast />

      {name && <Header />}

      <main className='mx-8 flex flex-col items-center md:mx-32'>{children}</main>
    </ChakraProvider>
  );
};

export default AppContainer;
