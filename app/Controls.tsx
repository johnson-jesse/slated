export default function Controls({
  isRolling,
  onRoll,
  onCut,
  onNextTake,
}: {
  isRolling: boolean;
  onRoll: () => void;
  onCut: () => void;
  onNextTake: () => void;
}) {
  return (
    <div className="fixed bottom-0 left-0 right-0 p-4 bg-black/80 backdrop-blur">
      <div className="text-center text-sm font-semibold uppercase tracking-wide text-white/80 mb-1">
        YouTube Clapperboard (Slate)
      </div>
      <div className="max-w-md mx-auto flex gap-3">
        <button
          onClick={onRoll}
          disabled={isRolling}
          className={`flex-1 py-4 rounded-xl font-bold transition
            ${isRolling ? "bg-red-900/40 text-white/40" : "bg-red-600 active:scale-95"}
          `}
        >
          ROLL
        </button>

        <button
          onClick={onCut}
          disabled={!isRolling}
          className="flex-1 py-4 rounded-xl bg-gray-700 active:scale-95"
        >
          CUT
        </button>

        <button
          onClick={onNextTake}
          className="flex-1 py-4 rounded-xl bg-blue-600 active:scale-95"
        >
          TAKE +
        </button>
      </div>
    </div>
  );
}
