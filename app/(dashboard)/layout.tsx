import Header from "@/components/header";
import React from "react";

interface Props {
  children: React.ReactNode;
}

const DashboardLayout = ({ children }: Props) => {
  return (
    <main>
      <Header />
      <div className="px-3 lg:px-14">{children}</div>
    </main>
  );
};

export default DashboardLayout;
