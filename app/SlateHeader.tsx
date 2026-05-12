import { useEffect, useMemo, useState } from "react";

export default function SlateHeader({
  project,
  isRolling,
  onProjectChange,
  onRolling
}: {
  project: string;
  isRolling: boolean;
  onProjectChange: (value: string) => void;
  onRolling: (now: number) => void;
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [value, setValue] = useState(project);
  const [now, setNow] = useState(() => Date.now());

  function commit() {
    onProjectChange(value.trim() || "UNTITLED");
    setIsEditing(false);
  }

  useEffect(() => {
    if (isRolling) {
      onRolling(now)
      return;
    }

    const interval = setInterval(() => {
      setNow(Date.now());
    }, 1000);

    return () => clearInterval(interval);
  }, [isRolling, now, onRolling]);

  const { date, time } = useMemo(() => {
    const timestamp = new Date(now)
    const d = new Date(now).toISOString().slice(0, 10);
    const t = timestamp.toLocaleTimeString();
    return { date: d, time: t }
  }, [now]);

  return (
    <div className="bg-white text-black px-4 py-3 flex justify-between items-center gap-2">
      <div className="flex-1">
        {isEditing ? (
          <input
            name="project"
            autoFocus
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onBlur={commit}
            onKeyDown={(e) => {
              if (e.key === "Enter") commit();
              if (e.key === "Escape") {
                setValue(project);
                setIsEditing(false);
              }
            }}
            className="input-reset font-bold tracking-wide text-sm uppercase outline-none"
          />
        ) : (
          <div
            onClick={() => setIsEditing(true)}
            className="font-bold tracking-wide text-sm uppercase cursor-pointer"
          >
            {project}
          </div>
        )}
      </div>
      <div className={`text-md ${isRolling ? 'font-bold' : 'italic opacity-70'}`}>{date}</div>
      <div className={`text-md ${isRolling ? 'font-bold' : 'italic opacity-70'}`}>{time}</div>
    </div>
  );
}
