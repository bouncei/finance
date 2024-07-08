import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { z } from "zod";
import { UseNewAccount } from "../hooks/use-new-account";
import AccountForm from "./account-form";
import { insertAccountSchema } from "@/db/schema";

const formSchema = insertAccountSchema.pick({
  name: true,
});

type FormValues = z.input<typeof formSchema>;

const NewAccountSheet = () => {
  const { isOpen, onClose } = UseNewAccount();

  const onSubmit = (values: FormValues) => {
    console.log({ values });
  };

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent className="space-y-4">
        <SheetHeader>
          <SheetTitle>New Account</SheetTitle>

          <SheetDescription>
            Create a new account to track your transactions
          </SheetDescription>
        </SheetHeader>
        <AccountForm onSubmit={onSubmit} disabled={false} />
      </SheetContent>
    </Sheet>
  );
};

export default NewAccountSheet;
