"use client";

import { useState } from 'react';

export default function ScheduleUI() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  
  const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];
  
  const getDaysInMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  };
  
  const getFirstDayOfMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  };
  
  const previousMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1));
  };
  
  const nextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1));
  };
  
  const selectDate = (day: number) => {
    const newDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
    setSelectedDate(newDate);
  };
  
  const isToday = (day: number) => {
    const today = new Date();
    return day === today.getDate() && 
           currentDate.getMonth() === today.getMonth() && 
           currentDate.getFullYear() === today.getFullYear();
  };
  
  const isSelected = (day: number) => {
    return selectedDate && 
           day === selectedDate.getDate() && 
           currentDate.getMonth() === selectedDate.getMonth() && 
           currentDate.getFullYear() === selectedDate.getFullYear();
  };
  
  const isPastDate = (day: number) => {
    const dateToCheck = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return dateToCheck < today;
  };
  
  const daysInMonth = getDaysInMonth(currentDate);
  const firstDay = getFirstDayOfMonth(currentDate);
  const activeDays = [26, 27, 28, 29, 30];
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-6xl bg-white rounded-xl shadow-lg overflow-hidden grid grid-cols-1 md:grid-cols-2">
        
      {/* LEFT PANEL */}
<div className="h-[80vh] overflow-y-auto p-10 border-r scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
  
  <img
    src="/images/1.png"
    alt="ChatX"
    className="h-8 mb-8"
  />

  <p className="text-sm text-gray-500 mb-2">ChatX</p>

  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
    ChatX - Solutions<br />Engineering Office Hours
  </h2>

  <div className="flex items-center text-sm text-gray-600 mb-3">
    <span className="mr-2">🕒</span> 30 min
  </div>

  <div className="flex items-center text-sm text-gray-600 mb-6">
    <span className="mr-2">📹</span>
    Web conferencing details provided upon confirmation.
  </div>

  <p className="text-sm text-gray-700 mb-3">
    Join the Solutions Engineering Office Hours for:
  </p>

  <ul className="list-disc list-inside text-sm text-gray-700 space-y-2 mb-6">
    <li>Expert advice on integrating features</li>
    <li>Guidance on potential for your use-cases</li>
    <li>Insights on how similar businesses are implementing chat</li>
  </ul>

  <p className="text-sm text-gray-600 mb-8">
    <strong>Note:</strong> We apologize, but we are unable to troubleshoot bugs
    and errors during Office Hours! Create a support ticket{" "}
    <a href="#" className="text-blue-600 hover:underline">
      here
    </a>{" "}
    if you need technical help.
  </p>

  <button className="text-sm text-blue-600 hover:underline">
    Cookie settings
  </button>
</div>


        {/* RIGHT PANEL */}
        <div className="p-10">
          <h3 className="text-xl font-semibold text-gray-900 mb-6">
            Select a Date & Time
          </h3>

          {/* Month Selector */}
          <div className="flex items-center justify-between mb-4">
            <button 
              onClick={previousMonth}
              className="text-gray-400 hover:text-gray-600 text-xl transition-colors"
            >
              ‹
            </button>
            <span className="font-medium text-gray-800">
              {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
            </span>
            <button 
              onClick={nextMonth}
              className="w-9 h-9 rounded-full bg-blue-600 text-white flex items-center justify-center hover:bg-blue-700 transition-colors"
            >
              ›
            </button>
          </div>

          {/* Week Days */}
          <div className="grid grid-cols-7 text-xs text-gray-500 mb-2 text-center">
            {["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"].map(day => (
              <div key={day}>{day}</div>
            ))}
          </div>

          {/* Calendar Days */}
          <div className="grid grid-cols-7 gap-2 text-center text-sm">
            {/* Empty cells for days before month starts */}
            {Array.from({ length: (firstDay === 0 ? 6 : firstDay - 1) }).map((_, i) => (
              <div key={`empty-${i}`} className="w-10 h-10"></div>
            ))}
            
            {/* Actual days of the month */}
            {Array.from({ length: daysInMonth }).map((_, i) => {
              const day = i + 1;
              const isActive = activeDays.includes(day);
              const today = isToday(day);
              const selected = isSelected(day);
              const past = isPastDate(day);

              return (
                <div
                  key={day}
                  onClick={() => !past && selectDate(day)}
                  className={`w-10 h-10 flex items-center justify-center rounded-full cursor-pointer transition-all
                    ${
                      selected
                        ? "bg-blue-600 text-white font-medium"
                        : isActive
                        ? "bg-blue-100 text-blue-700 font-medium hover:bg-blue-200"
                        : today
                        ? "bg-gray-100 text-gray-900 font-medium border border-blue-300"
                        : past
                        ? "text-gray-300 cursor-not-allowed"
                        : "text-gray-600 hover:bg-gray-100"
                    }
                  `}
                >
                  {day}
                </div>
              );
            })}
          </div>

          {/* Selected Date Display */}
          {selectedDate && (
            <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
              <p className="text-sm font-medium text-blue-900">
                Selected: {selectedDate.toLocaleDateString('en-US', { 
                  weekday: 'long', 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </p>
            </div>
          )}

          {/* Time Zone */}
          <div className="mt-8 text-sm text-gray-600">
            <p className="font-medium mb-1">Time zone</p>
            <div className="flex items-center gap-2">
              🌐 Pakistan, Islamabad Time (4pm)
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
