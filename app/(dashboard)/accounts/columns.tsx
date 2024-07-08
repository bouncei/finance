"use client";

import { Button } from "@/components/ui/button";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown, MoreHorizontal } from "lucide-react";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Payment = {
  id: string;
  amount: number;
  status: "pending" | "processing" | "success" | "failed";
  email: string;
};

export const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: "status",
    header: "Status",
  },
  {
    accessorKey: "email",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Email
          <ArrowUpDown className="ml-2 size-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "amount",
    header: "Amount",
  },
  //   {
  //     accessorKey: "amount",
  //     header: () => <div className="text-right">Amount</div>,
  //     cell: ({ row }) => {
  //       const amount = parseFloat(row.getValue("amount"));
  //       //   const formatted = new Intl.NumberFormat("en-US", {
  //       //     style: "currency",
  //       //     currency: "USD",
  //       //   }).format(amount);

  //       const formatted = new Intl.NumberFormat(getLocale()).format(amount);

  //       return <div className="text-right font-medium">{formatted}</div>;
  //     },
  //   },
];
function getLocale(): Intl.LocalesArgument {
  const language = navigator.language || "en-US";
  return language.split("-")[0]; // Return the language code (e.g., "en" from "en-US")
}
