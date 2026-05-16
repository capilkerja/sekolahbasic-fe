"use client";

import { useState } from "react";
import { Download, Coffee, Sunrise, Bus, CalendarDays } from "lucide-react";

type ScheduleItem = {
  time: string;
  title: string;
  desc: string;
  color: string;
  icon?: React.ReactNode;
};

type LevelData = {
  key: string;
  label: string;
  hours: string;
  schedule: ScheduleItem[];
  excul: string;
};

const LEVELS: LevelData[] = [
  {
    key: "toddler",
    label: "Toddler",
    hours: "07.30 – 12.00",
    schedule: [
      {
        time: "07:30",
        title: "Arrival & Morning Devotion",
        desc: "Children are welcomed by caregivers and start the day with songs, prayer, and simple devotional moments.",
        color: "bg-[#FFC627]",
        icon: <Sunrise className="w-5 h-5" />,
      },
      {
        time: "09:00",
        title: "Snack Time",
        desc: "A nutritious snack break to refuel and enjoy social time with friends.",
        color: "bg-gray-200",
        icon: <Coffee className="w-5 h-5" />,
      },
      {
        time: "12:00",
        title: "Dismissal",
        desc: "End of the day. Children are picked up by parents or caregivers.",
        color: "bg-[#9e1b66]",
        icon: <Bus className="w-5 h-5" />,
      },
    ],
    excul: "Extracurricular every Wednesday during school time.",
  },
  {
    key: "nursery",
    label: "Nursery",
    hours: "07.30 – 12.00",
    schedule: [
      {
        time: "07:30",
        title: "Arrival & Morning Devotion",
        desc: "Gentle welcome, songs of praise, and a short prayer to start the day.",
        color: "bg-[#FFC627]",
        icon: <Sunrise className="w-5 h-5" />,
      },
      {
        time: "09:00",
        title: "Snack Time",
        desc: "A short break for healthy snacks and play.",
        color: "bg-gray-200",
        icon: <Coffee className="w-5 h-5" />,
      },
      {
        time: "12:00",
        title: "Dismissal",
        desc: "School concludes with a closing prayer before pick-up.",
        color: "bg-[#9e1b66]",
        icon: <Bus className="w-5 h-5" />,
      },
    ],
    excul: "Extracurricular every Wednesday during school time.",
  },
  {
    key: "tka",
    label: "TK A",
    hours: "07.30 – 12.00",
    schedule: [
      {
        time: "07:30",
        title: "Arrival & Morning Devotion",
        desc: "Students gather for worship, songs, and a short scripture moment to center the day on Christ.",
        color: "bg-[#FFC627]",
        icon: <Sunrise className="w-5 h-5" />,
      },
      {
        time: "09:00",
        title: "Snack Time",
        desc: "Healthy snack break and storytime to build language and imagination.",
        color: "bg-gray-200",
        icon: <Coffee className="w-5 h-5" />,
      },
      {
        time: "12:00",
        title: "Dismissal",
        desc: "Closing prayer and farewell routine before pick-up.",
        color: "bg-[#9e1b66]",
        icon: <Bus className="w-5 h-5" />,
      },
    ],
    excul: "Extracurricular every Wednesday during school time.",
  },
  {
    key: "tkb",
    label: "TK B",
    hours: "07.30 – 12.00",
    schedule: [
      {
        time: "07:30",
        title: "Arrival & Morning Devotion",
        desc: "Students gather for worship, songs, and a short scripture moment to center the day on Christ.",
        color: "bg-[#FFC627]",
        icon: <Sunrise className="w-5 h-5" />,
      },
      {
        time: "09:00",
        title: "Snack Time",
        desc: "Healthy snack break and storytime to build language and imagination.",
        color: "bg-gray-200",
        icon: <Coffee className="w-5 h-5" />,
      },
      {
        time: "12:00",
        title: "Dismissal",
        desc: "Closing prayer and farewell routine before pick-up.",
        color: "bg-[#9e1b66]",
        icon: <Bus className="w-5 h-5" />,
      },
    ],
    excul: "Extracurricular every Wednesday during school time.",
  },
  {
    key: "primary-1-3",
    label: "Primary 1–3",
    hours: "07.30 – 14.00",
    schedule: [
      {
        time: "07:30",
        title: "Arrival & Morning Devotion",
        desc: "Students and teachers gather for worship, scripture reading, and prayer to start the day with Christ.",
        color: "bg-[#FFC627]",
        icon: <Sunrise className="w-5 h-5" />,
      },
      {
        time: "09:10",
        title: "First Snack Break",
        desc: "A short break to enjoy snacks and connect with friends.",
        color: "bg-gray-200",
        icon: <Coffee className="w-5 h-5" />,
      },
      {
        time: "10:35",
        title: "Second Snack Break",
        desc: "Another quick break to recharge between learning blocks.",
        color: "bg-gray-200",
        icon: <Coffee className="w-5 h-5" />,
      },
      {
        time: "14:00",
        title: "Dismissal",
        desc: "School concludes for the day.",
        color: "bg-[#9e1b66]",
        icon: <Bus className="w-5 h-5" />,
      },
    ],
    excul: "Extracurricular every Wednesday during school time.",
  },
  {
    key: "primary-4-6",
    label: "Primary 4–6",
    hours: "07.30 – 15.00",
    schedule: [
      {
        time: "07:30",
        title: "Arrival & Morning Devotion",
        desc: "Students and teachers gather for worship, scripture reading, and prayer to start the day with Christ.",
        color: "bg-[#FFC627]",
        icon: <Sunrise className="w-5 h-5" />,
      },
      {
        time: "09:45",
        title: "First Snack Break",
        desc: "A short break to enjoy snacks and connect with friends.",
        color: "bg-gray-200",
        icon: <Coffee className="w-5 h-5" />,
      },
      {
        time: "13:30",
        title: "Second Snack Break",
        desc: "Afternoon snack break to refresh before final lessons.",
        color: "bg-gray-200",
        icon: <Coffee className="w-5 h-5" />,
      },
      {
        time: "15:00",
        title: "Dismissal",
        desc: "School concludes for the day.",
        color: "bg-[#9e1b66]",
        icon: <Bus className="w-5 h-5" />,
      },
    ],
    excul: "Extracurricular every Friday during school time.",
  },
  {
    key: "secondary",
    label: "Secondary",
    hours: "07.30 – 15.15",
    schedule: [
      {
        time: "07:30",
        title: "Arrival & Morning Devotion",
        desc: "Worship, scripture reading, and prayer to center the day on Christ.",
        color: "bg-[#FFC627]",
        icon: <Sunrise className="w-5 h-5" />,
      },
      {
        time: "09:10",
        title: "Snack Break",
        desc: "A short break to refresh and connect with friends between academic blocks.",
        color: "bg-gray-200",
        icon: <Coffee className="w-5 h-5" />,
      },
      {
        time: "15:15",
        title: "Dismissal",
        desc: "School concludes, transitioning into extracurricular sessions.",
        color: "bg-[#9e1b66]",
        icon: <Bus className="w-5 h-5" />,
      },
    ],
    excul: "Extracurricular based on schedule — every day.",
  },
  {
    key: "sma",
    label: "SMA",
    hours: "07.30 – 15.45",
    schedule: [
      {
        time: "07:30",
        title: "Arrival & Morning Devotion",
        desc: "Students lead worship and devotional sharing, building spiritual maturity and confidence.",
        color: "bg-[#FFC627]",
        icon: <Sunrise className="w-5 h-5" />,
      },
      {
        time: "09:10",
        title: "Snack Break",
        desc: "A short break to refresh between academic blocks and peer interaction.",
        color: "bg-gray-200",
        icon: <Coffee className="w-5 h-5" />,
      },
      {
        time: "15:45",
        title: "Dismissal",
        desc: "School concludes, with options for sports, electives, or study hall.",
        color: "bg-[#9e1b66]",
        icon: <Bus className="w-5 h-5" />,
      },
    ],
    excul: "Extracurricular based on schedule — every day.",
  },
];

