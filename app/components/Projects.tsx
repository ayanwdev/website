"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import Card from "./Card";

const rawCards = [
  {
    title: "Nami",
    subtitle: "Self-hosted media server",
    github: "#",
    website: "#",
    color: "#a855f7",
  },
  {
    title: "FocusFlow",
    subtitle: "Study Tracker & Planner",
    github: "#",
    website: "#",
    color: "#ec4899",
  },
  {
    title: "Lumis",
    subtitle: "Reading Tracker",
    github: "#",
    website: "#",
    color: "#10b981",
  },
  {
    title: "TaskHero",
    subtitle: "Daily Task Manager",
    github: "#",
    website: "#",
    color: "#f59e0b",
  },
  {
    title: "MindNotes",
    subtitle: "Minimal Note App",
    github: "#",
    website: "#",
    color: "#3b82f6",
  },
];

const CARD_WIDTH = 300;
const GAP = 24; // gap-x-6 = 1.5rem = 24px
const VISIBLE_COUNT = 3;

export default function Carousel() {
  const [index, setIndex] = useState(0);

  const maxIndex = rawCards.length - VISIBLE_COUNT;
  const offset = -(index * (CARD_WIDTH + GAP));

  const next = () => {
    if (index < maxIndex) {
      setIndex(index + 1);
    }
  };

  const prev = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };

  return (
    <div className="relative w-full max-w-7xl mx-auto px-4 py-8 overflow-hidden">
      {/* Navigation Buttons */}
      <button
        onClick={prev}
        disabled={index === 0}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-blue-600 text-white rounded-full p-2 hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <ChevronLeft />
      </button>
      <button
        onClick={next}
        disabled={index === maxIndex}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-blue-600 text-white rounded-full p-2 hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <ChevronRight />
      </button>

      {/* Carousel Track */}
      <div className="overflow-hidden">
        <div
          className="flex gap-x-6 transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(${offset}px)`,
            width: rawCards.length * (CARD_WIDTH + GAP),
          }}
        >
          {rawCards.map((card, i) => (
            <div key={i} className="flex-shrink-0 w-[300px]">
              <Card {...card} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
