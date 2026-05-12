import { Dispatch, useCallback } from "react";
import { Slate, SlateAction } from "./Slated.type";
import SlateHeader from "./SlateHeader";
import SlateMetaGrid from "./SlateMetaGrid";

export default function SlateCard({
  slate,
  dispatch,
}: {
  slate: Slate;
  dispatch: Dispatch<SlateAction>;
}) {
  const updateTimestamp = useCallback(
    (now: number) => {
      dispatch({ type: "TIMESTAMP", now });
    },
    [dispatch],
  );
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center pt-4 pb-32 sm:pb-28">
      <div
        className={`w-full max-w-md border border-2 rounded-2xl overflow-hidden transition
  ${
    slate.isRolling
      ? "border-red-500 shadow-[0_0_40px_rgba(255,0,0,0.3)]"
      : "border-white/20"
  }
`}
      >
        <SlateHeader
          project={slate.project}
          isRolling={slate.isRolling}
          onProjectChange={(value) =>
            dispatch({ type: "SET_PROJECT", project: value })
          }
          onRolling={updateTimestamp}
        />

        <div className="p-5 space-y-6">
          <SlateMetaGrid slate={slate} />
        </div>
      </div>
    </div>
  );
}
