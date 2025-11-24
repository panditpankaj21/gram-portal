"use client";

import React, { useState } from "react";
import Input from "../components/ui/Input";
import Button from "../components/ui/Button";

interface MarriageData {
  bride_name: string;
  wife_name: string;
  date_of_marriage: string;
  place: string;
}

const MarriageCertificateForm: React.FC = () => {
  const [formData, setFormData] = useState<MarriageData>({
    bride_name: "",
    wife_name: "",
    date_of_marriage: "",
    place: "",
  });

  const [marriageCollection, setMarriageCollection] = useState<MarriageData[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setMarriageCollection((prev) => [...prev, formData]);
    setFormData({
      bride_name: "",
      wife_name: "",
      date_of_marriage: "",
      place: "",
    });
  };

  return (
    <div className="max-w-xl mx-auto px-4 py-6">
      <h2 className="text-2xl font-bold text-[#1C5FAF] mb-4 text-center">
        Marriage Certificate Form
      </h2>

      <form onSubmit={handleSubmit} className="bg-white p-4 rounded-lg shadow-md">
        <Input label="Bride Name" name="bride_name" value={formData.bride_name} onChange={handleChange} />
        <Input label="Wife Name" name="wife_name" value={formData.wife_name} onChange={handleChange} />
        <Input label="Date of Marriage" name="date_of_marriage" type="date" value={formData.date_of_marriage} onChange={handleChange} />
        <Input label="Place" name="place" value={formData.place} onChange={handleChange} />
        <div className="mt-4 flex justify-center">
          <Button label="Submit" />
        </div>
      </form>

      {marriageCollection.length > 0 && (
        <div className="mt-8">
          <h3 className="text-xl font-semibold text-[#1C5FAF] mb-4 text-center">
            Submitted Marriage Records
          </h3>
          <div className="space-y-4">
            {marriageCollection.map((entry, index) => (
              <div
                key={index}
                className="bg-blue-50 border border-blue-200 rounded-lg p-4 shadow-sm"
              >
                <p className="text-sm text-gray-600 mb-2">Record #{index + 1}</p>
                <ul className="space-y-1 text-gray-800 text-sm sm:text-base">
                  <li><strong>Bride Name:</strong> {entry.bride_name}</li>
                  <li><strong>Wife Name:</strong> {entry.wife_name}</li>
                  <li><strong>Date of Marriage:</strong> {entry.date_of_marriage}</li>
                  <li><strong>Place:</strong> {entry.place}</li>
                </ul>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default MarriageCertificateForm;
