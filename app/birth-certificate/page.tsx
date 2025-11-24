"use client";

import React, { useState } from "react";
import Input from "../components/ui/Input";
import Button from "../components/ui/Button";

interface BirthData {
  name: string;
  father_name: string;
  mother_name: string;
  date_of_birth: string;
  birth_place: string;
}

const BirthCertificateForm: React.FC = () => {
  const [formData, setFormData] = useState<BirthData>({
    name: "",
    father_name: "",
    mother_name: "",
    date_of_birth: "",
    birth_place: "",
  });

  const [birthCollection, setBirthCollection] = useState<BirthData[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setBirthCollection((prev) => [...prev, formData]);
    setFormData({
      name: "",
      father_name: "",
      mother_name: "",
      date_of_birth: "",
      birth_place: "",
    });
  };

  return (
    <div className="max-w-xl mx-auto px-4 py-6">
      <h2 className="text-2xl font-bold text-[#1C5FAF] mb-4 text-center">
        Birth Certificate Form
      </h2>

      <form onSubmit={handleSubmit} className="bg-white p-4 rounded-lg shadow-md">
        <Input label="Name" name="name" value={formData.name} onChange={handleChange} />
        <Input label="Father's Name" name="father_name" value={formData.father_name} onChange={handleChange} />
        <Input label="Mother's Name" name="mother_name" value={formData.mother_name} onChange={handleChange} />
        <Input label="Date of Birth" name="date_of_birth" type="date" value={formData.date_of_birth} onChange={handleChange} />
        <Input label="Birth Place" name="birth_place" value={formData.birth_place} onChange={handleChange} />
        <div className="mt-4 flex justify-center">
          <Button label="Submit" />
        </div>
      </form>

      {birthCollection.length > 0 && (
        <div className="mt-8">
          <h3 className="text-xl font-semibold text-[#1C5FAF] mb-4 text-center">
            Submitted Birth Records
          </h3>
          <div className="space-y-4">
            {birthCollection.map((entry, index) => (
              <div
                key={index}
                className="bg-blue-50 border border-blue-200 rounded-lg p-4 shadow-sm"
              >
                <p className="text-sm text-gray-600 mb-2">Record #{index + 1}</p>
                <ul className="space-y-1 text-gray-800 text-sm sm:text-base">
                  <li><strong>Name:</strong> {entry.name}</li>
                  <li><strong>Father's Name:</strong> {entry.father_name}</li>
                  <li><strong>Mother's Name:</strong> {entry.mother_name}</li>
                  <li><strong>Date of Birth:</strong> {entry.date_of_birth}</li>
                  <li><strong>Birth Place:</strong> {entry.birth_place}</li>
                </ul>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default BirthCertificateForm;
