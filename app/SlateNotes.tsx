// components/SlateNotes.tsx
export default function SlateNotes({ notes }: { notes: string[] }) {
  return (
    <div className="border border-white/20 rounded-lg p-3">
      <div className="text-white/50 text-xs mb-2">NOTES</div>

      {notes.length === 0 ? (
        <div className="text-white/40 text-sm">No notes</div>
      ) : (
        <ul className="space-y-1 text-sm">
          {notes.map((note, i) => (
            <li key={i} className="text-white/80">
              • {note}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}