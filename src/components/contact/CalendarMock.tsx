"use client";

import { useState } from "react";
import { Calendar } from "lucide-react";

const days: { label: string; num: number; disabled?: boolean; muted?: boolean }[] = [
  { label: "Nov 22", num: 22, muted: true },
  { label: "Nov 23", num: 23, muted: true },
  { label: "Nov 24", num: 24, muted: true },
  { label: "Nov 25", num: 25, muted: true },
  { label: "Nov 26", num: 26, muted: true },
  { label: "Nov 27", num: 27, muted: true },
  { label: "Nov 28", num: 28, muted: true },
  { label: "Nov 29", num: 29, muted: true },
  { label: "Nov 30", num: 30 },
  { label: "Dec 1", num: 1 },
  { label: "Dec 2", num: 2 },
  { label: "Dec 3", num: 3 },
  { label: "Dec 4", num: 4 },
  { label: "Dec 5", num: 5, muted: true },
];

const times = ["10:00 AM", "1:30 PM", "3:00 PM"];

export default function CalendarMock() {
  const [day, setDay] = useState("Nov 30");
  const [time, setTime] = useState("10:00 AM");

  return (
    <div className="flex min-h-[460px] flex-col gap-5 rounded-2xl border border-line bg-white p-7 md:p-8">
      <div className="flex items-center justify-between border-b border-line pb-4">
        <div>
          <p className="text-[15px] font-semibold tracking-tight text-ink">Xovra Demo &middot; 30 min</p>
          <p className="mt-0.5 text-[12.5px] text-body">Video call &middot; Mon&ndash;Fri, 9am&ndash;6pm PT</p>
        </div>
        <span className="inline-flex items-center gap-1.5 rounded-full bg-brand/10 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-brand">
          <Calendar size={12} strokeWidth={2.4} aria-hidden /> Nov 2026
        </span>
      </div>

      <div className="grid grid-cols-7 gap-1 text-center text-[11px] font-semibold uppercase tracking-[0.18em] text-body">
        {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((d) => (
          <span key={d}>{d}</span>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-1 text-center text-[14px] tabular-nums">
        {days.map((d) => {
          const isSelected = d.label === day;
          if (d.muted) {
            return (
              <span key={d.label} className="py-2 text-body/50">
                {d.num}
              </span>
            );
          }
          return (
            <button
              key={d.label}
              type="button"
              onClick={() => setDay(d.label)}
              className={`rounded-md py-2 font-semibold transition ${
                isSelected
                  ? "bg-brand text-white"
                  : "bg-surface text-ink hover:bg-brand/10 hover:text-brand"
              }`}
            >
              {d.num}
            </button>
          );
        })}
      </div>

      <div className="flex flex-col gap-2 pt-1">
        <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-body">
          Available times (PT)
        </span>
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
          {times.map((t) => {
            const isSelected = t === time;
            return (
              <button
                key={t}
                type="button"
                onClick={() => setTime(t)}
                className={`rounded-md border px-3 py-2 font-mono text-[13px] tabular-nums transition ${
                  isSelected
                    ? "border-brand bg-brand/10 text-brand"
                    : "border-line bg-surface text-ink hover:border-brand hover:text-brand"
                }`}
              >
                {t}
              </button>
            );
          })}
        </div>
      </div>

      <div className="mt-auto flex items-center justify-between gap-4 border-t border-line pt-4">
        <span className="text-[13.5px] text-body">
          Selected: <span className="font-medium text-ink">{day}</span> at <span className="font-medium text-ink">{time}</span> PT
        </span>
        <a
          href="https://cal.com/xovra"
          className="inline-flex items-center rounded-full bg-brand px-4 py-2 text-[13.5px] font-semibold text-white hover:bg-brand/90"
        >
          Confirm slot
        </a>
      </div>
    </div>
  );
}
