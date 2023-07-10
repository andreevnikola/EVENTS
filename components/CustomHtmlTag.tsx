"use client";

import { store } from "@/redux/store";
import { setupTheme } from "@/redux/theme";
import { useEffect } from "react";
import { useSelector } from "react-redux";

export default function CustomHtmlTag({
  children,
}: {
  children: React.ReactNode;
}) {
  const theme = useSelector((state: any) => state.theme.theme);

  useEffect(() => {
    store.dispatch(setupTheme());
  });

  return (
    <html lang="bg" data-theme={theme || "cupcake"}>
      {children}
    </html>
  );
}
