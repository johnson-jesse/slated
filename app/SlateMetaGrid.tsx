import { Slate } from "./Slated.type";

export default function SlateMetaGrid({ slate }: { slate: Slate }) {
  return (
    <div className="grid grid-cols-2 gap-4 text-sm">
      <div className="border border-white/20 rounded-lg p-3">
        <div className="text-white/50 text-xs">SEGMENT</div>
        <div className="font-semibold mt-1">{slate.segment}</div>
      </div>

      <div className="border border-white/20 rounded-lg p-3">
        <div className="text-white/50 text-xs">TAKE</div>
        <div className="font-semibold mt-1 text-lg">{slate.take}</div>
      </div>

      <div className="border border-white/20 rounded-lg p-3">
        <div className="text-white/50 text-xs">CAMERA</div>
        <div className="font-semibold mt-1">{slate.camera ?? "—"}</div>
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
