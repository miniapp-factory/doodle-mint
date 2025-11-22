"use client";

import * as React from "react";
import { Button } from "./button";

export function MintButton() {
  const handleMint = () => {
    // Placeholder: integrate with minting logic
    alert("Minting functionality not implemented.");
    // Dispatch global event to trigger confetti
    const event = new Event("mintSuccess");
    window.dispatchEvent(event);
  };

  return <Button onClick={handleMint}>MINT DOODLE</Button>;
}
