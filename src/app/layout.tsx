import { Metadata } from "next";

export const metadata: Metadata = {
  title: { default: "Strange Roleplay Samp", template: "%s | Strange Roleplay Samp" },
};

const RootLayout = ({ children }: { children: React.ReactNode }) => (
  <html lang='pt-br'>
    <body>{children}</body>
  </html>
);

export default RootLayout;
