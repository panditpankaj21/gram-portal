import React from "react";

const NotificationBanner: React.FC = () => {
  return (
    <div className="w-full bg-[#1C5FAF] text-white overflow-hidden">
      <div className="whitespace-nowrap animate-marquee py-2">
        <span className="mx-4 font-semibold">
          🔔 Important Notification: Government services will be unavailable on 26th January due to Republic Day.
        </span>
      </div>
    </div>
  );
};

export default NotificationBanner;
