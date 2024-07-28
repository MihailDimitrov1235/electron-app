import React, { useState, useEffect } from 'react';

type CountdownProps = {
  secondsUntil: number;
};

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

function Countdown({ secondsUntil }: CountdownProps) {
  function calculateTimeLeft(seconds: number): TimeLeft {
    return {
      days: Math.floor(seconds / (60 * 60 * 24)),
      hours: Math.floor((seconds % (60 * 60 * 24)) / (60 * 60)),
      minutes: Math.floor((seconds % (60 * 60)) / 60),
      seconds: seconds % 60,
    };
  }

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(
    calculateTimeLeft(secondsUntil),
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        const newSeconds =
          prev.days * 86400 +
          prev.hours * 3600 +
          prev.minutes * 60 +
          prev.seconds -
          1;
        if (newSeconds <= 0) {
          clearInterval(timer);
          return { days: 0, hours: 0, minutes: 0, seconds: 0 };
        }
        return calculateTimeLeft(newSeconds);
      });
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [secondsUntil]);

  return (
    <div className="flex gap-2 items-center justify-center">
      {Object.entries(timeLeft).map(([key, value], index) => (
        <React.Fragment key={key}>
          <span className="flex flex-col">
            <span className="font-semibold text-xl">{value}</span>
            <span className="text-xs capitalize">{key}</span>
          </span>
          {index !== Object.entries(timeLeft).length - 1 && ':'}
        </React.Fragment>
      ))}
    </div>
  );
}

export default Countdown;
