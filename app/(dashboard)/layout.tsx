import Header from "@/components/header";
import React from "react";

interface Props {
  children: React.ReactNode;
}

const DashboardLayout = ({ children }: Props) => {
  return (
    <main className="px-3 lg:px-14">
      <Header />
      {children}
    </main>
  );
};

export default DashboardLayout;
