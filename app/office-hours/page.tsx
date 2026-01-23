"use client";

export default function ScheduleUI() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-6xl bg-white rounded-xl shadow-lg overflow-hidden grid grid-cols-1 md:grid-cols-2">
        
        {/* LEFT PANEL */}
        <div className="p-10 border-r">
          <img
            src="https://www.ChatX.com/static/images/logo.svg"
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

          <ul className="list-disc list-inside text-sm text-gray-700">
            <li>Expert advice on integrating features</li>
          </ul>

          <button className="mt-10 text-sm text-blue-600 hover:underline">
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
            <button className="text-gray-400 hover:text-gray-600 text-xl">
              ‹
            </button>
            <span className="font-medium text-gray-800">
              January 2026
            </span>
            <button className="w-9 h-9 rounded-full bg-blue-600 text-white flex items-center justify-center">
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
            {Array.from({ length: 31 }).map((_, i) => {
              const day = i + 1;
              const activeDays = [26, 27, 28, 29, 30];

              return (
                <div
                  key={day}
                  className={`w-10 h-10 flex items-center justify-center rounded-full cursor-pointer
                    ${
                      activeDays.includes(day)
                        ? "bg-blue-100 text-blue-700 font-medium"
                        : "text-gray-600 hover:bg-gray-100"
                    }
                  `}
                >
                  {day}
                </div>
              );
            })}
          </div>

          {/* Time Zone */}
          <div className="mt-8 text-sm text-gray-600">
            <p className="font-medium mb-1">Time zone</p>
            <div className="flex items-center gap-2">
              🌐 Pakistan, Maldives Time (2:59am)
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
