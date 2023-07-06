"use client";

import { useSelector } from "react-redux";

export default function CustomHtmlTag({
  children,
}: {
  children: React.ReactNode;
}) {
  const theme = useSelector((state: any) => state.theme.theme);
  return (
    <html lang="bg" data-theme={theme}>
      {children}
    </html>
  );
}
