"use client";

import * as React from "react";

export function DrawingCanvas() {
  const canvasRef = React.useRef<HTMLCanvasElement>(null);

  React.useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    // Basic canvas setup
    canvas.width = 800;
    canvas.height = 600;
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="border rounded-lg shadow-md"
      style={{ width: "100%", height: "100%" }}
    />
  );
}