export function DailySchedule() {
  const [activeKey, setActiveKey] = useState<string>("primary-1-3");
  const active = LEVELS.find((l) => l.key === activeKey) ?? LEVELS[0];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="flex flex-col md:flex-row gap-12">

        {/* Left: sticky label + filter + description */}
        <div className="md:w-1/3">
          <div className="sticky top-40">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 w-fit mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
              <span className="text-[10px] uppercase tracking-wider font-medium text-blue-800">Routine</span>
            </div>
            <h2 className="text-2xl font-semibold tracking-tight text-gray-900 mb-4">Daily Life at School</h2>
            <p className="text-sm text-gray-500 leading-relaxed mb-6">
              Each level has its own daily rhythm — designed to balance learning, rest, and time with friends. Select a level to see the schedule.
            </p>

            {/* Level filter — pill style */}
            <div className="flex flex-wrap gap-2 mb-6">
              {LEVELS.map(({ key, label }) => (
                <button
                  key={key}
                  onClick={() => setActiveKey(key)}
                  className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all active:scale-95 ${
                    activeKey === key
                      ? "bg-gray-900 text-white shadow-sm"
                      : "bg-white border border-gray-200 text-gray-600 hover:bg-gray-50 hover:border-gray-300"
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>

            <a href="#" className="inline-flex items-center text-xs font-medium text-[#9e1b66] hover:underline gap-1">
              Download Timetable <Download className="w-3 h-3" />
            </a>
          </div>
        </div>

        {/* Right: timeline + excul note */}
        <div className="md:w-2/3">

          {/* Level summary card */}
          <div className="bg-gradient-to-br from-gray-900 to-[#2c1b4e] text-white rounded-2xl p-5 mb-8 flex items-center justify-between flex-wrap gap-3">
            <div>
              <p className="text-[10px] uppercase tracking-wider text-white/50 mb-1">Schedule for</p>
              <h3 className="text-lg font-semibold">{active.label}</h3>
            </div>
            <div className="text-right">
              <p className="text-[10px] uppercase tracking-wider text-white/50 mb-1">School hours</p>
              <p className="text-lg font-mono font-semibold text-[#FFC627]">{active.hours}</p>
            </div>
          </div>

          {/* Timeline */}
          <div className="space-y-0 relative border-l border-dashed border-gray-200 ml-4">
            {active.schedule.map((item, i) => (
              <div key={i} className={`relative pl-8 ${i < active.schedule.length - 1 ? "pb-10" : "pb-2"}`}>
                <div className={`absolute -left-[9px] top-1 h-4 w-4 rounded-full ${item.color} border-4 border-white shadow-sm`}></div>
                <span className="text-xs font-medium text-gray-400 font-mono mb-1 block">{item.time}</span>
                <h3 className="text-base font-semibold text-gray-900 mb-2">{item.title}</h3>
                <div className={`bg-white p-4 rounded-lg border border-gray-200 shadow-sm ${item.icon ? "flex gap-4 items-center" : ""}`}>
                  {item.icon && (
                    <div className="bg-orange-50 p-2 rounded text-orange-600 shrink-0">
                      {item.icon}
                    </div>
                  )}
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Excul note */}
          <div className="mt-6 ml-4 pl-8 flex gap-4 items-start p-4 rounded-lg bg-[#9e1b66]/5 border border-[#9e1b66]/10">
            <div className="bg-[#9e1b66]/10 p-2 rounded text-[#9e1b66] shrink-0">
              <CalendarDays className="w-5 h-5" />
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-wider font-semibold text-[#9e1b66] mb-1">Extracurricular</p>
              <p className="text-sm text-gray-700">{active.excul}</p>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
