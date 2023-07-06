import { ClerkProvider } from "@clerk/nextjs";
import Header from "../components/Header";
import "./globals.css";
import { Inter } from "next/font/google";
import Providers from "../components/Provider";
import CustomHtmlTag from "@/components/CustomHtmlTag";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "ShareIT",
  description: "Group, Transfer, Enjoy",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <Providers>
        <CustomHtmlTag>
          <body className={inter.className}>
            <Header />
            {children}
          </body>
        </CustomHtmlTag>
      </Providers>
    </ClerkProvider>
  );
}
