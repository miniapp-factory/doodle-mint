"use client";

import * as React from "react";
import { Slider } from "./slider";
import { ColorSwatch } from "./color-swatch";
import { Button } from "./button";
import { UndoClearButtons } from "./UndoClearButtons";
import { MintButton } from "./MintButton";

export function Toolbar() {
  const [size, setSize] = React.useState(10);
  const [opacity, setOpacity] = React.useState(100);
  const [tool, setTool] = React.useState("pencil");
  const [color, setColor] = React.useState("#000000");

  const colors = [
    "#ff0000",
    "#ffa500",
    "#ffff00",
    "#008000",
    "#0000ff",
    "#4b0082",
    "#ee82ee",
    "#ff1493",
  ];

  return (
    <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-white rounded-full shadow-lg p-4 flex items-center space-x-4">
      <Slider
        min={1}
        max={50}
        value={[size]}
        onValueChange={(v) => setSize(v[0])}
        className="w-32"
      />
      <Slider
        min={1}
        max={100}
        value={[opacity]}
        onValueChange={(v) => setOpacity(v[0])}
        className="w-32"
      />
      <div className="flex space-x-2">
        {colors.map((c) => (
          <ColorSwatch key={c} color={c} onSelect={setColor} />
        ))}
      </div>
      <UndoClearButtons />
      <MintButton />
    </div>
  );
}
