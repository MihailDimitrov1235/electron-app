/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/require-default-props */
import React, { useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';

type Direction = 'top' | 'right' | 'bottom' | 'left';

type TooltipProps = {
  text: string;
  direction?: Direction;
  className?: string;
  toolTipClassName?: string;
  center?: boolean;
  children: React.ReactNode;
};

function Tooltip({
  text,
  direction = 'top',
  className = '',
  toolTipClassName = '',
  center = false,
  children,
}: TooltipProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [tooltipStyles, setTooltipStyles] = useState({});
  const ref = useRef<HTMLDivElement>(null);

  const getPositionStyles = (): React.CSSProperties => {
    if (!ref.current) return {};

    const rect = ref.current.getBoundingClientRect();
    const styles: React.CSSProperties = {};

    switch (direction) {
      case 'right':
        styles.left = rect.right + window.scrollX + 8;
        styles.top = rect.top + window.scrollY + rect.height / 2;
        styles.transform = 'translateY(-50%)';
        break;
      case 'bottom':
        styles.left = rect.left + window.scrollX + rect.width / 2;
        styles.top = rect.bottom + window.scrollY + 8;
        styles.transform = 'translateX(-50%)';
        break;
      case 'left':
        styles.left = rect.left + window.scrollX - 8;
        styles.top = rect.top + window.scrollY + rect.height / 2;
        styles.transform = 'translateY(-50%) translateX(-100%)';
        break;
      default: // top
        styles.left = rect.left + window.scrollX + rect.width / 2;
        styles.top = rect.top + window.scrollY - 8;
        styles.transform = 'translateX(-50%) translateY(-100%)';
        break;
    }

    return styles;
  };

  useEffect(() => {
    if (isVisible) {
      setTooltipStyles(getPositionStyles());
    }
  }, [isVisible, direction]);

  return (
    <div
      className="relative inline-block"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
      ref={ref}
    >
      <div className={`flex ${className}`}>{children}</div>
      {isVisible &&
        ReactDOM.createPortal(
          <div
            className={`fixed  z-10 px-3 py-2 text-sm font-medium text-text-main bg-background-light max-w-96 rounded-md shadow-sm tooltip ${toolTipClassName} ${
              center && 'text-center'
            }`}
            style={tooltipStyles}
          >
            {text}
          </div>,
          document.getElementById('App') || document.body,
        )}
    </div>
  );
}

export default Tooltip;
