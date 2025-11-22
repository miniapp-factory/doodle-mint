"use client";

import * as React from "react";
import { Button } from "./button";

export function UndoClearButtons() {
  const handleUndo = () => {
    alert("Undo functionality not implemented.");
  };
  const handleClear = () => {
    alert("Clear functionality not implemented.");
  };

  return (
    <>
      <Button variant="outline" onClick={handleUndo}>
        Undo
      </Button>
      <Button variant="outline" onClick={handleClear}>
        Clear Canvas
      </Button>
    </>
  );
}
