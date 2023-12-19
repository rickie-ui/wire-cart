// CountdownTimer.jsx

import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

interface CountdownTimerProps {
  targetDate: Date;
}
interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const now = new Date().getTime();
    const difference = targetDate.getTime() - now;
    let timeLeft: TimeLeft = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
        ),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft);
  const controls = useAnimation();

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    // Start the fade-in animation when the component mounts
    controls.start({ opacity: 1 });

    return () => {
      clearInterval(timer);
    };
  }, [controls]);

  const { days, hours, minutes, seconds } = timeLeft;

  const renderTwoDigits = (value: number) =>
    value < 10 ? `0${value}` : value.toString();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={controls}
      className="text-center"
    >
      <div className="mx-auto  my-6 grid w-3/5 grid-cols-4">
        <div className="flex h-16 w-16 flex-col items-center justify-center rounded-xl bg-fourth text-base font-semibold uppercase shadow-2xl">
          {days}
          <span className="text-xs  font-extralight opacity-60">days</span>
        </div>
        <div className="flex h-16 w-16 flex-col items-center justify-center rounded-xl bg-fourth text-base font-semibold uppercase shadow-2xl">
          {renderTwoDigits(hours)}
          <span className="text-xs  font-extralight opacity-60">hrs</span>
        </div>
        <div className="flex h-16 w-16 flex-col items-center justify-center rounded-xl bg-fourth text-base font-semibold uppercase shadow-2xl">
          {renderTwoDigits(minutes)}
          <span className="text-xs  font-extralight opacity-60">mins</span>
        </div>
        <div className="flex h-16 w-16 flex-col items-center justify-center rounded-xl bg-fourth text-base font-semibold uppercase shadow-2xl">
          {renderTwoDigits(seconds)}
          <span className="text-xs  font-extralight opacity-60">secs</span>
        </div>
      </div>
    </motion.div>
  );
};

export default CountdownTimer;
