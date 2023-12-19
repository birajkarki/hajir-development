import React, { useState } from "react";

import { cn } from "@/lib/utils";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
// import { Icons } from "@/components/icons";

const UserAuthForm = ({ className, ...props }) => {
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = (event) => {
    event.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  };

  return (
    <div className={cn("grid gap-6", className)} {...props}>
      <form onSubmit={onSubmit}>
        <div className="grid gap-2">
          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="number">
              Phone Number
            </Label>
            <Input
              id="nummber"
              placeholder="+977 9841234567"
              type="number"
              disabled={isLoading}
            />
          </div>
          <Button disabled={isLoading}>
            {isLoading && null}
            Sign In with Phone Number
          </Button>
        </div>
      </form>
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">
            Or Already Have a Hajir Account
          </span>
        </div>
      </div>
      <Button asChild>
        <Link href="/signin">Login</Link>
      </Button>
    </div>
  );
};

export default UserAuthForm;
