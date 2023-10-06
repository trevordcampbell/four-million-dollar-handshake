"use client"

import { utcToZonedTime, format } from 'date-fns-tz';
import { parse } from 'date-fns';

import { MotionValue, motion, useSpring, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

const fontSize = 20;
const padding = 15;
const height = fontSize + padding;

type CounterSectionProps = {
  label: 'Days' | 'Hours' | 'Minutes' | 'Seconds';
  value: number;
};

const labelToTypeMap: Record<CounterSectionProps['label'], 'days' | 'hours' | 'minutes' | 'seconds'> = {
  Days: 'days',
  Hours: 'hours',
  Minutes: 'minutes',
  Seconds: 'seconds'
};

function Counter({ value, type }: { value: number, type: 'days' | 'hours' | 'minutes' | 'seconds' }) {
  const digitsMap = {
    days: [100, 10, 1],
    hours: [10, 1],
    minutes: [10, 1],
    seconds: [10, 1]
  };

  return (
    <div
      style={{ fontSize }}
      className="flex space-x-2 overflow-hidden rounded-lg bg-gradient-to-tr from-white to-blue-100 px-4 leading-none text-blue-700 font-mono font-semibold border-2 border-blue-600/50"
    >
    {/* <div
      style={{ fontSize }}
      className="flex space-x-2 overflow-hidden rounded-lg bg-gradient-to-tr from-blue-700 to-blue-500 px-4 leading-none text-white font-mono font-semibold"
    > */}
      {digitsMap[type].map((place, index) => (
        <Digit key={index} place={place} value={value} />
      ))}
    </div>
  );
}

function Digit({ place, value }: { place: number; value: number }) {
  let valueRoundedToPlace = Math.floor(value / place);
  let animatedValue = useSpring(valueRoundedToPlace);

  useEffect(() => {
    animatedValue.set(valueRoundedToPlace);
  }, [animatedValue, valueRoundedToPlace]);

  return (
    <div style={{ height }} className="relative w-[1ch] tabular-nums">
      {[...Array(10).keys()].map((i) => (
        <Number key={i} mv={animatedValue} number={i} />
      ))}
    </div>
  );
}

function Number({ mv, number }: { mv: MotionValue; number: number }) {
  let y = useTransform(mv, (latest) => {
    let placeValue = latest % 10;
    let offset = (10 + number - placeValue) % 10;

    let memo = offset * height;

    if (offset > 5) {
      memo -= 10 * height;
    }

    return memo;
  });

  return (
    <motion.span
      style={{ y }}
      className="absolute inset-0 flex items-center justify-center"
    >
      {number}
    </motion.span>
  );
}

// function calculateTimeDifference() {
//   const targetTimeZone = 'America/New_York'; // Eastern Daylight Time
//   const targetDateInTargetTimeZone = format(utcToZonedTime(new Date('2024-09-24T23:59:00Z'), targetTimeZone), 'yyyy-MM-dd HH:mm:ssXXX', { timeZone: targetTimeZone });

//   const endDate = new Date(targetDateInTargetTimeZone);
//   const now = new Date();
//   const totalSeconds = (endDate.getTime() - now.getTime()) / 1000;

//   const days = Math.floor(totalSeconds / (24 * 60 * 60));
//   const hours = Math.floor((totalSeconds % (24 * 60 * 60)) / (60 * 60));
//   const minutes = Math.floor((totalSeconds % (60 * 60)) / 60);
//   const seconds = Math.floor(totalSeconds % 60);

//   return { days, hours, minutes, seconds };
// }

function calculateTimeDifference() {
  const targetTimeZone = 'America/New_York'; // Eastern Daylight Time

  // Parse the target date as being in the target time zone
  const targetDateInTargetTimeZone = utcToZonedTime(parse('2024-09-24 23:59:00', 'yyyy-MM-dd HH:mm:ss', new Date()), targetTimeZone);

  // Get the current date in the target time zone
  const nowInTargetTimeZone = utcToZonedTime(new Date(), targetTimeZone);
  
  const totalSeconds = (targetDateInTargetTimeZone.getTime() - nowInTargetTimeZone.getTime()) / 1000;

  const days = Math.floor(totalSeconds / (24 * 60 * 60));
  const hours = Math.floor((totalSeconds % (24 * 60 * 60)) / (60 * 60));
  const minutes = Math.floor((totalSeconds % (60 * 60)) / 60);
  const seconds = Math.floor(totalSeconds % 60);

  return { days, hours, minutes, seconds };
}

function CounterSection({ label, value }: CounterSectionProps) {
  return (
    <div className="flex flex-col items-center">
      <Counter value={value} type={labelToTypeMap[label]} />
      <span className='font-mono sm:font-semibold text-md text-blue-200'>{label}</span>

    </div>
  );
}

export default function AnimatedCounterSmall() {
  const [timeRemaining, setTimeRemaining] = useState(calculateTimeDifference);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeRemaining(calculateTimeDifference());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className='flex flex-col justify-center items-center'>
      {/* <p className='mb-4 text-5xl font-display font-bold tracking-tighter bg-gradient-to-r from-blue-700 to-blue-500 inline-block text-transparent bg-clip-text'>Time remaining:</p> */}
      <p className='text-lg font-mono text-white'>Time Remaining</p>
      <div className="flex space-x-6">
        <CounterSection label="Days" value={timeRemaining.days} />
        <CounterSection label="Hours" value={timeRemaining.hours} />
        <CounterSection label="Minutes" value={timeRemaining.minutes} />
        <CounterSection label="Seconds" value={timeRemaining.seconds} />
      </div>
    </div>
  );
}
