"use client";

import Toast from "./Toast";

const AppContainer = ({ children }: { children: React.ReactNode }) => (
  <>
    <Toast />
    <main className='mx-8 md:mx-32 flex flex-col'>{children}</main>
  </>
);

export default AppContainer;
