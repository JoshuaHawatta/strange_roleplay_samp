"use client";

import { ChakraBaseProvider, extendBaseTheme } from "@chakra-ui/react";

const theme = extendBaseTheme({});

const AppContainer = ({ children }: { children: React.ReactNode }) => (
  <ChakraBaseProvider theme={theme}>
    <main className='mx-8 md:mx-32 flex flex-col'>{children}</main>
  </ChakraBaseProvider>
);

export default AppContainer;
