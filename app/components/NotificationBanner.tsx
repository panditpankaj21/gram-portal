import React from "react";

const NotificationBanner: React.FC = () => {
  return (
    <div className="w-full bg-black/90 text-red-500 overflow-hidden">
      <div className="whitespace-nowrap animate-marquee py-1">
        <span className="mx-4 font-semibold">
          🔔 महत्त्वाची सूचना: २६ जानेवारी रोजी प्रजासत्ताक दिनानिमित्त सरकारी सेवा अनुपलब्ध राहतील.
        </span>
      </div>
    </div>
  );
};

export default NotificationBanner;
