"use client";

import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from "@fullcalendar/interaction";

import { get } from 'http';

const INITIAL_VIEW = "dayGridMonth";
const LOCALE = "ja";

function getTodayDateType() {
  const today = new Date();
  return new Date(today.getFullYear(), today.getMonth(), today.getDate(), 0, 0, 0, 0);
}

// TODO: Props にする
const eventExample = [
  {
      title: "記録を見る",
      start: new Date("2024-02-03"),
      description: "記録を見る",
      backgroundColor: "red",
      borderColor: "red",
      url: "/health-monitoring/2-3"
  },
];

const Calendar = () => {
  return (
    <>
      <div className="w-3/4 mx-auto mt-16">
        <FullCalendar
          plugins={[dayGridPlugin, interactionPlugin]}
          initialView={INITIAL_VIEW}
          events={eventExample}
          locale={LOCALE}
        />
      </div>
    </>
  );
}

export default Calendar;