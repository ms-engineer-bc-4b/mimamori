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
      title: "アプリお披露目会",
      start: new Date(),
      end: new Date(),
      description: "現時点でできている部分のアプリを報告",
      backgroundColor: "red",
      borderColor: "red"
  },
  {
      title: "発表準備",
      start: new Date().setDate(new Date().getDate() + 3),
      end: new Date().setDate(new Date().getDate() + 9),
      description: "2年最後の期末テスト",
      backgroundColor: "blue",
      borderColor: "blue"
  }
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