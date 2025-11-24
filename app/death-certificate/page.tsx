"use client";

import React, { useState } from "react";
import Input from "../components/ui/Input";
import Button from "../components/ui/Button";
import RecordCard from "../components/RecordCard";

interface DeathData {
  name: string;
  father_name: string;
  mother_name: string;
  date_of_death: string;
  death_place: string;
  cause_of_death: string;
}

const DeathCertificateForm: React.FC = () => {
  const [formData, setFormData] = useState<DeathData>({
    name: "",
    father_name: "",
    mother_name: "",
    date_of_death: "",
    death_place: "",
    cause_of_death: "",
  });

  const [deathCollection, setDeathCollection] = useState<DeathData[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setDeathCollection((prev) => [...prev, formData]);
    setFormData({
      name: "",
      father_name: "",
      mother_name: "",
      date_of_death: "",
      death_place: "",
      cause_of_death: "",
    });
  };

  return (
    <div className="max-w-xl mx-auto px-4 py-6">
      <h2 className="text-2xl font-bold text-[#1C5FAF] mb-4 text-center">
        Death Certificate Form
      </h2>

      <form onSubmit={handleSubmit} className="bg-white p-4 rounded-lg shadow-md">
        <Input label="Name" name="name" value={formData.name} onChange={handleChange} />
        <Input label="Father's Name" name="father_name" value={formData.father_name} onChange={handleChange} />
        <Input label="Mother's Name" name="mother_name" value={formData.mother_name} onChange={handleChange} />
        <Input label="Date of Death" name="date_of_death" type="date" value={formData.date_of_death} onChange={handleChange} />
        <Input label="Death Place" name="death_place" value={formData.death_place} onChange={handleChange} />
        <Input label="Cause of Death" name="cause_of_death" value={formData.cause_of_death} onChange={handleChange} />
        <div className="mt-4 flex justify-center">
          <Button label="Submit" />
        </div>
      </form>

      {deathCollection.length > 0 && (
        <div className="mt-8">
          <h3 className="text-xl font-semibold text-[#1C5FAF] mb-4 text-center">
            Submitted Death Records
          </h3>
          <div className="space-y-4">
            {deathCollection.map((entry, index) => (
                <RecordCard
                    key={index}
                    title="Death Record"
                    index={index}
                    fields={[
                    { label: "Name", value: entry.name },
                    { label: "Father's Name", value: entry.father_name },
                    { label: "Mother's Name", value: entry.mother_name },
                    { label: "Date of Death", value: entry.date_of_death },
                    { label: "Death Place", value: entry.death_place },
                    { label: "Cause of Death", value: entry.cause_of_death },
                    ]}
                />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default DeathCertificateForm;
