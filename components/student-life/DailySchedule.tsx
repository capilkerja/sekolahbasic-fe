"use client";

import { useState } from "react";
import { Download, Coffee, BookOpen, Utensils, Bus, Sun, Pencil, FlaskConical, BookMarked } from "lucide-react";

type ScheduleItem = {
  time: string;
  title: string;
  desc: string;
  color?: string;
  icon?: React.ReactNode;
};

type Level = "TK" | "SD" | "SMP" | "SMA";

const SCHEDULES: Record<Level, ScheduleItem[]> = {
  TK: [
    {
      time: "07:15 AM",
      title: "Morning Devotion",
      desc: "Students and teachers gather for worship, songs of praise, and a short prayer to start the day with God.",
      color: "bg-[#FFC627]",
    },
    {
      time: "07:45 AM",
      title: "Play-Based Learning",
      desc: "Guided play activities that develop motor skills, creativity, and foundational literacy and numeracy concepts.",
      color: "bg-gray-200",
      icon: <Pencil className="w-5 h-5" />,
    },
    {
      time: "09:30 AM",
      title: "Snack & Story Time",
      desc: "Healthy snack break followed by interactive storytelling to build language and imagination.",
      color: "bg-gray-200",
      icon: <Coffee className="w-5 h-5" />,
    },
    {
      time: "10:00 AM",
      title: "Creative Arts & Movement",
      desc: "Drawing, crafts, singing, and physical play activities to develop fine and gross motor skills.",
      color: "bg-gray-200",
    },
    {
      time: "11:30 AM",
      title: "Dismissal",
      desc: "A short closing prayer and farewell routine before students are picked up by parents.",
      color: "bg-[#9e1b66]",
      icon: <Bus className="w-5 h-5" />,
    },
  ],
  SD: [
    {
      time: "07:15 AM",
      title: "Morning Devotion",
      desc: "Students and teachers gather for worship, scripture reading, and prayer to center the day on Christ.",
      color: "bg-[#FFC627]",
    },
    {
      time: "08:00 AM",
      title: "Academic Block I",
      desc: "Focused learning sessions covering core subjects like Mathematics, Science, and Languages.",
      color: "bg-gray-200",
      icon: <BookOpen className="w-5 h-5" />,
    },
    {
      time: "10:00 AM",
      title: "Recess & Fellowship",
      desc: "A time to recharge, enjoy healthy snacks, and build friendships on the playground.",
      color: "bg-gray-200",
      icon: <Coffee className="w-5 h-5" />,
    },
    {
      time: "10:30 AM",
      title: "Academic Block II",
      desc: "Continuation of core subjects including Social Studies, Arts, and Christian Education.",
      color: "bg-gray-200",
    },
    {
      time: "12:30 PM",
      title: "Lunch & Clubs",
      desc: "Communal lunch followed by student-led interest groups and library time.",
      color: "bg-gray-200",
      icon: <Utensils className="w-5 h-5" />,
    },
    {
      time: "02:00 PM",
      title: "Dismissal & Co-Curriculars",
      desc: "School concludes, with optional extracurricular activities like sports, music, and arts.",
      color: "bg-[#9e1b66]",
      icon: <Bus className="w-5 h-5" />,
    },
  ],
  SMP: [
    {
      time: "07:15 AM",
      title: "Morning Devotion",
      desc: "Students and teachers gather for worship, scripture reading, and prayer to center the day on Christ.",
      color: "bg-[#FFC627]",
    },
    {
      time: "08:00 AM",
      title: "Academic Block I",
      desc: "Deep-dive sessions in Mathematics, Sciences, and Language Arts.",
      color: "bg-gray-200",
      icon: <BookOpen className="w-5 h-5" />,
    },
    {
      time: "10:00 AM",
      title: "Recess & Fellowship",
      desc: "A time to recharge, enjoy healthy snacks, and build friendships on the playground.",
      color: "bg-gray-200",
      icon: <Coffee className="w-5 h-5" />,
    },
    {
      time: "10:30 AM",
      title: "Academic Block II",
      desc: "Elective subjects including Social Studies, Technology, and Christian Education.",
      color: "bg-gray-200",
      icon: <FlaskConical className="w-5 h-5" />,
    },
    {
      time: "12:30 PM",
      title: "Lunch & Clubs",
      desc: "Communal lunch followed by student-led interest groups and library time.",
      color: "bg-gray-200",
      icon: <Utensils className="w-5 h-5" />,
    },
    {
      time: "02:30 PM",
      title: "Academic Block III",
      desc: "Project-based learning sessions, group discussions, and lab work.",
      color: "bg-gray-200",
    },
    {
      time: "03:30 PM",
      title: "Dismissal & Co-Curriculars",
      desc: "School concludes, transitioning into sports training, music rehearsals, and leadership programs.",
      color: "bg-[#9e1b66]",
      icon: <Bus className="w-5 h-5" />,
    },
  ],
  SMA: [
    {
      time: "07:15 AM",
      title: "Morning Devotion",
      desc: "Students lead worship and devotional sharing, building spiritual maturity and public speaking skills.",
      color: "bg-[#FFC627]",
      icon: <Sun className="w-5 h-5" />,
    },
    {
      time: "08:00 AM",
      title: "Academic Block I",
      desc: "Advanced sessions in core subjects — Mathematics, Natural Sciences, and Social Sciences.",
      color: "bg-gray-200",
      icon: <BookOpen className="w-5 h-5" />,
    },
    {
      time: "10:00 AM",
      title: "Break",
      desc: "Short break for refreshment and peer interaction between academic blocks.",
      color: "bg-gray-200",
      icon: <Coffee className="w-5 h-5" />,
    },
    {
      time: "10:30 AM",
      title: "Academic Block II",
      desc: "Electives and specialization subjects, including university preparation tracks.",
      color: "bg-gray-200",
      icon: <FlaskConical className="w-5 h-5" />,
    },
    {
      time: "12:30 PM",
      title: "Lunch & Self-Study",
      desc: "Lunch followed by structured self-study or tutoring sessions in the library.",
      color: "bg-gray-200",
      icon: <Utensils className="w-5 h-5" />,
    },
    {
      time: "02:00 PM",
      title: "Academic Block III / Electives",
      desc: "Deep project work, presentations, and elective courses tailored to individual pathways.",
      color: "bg-gray-200",
      icon: <BookMarked className="w-5 h-5" />,
    },
    {
      time: "04:00 PM",
      title: "Dismissal & Co-Curriculars",
      desc: "School concludes, with options for sports, student council, performing arts, or study hall.",
      color: "bg-[#9e1b66]",
      icon: <Bus className="w-5 h-5" />,
    },
  ],
};

const LEVELS: { key: Level; label: string }[] = [
  { key: "TK", label: "TK" },
  { key: "SD", label: "SD" },
  { key: "SMP", label: "SMP" },
  { key: "SMA", label: "SMA" },
];

export function DailySchedule() {
  const [active, setActive] = useState<Level>("SD");
  const schedule = SCHEDULES[active];

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
              Our schedule is designed to balance rigorous academics with spiritual enrichment and social connection. Every day starts with gratitude and ends with growth.
            </p>

            {/* Level filter — same pill style as gallery */}
            <div className="flex flex-wrap gap-2 mb-6">
              {LEVELS.map(({ key, label }) => (
                <button
                  key={key}
                  onClick={() => setActive(key)}
                  className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all active:scale-95 ${
                    active === key
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

        {/* Right: timeline */}
        <div className="md:w-2/3">
          <div className="space-y-0 relative border-l border-dashed border-gray-200 ml-4">
            {schedule.map((item, i) => (
              <div key={i} className={`relative pl-8 ${i < schedule.length - 1 ? "pb-10" : ""}`}>
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
        </div>

      </div>
    </div>
  );
}
