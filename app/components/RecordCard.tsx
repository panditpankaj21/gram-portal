import React from "react";

interface RecordCardProps {
  title: string; // e.g. "Death Record", "Birth Record"
  index: number;
  fields: { label: string; value: string }[];
}

const RecordCard: React.FC<RecordCardProps> = ({ title, index, fields }) => {
  return (
    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 shadow-sm">
      <p className="text-sm text-gray-600 mb-2">
        {title} #{index + 1}
      </p>
      <ul className="space-y-1 text-gray-800 text-sm sm:text-base">
        {fields.map((field, i) => (
          <li key={i}>
            <strong>{field.label}:</strong> {field.value}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecordCard;
