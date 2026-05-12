import { Dispatch } from "react";
import { EditableText } from "./EditableText";
import { Slate, SlateAction } from "./Slated.type";

export default function SlateMetaGrid({
  slate,
  dispatch,
}: {
  slate: Slate;
  dispatch: Dispatch<SlateAction>;
}) {
  return (
    <div className="grid grid-cols-2 gap-4 text-sm">
      <div className="border border-white/20 rounded-lg p-3">
        <div className="text-white/50 text-xs">SEGMENT</div>
        <EditableText
          className="font-semibold mt-1"
          name="segment"
          value={slate.segment}
          onChange={(value) =>
            dispatch({ type: "SET_SEGMENT", segment: value })
          }
        />
      </div>

      <div className="border border-white/20 rounded-lg p-3">
        <div className="text-white/50 text-xs">TAKE</div>
        <div className="font-semibold mt-1 text-lg">{slate.take}</div>
      </div>

      <div className="border border-white/20 rounded-lg p-3">
        <div className="text-white/50 text-xs">CAMERA</div>
        <EditableText
          className="font-semibold mt-1"
          name="camera"
          value={slate.camera || ''}
          onChange={(value) =>
            dispatch({ type: "SET_CAMERA", camera: value })
          }
        />
      </div>

      <div className="border border-white/20 rounded-lg p-3">
        <div className="text-white/50 text-xs">STATUS</div>
        <div className="text-center mt-4">
          {slate.isRolling ? (
            <div className="text-red-500 font-bold tracking-widest animate-pulse">
              ● ROLLING
            </div>
          ) : (
            <div className="text-white/40">STANDBY</div>
          )}
        </div>
      </div>
    </div>
  );
}
