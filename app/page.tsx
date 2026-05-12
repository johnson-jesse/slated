"use client";

import { useReducer } from "react";
import Controls from "./Controls";
import { initialSlate, slateReducer } from "./engine";
import SlateCard from "./SlateCard";

export default function Page() {
  const [slate, dispatch] = useReducer(slateReducer, initialSlate);

  return (
    <div>
      <button
        onClick={() => dispatch({ type: "RESET" })}
        className="fixed top-4 left-4 w-6 h-6 rounded-full bg-white text-black font-bold flex items-center justify-center text-lg shadow-lg active:scale-95 transition"
      >
        ↺
      </button>
      <button
        onClick={() => {
          window.location.href = "mailto:jesse@polylucent.com";
        }}
        className="fixed top-3 right-3 bg-white/10 text-white z-9999 flex items-center justify-center text-xs hover:bg-white/20 active:scale-95 transition"
      >
        jesse@polylucent.com
      </button>
      <SlateCard slate={slate} dispatch={dispatch} />

      <Controls
        isRolling={slate.isRolling}
        onRoll={() => dispatch({ type: "ROLL" })}
        onCut={() => dispatch({ type: "CUT" })}
        onNextTake={() => dispatch({ type: "NEXT_TAKE" })}
      />
    </div>
  );
}
