/* eslint-disable react/require-default-props */
import React, { useState, useRef, useEffect } from 'react';
import Button from './Button';

type TruncatedTextProps = {
  html: string;
  lineHeight?: number;
  maxLines?: number;
};

function TruncatedText({
  html,
  lineHeight = 1.5,
  maxLines = 6,
}: TruncatedTextProps) {
  const [isTruncated, setIsTruncated] = useState<boolean>(true);
  const [showButton, setShowButton] = useState<boolean>(false);
  const textRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (textRef.current) {
      const maxHeight = lineHeight * maxLines;
      const actualHeight = textRef.current.scrollHeight / 16; // Convert px to rem
      setShowButton(actualHeight > maxHeight);
    }
  }, [html, lineHeight, maxLines]);

  const maxHeightStyle = `${lineHeight * maxLines}rem`;

  return (
    <div className="relative">
      <div
        ref={textRef}
        className={`text-base ${isTruncated ? 'overflow-hidden' : ''}`}
        style={{
          lineHeight: `${lineHeight}rem`,
          maxHeight: isTruncated ? maxHeightStyle : 'none',
        }}
        dangerouslySetInnerHTML={{ __html: html }}
      />
      {showButton && (
        <button
          type="button"
          onClick={() => setIsTruncated(!isTruncated)}
          className="mt-2"
        >
          {isTruncated ? 'Read More' : 'Read Less'}
        </button>
      )}
    </div>
  );
}

export default TruncatedText;
