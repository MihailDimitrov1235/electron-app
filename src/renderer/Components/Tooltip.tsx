/* eslint-disable react/require-default-props */
import React, { useState } from 'react';

type Direction = 'top' | 'right' | 'bottom' | 'left';

type TooltipProps = {
  text: string;
  direction?: Direction;
  className?: string;
  children: React.ReactNode;
};

function Tooltip({
  text,
  direction = 'top',
  className = '',
  children,
}: TooltipProps) {
  const [isVisible, setIsVisible] = useState(false);

  const getPositionClasses = (): string => {
    switch (direction) {
      case 'right':
        return 'left-full top-1/2 -translate-y-1/2 ml-2';
      case 'bottom':
        return 'top-full left-1/2 -translate-x-1/2 mt-2';
      case 'left':
        return 'right-full top-1/2 -translate-y-1/2 mr-2';
      default: // top
        return 'bottom-full left-1/2 -translate-x-1/2 mb-2';
    }
  };

  return (
    <div className="relative inline-block">
      <div
        className={`flex ${className}`}
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}
      >
        {children}
      </div>
      {isVisible && (
        <div
          className={`absolute z-10 px-3 py-2 text-sm font-medium text-white bg-background-main rounded-md shadow-sm tooltip ${getPositionClasses()}`}
        >
          {text}
        </div>
      )}
    </div>
  );
}

export default Tooltip;
