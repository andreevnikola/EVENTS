import { ClerkLoading, ClerkProvider } from "@clerk/nextjs";
import Header from "../components/Header";
import "./globals.css";
import { Inter } from "next/font/google";
import Providers from "../components/Provider";
import CustomHtmlTag from "@/components/CustomHtmlTag";
import Footer from "@/components/Footer";
import LoadingComponent from "@/components/Loading";
import UserData from "@/components/UserData";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "EVENTS - Organise, Group, Enjoy",
  description: "Organise, Group, Enjoy",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <Providers>
        <CustomHtmlTag>
          <body className={inter.className}>
            <UserData />
            <Header />
            <ClerkLoading>
              <LoadingComponent />
            </ClerkLoading>
            {children}
            <Footer />
          </body>
        </CustomHtmlTag>
      </Providers>
    </ClerkProvider>
  );
}
