// UserAuthForm.jsx
"use client";
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
// import { useRouter } from "next/navigation";

const UserAuthForm = ({ onSubmit, className, ...props }) => {
  const [isLoading, setIsLoading] = useState(false);
  // const router = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);

    // Updated: Access the value using event.target.number.value
    const phoneNumber = event.target.phoneNumber;

    try {
      await onSubmit(phoneNumber);
    } catch (error) {
      console.error("Error during API request:", error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={cn("grid gap-6", className)} {...props}>
      <form onSubmit={handleSubmit}>
        <div className="grid gap-2">
          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="number">
              Phone Number
            </Label>
            {/* Updated: Add id and name attributes */}
            <Input
              id="number"
              name="number"
              placeholder="+977 9841234567"
              type="number"
              disabled={isLoading}
            />
          </div>
          {/* <Button onClick type="button" disabled={isLoading}>
            Login
          </Button> */}
          <Button
            type="submit"
            // onClick={() => router.push("/signin")}
            disabled={isLoading}
          >
            {isLoading && null}
            Login
          </Button>
        </div>
      </form>
    </div>
  );
};

export default UserAuthForm;
