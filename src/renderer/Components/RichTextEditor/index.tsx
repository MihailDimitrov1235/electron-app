import React, { useRef } from 'react';
import { ImBold, ImItalic, ImStrikethrough } from 'react-icons/im';
import { BiSolidHide } from 'react-icons/bi';
import { IoLink } from 'react-icons/io5';
import { TiImage } from 'react-icons/ti';
import {
  FaYoutube,
  FaVideo,
  FaHeading,
  FaAlignCenter,
  FaQuoteRight,
} from 'react-icons/fa';
import { FaCode } from 'react-icons/fa6';
import { GoListOrdered, GoListUnordered } from 'react-icons/go';
import TextField from '../Form/TextField';
import Button from '../Form/Button';
import { useDialog } from '../Contexts/DialogContext';
import TextfieldDialog from '../Dialog/TextfieldDialog';
import Tooltip from '../Tooltip';

export default function RichTextEditor({
  title,
  value,
  setValue,
}: {
  title: string;
  value: string;
  setValue: (newValue: string) => void;
}) {
  const { showDialog } = useDialog();
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

  const buttons = [
    {
      title: 'Bold',
      icon: <ImBold />,
      onClick: () => handleAddSymbol('__', '__'),
    },
    {
      title: 'Italic',
      icon: <ImItalic />,
      onClick: () => handleAddSymbol('_', '_'),
    },
    {
      title: 'Strikethrough',
      icon: <ImStrikethrough />,
      onClick: () => handleAddSymbol('~~', '~~'),
    },
    {
      title: 'Spoiler',
      icon: <BiSolidHide />,
      onClick: () => handleAddSymbol('~!', '!~'),
    },
    {
      title: 'Link',
      icon: <IoLink />,
      onClick: async () => {
        const result = await showDialog<boolean>(
          <TextfieldDialog
            title="Link"
            message="Select url"
            textFieldTitle="Link url"
          />,
        );
        if (result) {
          handleAddAtTheEnd(`[link](${result})`);
        }
      },
    },
    {
      title: 'Image',
      icon: <TiImage />,
      onClick: async () => {
        const result = await showDialog<boolean>(
          <TextfieldDialog
            title="Image"
            message="Select image url"
            textFieldTitle="Image url"
          />,
        );
        if (result) {
          handleAddAtTheEnd(`img(${result})`);
        }
      },
    },
    {
      title: 'Youtube video',
      icon: <FaYoutube />,
      onClick: async () => {
        const result = await showDialog<boolean>(
          <TextfieldDialog
            title="Youtube video"
            message="Select youtube video url"
            textFieldTitle="Video url"
          />,
        );
        if (result) {
          handleAddAtTheEnd(`youtube(${result})`);
        }
      },
    },
    {
      title: 'Webm video',
      icon: <FaVideo />,
      onClick: async () => {
        const result = await showDialog<boolean>(
          <TextfieldDialog
            title="Webm video"
            message="Select webm video url"
            textFieldTitle="Video url"
          />,
        );
        if (result) {
          handleAddAtTheEnd(`webm(${result})`);
        }
      },
    },
    {
      title: 'Ordered list',
      icon: <GoListOrdered />,
      onClick: () => handleAddSymbol('1. ', ''),
    },
    {
      title: 'Unordered list',
      icon: <GoListUnordered />,
      onClick: () => handleAddSymbol('- ', ''),
    },
    {
      title: 'Header',
      icon: <FaHeading />,
      onClick: () => handleAddSymbol('# ', ''),
    },
    {
      title: 'Center',
      icon: <FaAlignCenter />,
      onClick: () => handleAddSymbol('~~~', '~~~'),
    },
    {
      title: 'Quote',
      icon: <FaQuoteRight />,
      onClick: () => handleAddSymbol('>', ''),
    },
    {
      title: 'Code',
      icon: <FaCode />,
      onClick: () => handleAddSymbol('`', '`'),
    },
  ];

  return (
    <div>
      <div className="w-full mb-1 rounded-md shadow-md border border-background-main p-2 flex justify-center gap-4">
        {buttons.map((button) => (
          <Tooltip text={button.title}>
            <Button variant="icon-square" onClick={button.onClick}>
              {button.icon}
            </Button>
          </Tooltip>
        ))}
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
