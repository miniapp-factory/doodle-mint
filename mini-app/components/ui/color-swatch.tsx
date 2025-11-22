"use client";

import * as React from "react";
import { Button } from "./button";

export interface ColorSwatchProps {
  color: string;
  onSelect: (color: string) => void;
}

export function ColorSwatch({ color, onSelect }: ColorSwatchProps) {
  return (
    <Button
      variant="ghost"
      size="icon"
      className="h-8 w-8 rounded-full"
      style={{ backgroundColor: color }}
      onClick={() => onSelect(color)}
    />
  );
}
