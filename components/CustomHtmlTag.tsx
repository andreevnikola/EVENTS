"use client";

import { store } from "@/redux/store";
import { setupTheme } from "@/redux/theme";
import { useSelector } from "react-redux";

export default function CustomHtmlTag({
  children,
}: {
  children: React.ReactNode;
}) {
  store.dispatch(setupTheme());
  const theme = useSelector((state: any) => state.theme.theme);
  return (
    <html lang="bg" data-theme={theme || "cupcake"}>
      {children}
    </html>
  );
}
