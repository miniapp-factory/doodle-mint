"use client";

import * as React from "react";
import Confetti from "react-confetti";

export function Confetti() {
  const [show, setShow] = React.useState(false);

  // Show confetti when a global event "mintSuccess" is dispatched
  React.useEffect(() => {
    const handler = () => setShow(true);
    window.addEventListener("mintSuccess", handler);
    return () => window.removeEventListener("mintSuccess", handler);
  }, []);

  return show ? <Confetti recycle={false} /> : null;
}
