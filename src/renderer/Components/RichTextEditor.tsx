import React, { useRef } from 'react';
import { ImBold, ImItalic, ImStrikethrough } from 'react-icons/im';
import { BiSolidHide } from 'react-icons/bi';
import { IoLink } from 'react-icons/io5';
import { TiImage } from 'react-icons/ti';
import TextField from './Form/TextField';
import Button from './Form/Button';

export default function RichTextEditor({
  title,
  value,
  setValue,
}: {
  title: string;
  value: string;
  setValue: (newValue: string) => void;
}) {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleAddAtTheEnd = (text: string) => {
    const textarea = textareaRef.current;
    if (!textarea) return;
    setValue(`${value}${text}`);

    textarea.focus();
  };

  const handleAddSymbol = (symbolStart: string, symbolEnd: string) => {
    const textarea = textareaRef.current;
    if (!textarea) return;

    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const selectedText = value.slice(start, end);

    if (selectedText) {
      const newText = `${value.slice(
        0,
        start,
      )}${symbolStart}${selectedText}${symbolEnd}${value.slice(end)}`;
      setValue(newText);
    } else {
      const newText = `${value}${symbolStart}${symbolEnd}`;
      setValue(newText);
      setTimeout(() => {
        const newCursorPosition = newText.length - symbolEnd.length;
        textarea.setSelectionRange(newCursorPosition, newCursorPosition);
        textarea.focus();
      }, 0);
    }

    textarea.focus();
  };

  return (
    <div>
      <div className="w-full mb-1 rounded-md shadow-md border border-background-main p-2 flex justify-center gap-4">
        <Button
          variant="icon-square"
          onClick={() => handleAddSymbol('__', '__')}
        >
          <ImBold />
        </Button>
        <Button variant="icon-square" onClick={() => handleAddSymbol('_', '_')}>
          <ImItalic />
        </Button>
        <Button
          variant="icon-square"
          onClick={() => handleAddSymbol('~~', '~~')}
        >
          <ImStrikethrough />
        </Button>
        <Button
          variant="icon-square"
          onClick={() => handleAddSymbol('~!', '!~')}
        >
          <BiSolidHide />
        </Button>
        <Button
          variant="icon-square"
          onClick={() => handleAddAtTheEnd('[link](https://example.com/)')}
        >
          <IoLink />
        </Button>
        <Button
          variant="icon-square"
          onClick={() => handleAddAtTheEnd('[link](https://example.com/)')}
        >
          <TiImage />
        </Button>
      </div>
      <TextField
        ref={textareaRef}
        title={title}
        value={value}
        onChange={(newValue) => setValue(newValue)}
        textarea={{ rows: 4 }}
        className="min-h-24"
      />
    </div>
  );
}
