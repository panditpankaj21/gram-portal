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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

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
    <div className="max-w-2xl mx-auto px-4 py-8">
      {/* Header */}
      <h2 className="text-3xl font-bold text-center text-[#0B5AA3] mb-6 tracking-wide">
        जन्म प्रमाणपत्र फॉर्म<br />
        <span className="text-lg text-gray-600">
          Birth Certificate Application
        </span>
      </h2>

      {/* Form Card */}
      <form
        onSubmit={handleSubmit}
        className="bg-white border border-gray-200 p-6 rounded-xl shadow-lg shadow-blue-50"
      >
        <div className="grid grid-cols-1 gap-4">
          <Input
            label="Child's Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          <Input
            label="Father's Name"
            name="father_name"
            value={formData.father_name}
            onChange={handleChange}
          />
          <Input
            label="Mother's Name"
            name="mother_name"
            value={formData.mother_name}
            onChange={handleChange}
          />
          <Input
            label="Date of Birth"
            name="date_of_birth"
            type="date"
            value={formData.date_of_birth}
            onChange={handleChange}
          />
          <Input
            label="Place of Birth"
            name="birth_place"
            value={formData.birth_place}
            onChange={handleChange}
          />
        </div>

        <div className="mt-6 flex justify-center">
          <Button label="Submit Application" />
        </div>
      </form>

      {/* Submitted Records Section */}
      {birthCollection.length > 0 && (
        <div className="mt-12">
          <h3 className="text-2xl font-semibold text-center text-[#0B5AA3] mb-6">
            Submitted Birth Records
          </h3>

          <div className="space-y-5">
            {birthCollection.map((entry, index) => (
              <div
                key={index}
                className="bg-[#F1F5FB] border-l-4 border-[#0B5AA3] rounded-lg p-5 shadow-sm"
              >
                <p className="text-sm text-gray-500 mb-2 font-medium">
                  Record #{index + 1}
                </p>
                <ul className="space-y-1 text-gray-800 text-base">
                  <li><strong>Child Name:</strong> {entry.name}</li>
                  <li><strong>Father's Name:</strong> {entry.father_name}</li>
                  <li><strong>Mother's Name:</strong> {entry.mother_name}</li>
                  <li><strong>Date of Birth:</strong> {entry.date_of_birth}</li>
                  <li><strong>Place of Birth:</strong> {entry.birth_place}</li>
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
