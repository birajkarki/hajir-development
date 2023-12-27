"use client";
import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";

// Import statements...

export default function LoginPage() {
  const router = useRouter();
  const [phoneNumber, setPhoneNumber] = useState("");
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [loading, setLoading] = useState(false);
  const [responseData, setResponseData] = useState(null);

  const onSubmit = async () => {
    try {
      setLoading(true);

      const response = await fetch(
        "https://system.hajirapp.com/api/employer/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            phone: phoneNumber,
          }),
        }
      );

      if (!response.ok) {
        throw new Error(`Registration failed: ${response.statusText}`);
      }

      const responseData = await response.json(); // Use a different variable name to avoid conflict

      console.log("Registration success", responseData);
      toast.success("Registration success");

      // Log the OTP response directly in the console
      console.log("OTP:", responseData.data.otp);
      console.log("Token:", responseData.data.token);

      // Set responseData to state
      setResponseData(responseData);

      // You can handle further logic here based on the response
    } catch (error) {
      console.error("Registration failed", error.message);
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1>{loading ? "Processing" : "Register"}</h1>
      <hr />

      <label htmlFor="phoneNumber">Phone Number</label>
      <input
        className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
        id="phoneNumber"
        type="tel"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
        placeholder="Phone Number"
      />
      {loading ? (
        <p>Processing...</p>
      ) : (
        responseData && <p>OTP: {responseData.data.otp}</p>
      )}
      <button
        onClick={onSubmit}
        disabled={buttonDisabled || loading}
        className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
      >
        {loading ? "Processing" : "Submit Phone Number"}
      </button>
      <button
        onClick={() => router.push("/otp")}
        className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
      >
        Go to otp page
      </button>
      {/* <Link href="/signup">Visit Signup page</Link> */}
    </div>
  );
}
