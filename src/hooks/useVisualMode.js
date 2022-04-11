import { useState } from "react";

export default function useVisualMode(initial) {
  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]);
  function transition(newMode, replace = false) {
    setMode(newMode);
    setHistory((prev) => [
      ...(replace ? prev.slice(0, history.length - 1) : prev),
      newMode,
    ]);
  }

  function back() {
    if (history.length > 1) {
      const historyEnd = history.length - 2;
      const newMode = history[historyEnd];
      setHistory((prev) => [...prev.slice(0, historyEnd)]);
      transition(newMode);
    }
  }
  return { mode, transition, back };
}
