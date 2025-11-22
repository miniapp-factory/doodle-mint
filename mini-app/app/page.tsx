import { description, title } from "@/lib/metadata";
import { generateMetadata } from "@/lib/farcaster-embed";

export { generateMetadata };

import { DrawingCanvas } from "@/components/ui/drawing-canvas";
import { Toolbar } from "@/components/ui/toolbar";
import { Confetti } from "@/components/ui/confetti";

export default function Home() {
  return (
    <main className="flex flex-col h-screen">
      <div className="flex-1 flex items-center justify-center bg-gray-50">
        <DrawingCanvas />
      </div>
      <Toolbar />
      <Confetti />
    </main>
  );
}
