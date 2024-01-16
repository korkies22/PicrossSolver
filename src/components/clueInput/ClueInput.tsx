import { ChangeEvent, useRef, useState } from "react";

function ClueInput({ vertical = false }: { vertical?: boolean }) {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [text, setText] = useState<string>("");

  const handleChange = (
    event: ChangeEvent<HTMLTextAreaElement> | ChangeEvent<HTMLInputElement>,
  ) => {
    const textarea = textareaRef.current;
    if (!textarea && vertical) return;

    const regex = vertical ? /^\n*([0-9]+\n*)+\n*$/ : /^\s*([0-9]+\s*)+\s*$/;

    const newText = event.target.value;
    const isMatch = regex.test(newText);

    if (!isMatch && newText) return;

    setText(event.target.value);

    if (textarea) {
      // Auto-resize the textarea height based on its scrollHeight
      textarea.style.minHeight = "auto";
      textarea.style.minHeight = `${textarea.scrollHeight}px`;
    }
  };

  if (vertical) {
    return (
      <textarea
        ref={textareaRef}
        value={text}
        onChange={handleChange}
        className="h-full resize-none overflow-hidden bg-fuchsia-800 text-center [min-width:10px]"
        rows={vertical ? undefined : 1}
        wrap="physical"
      />
    );
  } else
    return (
      <input
        value={text}
        onChange={handleChange}
        className="h-full resize-none overflow-hidden bg-fuchsia-800 text-center [min-width:10px]"
      />
    );
}

export default ClueInput;
