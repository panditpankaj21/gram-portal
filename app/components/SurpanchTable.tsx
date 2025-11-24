import React from "react";
import { records } from "../data/records";

const SurpanchTable: React.FC = () => {
  return (
    <div className="px-4 py-6">
      <h2 className="text-2xl font-bold text-[#1C5FAF] mb-6">
        Surpanch Records
      </h2>

      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-200 shadow-lg rounded-lg bg-white text-sm md:text-base">
          <thead className="bg-[#1C5FAF] text-white">
            <tr>
              <th scope="col" className="px-4 py-3 text-left font-semibold">
                S.No
              </th>
              <th scope="col" className="px-4 py-3 text-left font-semibold">
                Name
              </th>
              <th scope="col" className="px-4 py-3 text-left font-semibold">
                Designation
              </th>
              <th scope="col" className="px-4 py-3 text-left font-semibold">
                Mobile No.
              </th>
            </tr>
          </thead>
          <tbody>
            {records.map((record, idx) => (
              <tr
                key={record.id}
                className={`border-b transition-colors ${
                  idx % 2 === 0 ? "bg-gray-50" : "bg-white"
                } hover:bg-blue-50`}
              >
                <td className="px-4 py-3">{record.id}</td>
                <td className="px-4 py-3 font-medium text-gray-900">
                  {record.name}
                </td>
                <td className="px-4 py-3 text-gray-700">
                  {record.designation}
                </td>
                <td className="px-4 py-3 text-gray-800">{record.mobile}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SurpanchTable;
