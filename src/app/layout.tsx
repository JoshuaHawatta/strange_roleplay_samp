import { Metadata } from "next";
import "./globals.css";
import AppContainer from "../components/AppContainer";

export const metadata: Metadata = {
  title: { default: "Strange Roleplay Samp", template: "%s | Strange Roleplay Samp" },
};

const RootLayout = ({ children }: { children: React.ReactNode }) => (
  <html lang='pt-br'>
    <link rel='icon' href='./favicon.ico' sizes='any' />
    <body>{<AppContainer>{children}</AppContainer>}</body>
  </html>
);

export default RootLayout;
