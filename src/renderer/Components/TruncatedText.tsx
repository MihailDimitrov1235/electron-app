/* eslint-disable react/require-default-props */
import React, { useState, useRef, useEffect } from 'react';
import DOMPurify from 'dompurify';

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
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{
          __html: DOMPurify.sanitize(html, { USE_PROFILES: { html: true } }),
        }}
      />
      {showButton && (
        <button
          type="button"
          onClick={() => setIsTruncated(!isTruncated)}
          className="text-sm text-text-light mb-2"
        >
          {isTruncated ? 'Read More' : 'Read Less'}
        </button>
      )}
    </div>
  );
}

export default TruncatedText;
