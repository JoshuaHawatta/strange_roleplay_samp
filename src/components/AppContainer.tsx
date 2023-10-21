"use client";

import Toast from "./Toast";

const AppContainer = ({ children }: { children: React.ReactNode }) => (
  <>
    <Toast />
    <main className='mx-8 flex flex-col items-center md:mx-32'>{children}</main>
  </>
);

export default AppContainer;
