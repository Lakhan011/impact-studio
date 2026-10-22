"use client";

import React, { useState } from "react";
import Image from "next/image";
import Footer from "@/components/common/Footer";
import FloatingBadge from "@/components/common/FloatingBadge";

export default function ProtectedPage() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === "impact") {
      window.location.href = "/homepage";
    } else {
      setError(true);
    }
  };

  return (
    <main className="page-wrapper">
      <div className="utility-page-wrap">
        <div className="utility-page-content w-password-page w-form">
          <form onSubmit={handleSubmit} className="utility-page-form w-password-page">
            <Image
              src="/lock.svg"
              alt="Lock"
              width={280}
              height={100}
              className="icon-lock"
            />
            <h2>Protected Page</h2>
            <label htmlFor="pass" className="w-password-page">
              Password
            </label>
            <input
              className="text-field-checkout w-password-page w-input"
              autoFocus
              maxLength={256}
              name="pass"
              placeholder="Enter your password"
              type="password"
              id="pass"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setError(false);
              }}
            />
            <input
              type="submit"
              className="cta w-password-page w-button cursor-pointer"
              value="Submit"
            />
            {error && (
              <div className="w-password-page w-form-fail" style={{ display: "block", marginTop: "16px" }}>
                <div>Incorrect password. Please try again.</div>
              </div>
            )}
          </form>
        </div>
      </div>

      <Footer />
      <FloatingBadge />
    </main>
  );
}
