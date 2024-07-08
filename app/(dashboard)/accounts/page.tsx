"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { UseNewAccount } from "@/features/accounts/hooks/use-new-account";
import { Plus } from "lucide-react";
import React from "react";

import { columns, Payment } from "./columns";
import { DataTable } from "@/components/data-table";

const data: Payment[] = [
  {
    id: "728e852f",
    amount: 200,
    status: "pending",
    email: "test@example.com",
  },
  {
    id: "728ed52f",
    amount: 100,
    status: "processing",
    email: "mail@example.com",
  },
  {
    id: "72bed52f",
    amount: 950,
    status: "success",
    email: "jsh@example.com",
  },
  {
    id: "728ed92f",
    amount: 400,
    status: "pending",
    email: "m@example.com",
  },
  {
    id: "748ed52f",
    amount: 180,
    status: "failed",
    email: "m@example.com",
  },
  {
    id: "728ed52f",
    amount: 100,
    status: "processing",
    email: "mail@example.com",
  },
  {
    id: "72bed52f",
    amount: 950,
    status: "success",
    email: "jsh@example.com",
  },
  {
    id: "728ed92f",
    amount: 400,
    status: "pending",
    email: "m@example.com",
  },
  {
    id: "748ed52f",
    amount: 180,
    status: "failed",
    email: "m@example.com",
  },
  {
    id: "728ed52f",
    amount: 100,
    status: "processing",
    email: "mail@example.com",
  },
  {
    id: "72bed52f",
    amount: 950,
    status: "success",
    email: "jsh@example.com",
  },
  {
    id: "728ed92f",
    amount: 400,
    status: "pending",
    email: "m@example.com",
  },
  {
    id: "748ed52f",
    amount: 180,
    status: "failed",
    email: "m@example.com",
  },
  {
    id: "728ed52f",
    amount: 100,
    status: "processing",
    email: "mail@example.com",
  },
  {
    id: "72bed52f",
    amount: 950,
    status: "success",
    email: "jsh@example.com",
  },
  {
    id: "728ed92f",
    amount: 400,
    status: "pending",
    email: "m@example.com",
  },
  {
    id: "748ed52f",
    amount: 180,
    status: "failed",
    email: "m@example.com",
  },
  {
    id: "728ed52f",
    amount: 100,
    status: "processing",
    email: "mail@example.com",
  },
  {
    id: "72bed52f",
    amount: 950,
    status: "success",
    email: "jsh@example.com",
  },
  {
    id: "728ed92f",
    amount: 400,
    status: "pending",
    email: "m@example.com",
  },
  {
    id: "748ed52f",
    amount: 180,
    status: "failed",
    email: "m@example.com",
  },
];

const AccountsPage = () => {
  const { onOpen } = UseNewAccount();

  return (
    <div className="max-w-screen-2xl mx-auto w-full pb-10 -mt-24">
      <Card className="border-none drop-shadow-md">
        <CardHeader className="gap-y-2 lg:flex-row lg:items-center lg:justify-between">
          <CardTitle className="text-xl line-clamp-1">Accounts page</CardTitle>

          <Button onClick={onOpen}>
            <Plus className="size-4 mr-2" />
            Add new
          </Button>
        </CardHeader>

        <CardContent>
          <DataTable columns={columns} data={data} />
        </CardContent>
      </Card>
    </div>
  );
};

export default AccountsPage;
