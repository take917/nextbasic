import React from "react";

export default function Aboutlayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="bg-gray-100 h-screen">{children}</div>;
}
