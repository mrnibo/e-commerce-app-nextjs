"use client";

import React from "react";
import Countdown from "react-countdown";

interface SectionTitleProps {
  title: string;
}

export const SectionTitle = ({ title }: SectionTitleProps) => {
  return (
    <>
      <div className="flex justify-start items-center gap-2">
        <div className="w-4 h-6 rounded-md bg-primary"></div>
        <h1 className="text-lg font-bold text-primary">{title}</h1>
      </div>
    </>
  );
};
interface SectionTitleWithTimerProps {
  title: string;
  days: number;
}

export const SectionTitleWithTimer = ({
  title,
  days,
}: SectionTitleWithTimerProps) => {
  // Set the countdown to a certain number of days from now
  const date = new Date();
  date.setDate(date.getDate() + days);

  /**
   * @param days
   * @param hours
   * @param minutes
   * @param seconds
   * @returns
   * returns DD:HH:MM:SS
   */
  const formatTime = (
    days: number,
    hours: number,
    minutes: number,
    seconds: number
  ) => {
    const pad = (num: number) => num.toString().padStart(2, "0");
    return `${pad(days)}:${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
  };

  // Define the type for renderer props
  interface RendererProps {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
    completed: boolean;
  }

  const renderer = ({
    days,
    hours,
    minutes,
    seconds,
    completed,
  }: RendererProps) => {
    if (completed) {
      // When countdown is complete
      return <span>Countdown Complete!</span>;
    } else {
      // Format remaining time
      return <span>{formatTime(days, hours, minutes, seconds)}</span>;
    }
  };

  return (
    <div className="flex justify-start items-center gap-2 text-2xl font-bold">
      <h2>{title}</h2>
      <Countdown date={date.getTime()} renderer={renderer} />
    </div>
  );
};

export const SectionTitleBig = ({ title }: SectionTitleProps) => {
  return (
    <>
      <h1 className="text-3xl font-bold">{title}</h1>
    </>
  );
};
