"use client";

import { Button } from "@/components/ui/button";
import { useGetAccounts } from "@/features/accounts/api/use-get-accounts";
import { UseNewAccount } from "@/features/accounts/hooks/use-new-account";

export default function Home() {
  const { isOpen, onOpen } = UseNewAccount();

  return (
    <main>
      <Button onClick={onOpen}>Add new account</Button>
    </main>
  );
}
