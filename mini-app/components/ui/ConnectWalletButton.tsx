"use client";

import * as React from "react";
import { Button } from "./button";

export function ConnectWalletButton() {
  const handleConnect = () => {
    // Placeholder: integrate with Base wallet SDK
    alert("Connect wallet functionality not implemented.");
  };

  return <Button onClick={handleConnect}>Connect Wallet</Button>;
}
