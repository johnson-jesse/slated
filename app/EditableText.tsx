import { useState } from "react";

export function EditableText({
  className,
  editClassName,
  viewClassName,
  onChange,
  name,
  value,
}: {
  className?: string;
  editClassName?: string;
  viewClassName?: string;
  onChange(v: string): void;
  name: string;
  value: string;
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [state, setState] = useState(value);

  function commit() {
    onChange(state.trim() || "--");
    setIsEditing(false);
  }

  return (
    <div className={className}>
      {isEditing ? (
        <input
          name={name}
          autoFocus
          value={state}
          onChange={(e) => setState(e.target.value)}
          onBlur={commit}
          onKeyDown={(e) => {
            if (e.key === "Enter") commit();
            if (e.key === "Escape") {
              setState(value);
              setIsEditing(false);
            }
          }}
          className={`input-reset font-bold tracking-wide text-sm uppercase outline-none${editClassName || ""}`}
        />
      ) : (
        <div
          onClick={() => setIsEditing(true)}
          className={`font-bold tracking-wide text-sm uppercase cursor-pointer${viewClassName || ""}`}
        >
          {value}
        </div>
      )}
    </div>
  );
}
