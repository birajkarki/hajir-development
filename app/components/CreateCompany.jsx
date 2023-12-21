// CreateCompany.js
"use client";

import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import DynamicRadioButtons from "./DynamicRadioButtons";
import { format } from "date-fns";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

const staffCodeOptions = [
  { label: "k 1", value: "k" },
  { label: "Option 2", value: "option2" },
];

const dateSelectionOptions = [
  { label: "Date Option 1", value: "dateOption1" },
  { label: "Date Option 2", value: "dateOption2" },
];

const salaryCalculationOptions = [
  { label: "Salary Option 1", value: "salaryOption1" },
  { label: "Salary Option 2", value: "salaryOption2" },
];

const CreateCompany = () => {
  const [selectedStaffCode, setSelectedStaffCode] = useState(null);
  const [selectedDateSelection, setSelectedDateSelection] = useState(null);
  const [selectedSalaryCalculation, setSelectedSalaryCalculation] =
    useState(null);

  const [showGovernmentCalendar, setShowGovernmentCalendar] = useState(false);
  const [governmentSelectedDates, setGovernmentSelectedDates] = useState([]);

  const [showOfficialCalendar, setShowOfficialCalendar] = useState(false);
  const [officialSelectedDates, setOfficialSelectedDates] = useState([]);

  const handleGovernmentDateSelect = (date) => {
    if (!governmentSelectedDates.includes(date)) {
      setGovernmentSelectedDates([...governmentSelectedDates, date]);
    }
  };

  const handleGovernmentRemoveDate = (date) => {
    const updatedDates = governmentSelectedDates.filter((d) => d !== date);
    setGovernmentSelectedDates(updatedDates);
  };

  const handleOfficialDateSelect = (date) => {
    if (!officialSelectedDates.includes(date)) {
      setOfficialSelectedDates([...officialSelectedDates, date]);
    }
  };

  const handleOfficialRemoveDate = (date) => {
    const updatedDates = officialSelectedDates.filter((d) => d !== date);
    setOfficialSelectedDates(updatedDates);
  };

  return (
    <div>
      <div>
        <form action="" method="post">
          <Input label="Company Name" className="w-61" />

          <div className="space-y-4">
            <DynamicRadioButtons
              title="Staff Code"
              options={staffCodeOptions}
              onSelect={setSelectedStaffCode}
              containerClassName="ml-4 space-y-2"
              labelClassName="ml-4 text-lg"
            />
          </div>
          <p>Selected Staff Code: {selectedStaffCode}</p>

          <div className="space-y-4">
            <DynamicRadioButtons
              title="Date Selection"
              options={dateSelectionOptions}
              onSelect={setSelectedDateSelection}
              containerClassName="ml-4 space-y-2"
              labelClassName="ml-4 text-lg"
            />
          </div>
          <p>Selected Date Selection: {selectedDateSelection}</p>

          <div className="space-y-4">
            <DynamicRadioButtons
              title="Salary Calculation"
              options={salaryCalculationOptions}
              onSelect={setSelectedSalaryCalculation}
              containerClassName="ml-4 space-y-2"
              labelClassName="ml-4 text-lg"
            />
          </div>
          <p>Selected Salary Calculation: {selectedSalaryCalculation}</p>

          <div className="space-y-4">
            <h2 className="text-xl font-bold mb-2">Government Holidays</h2>
            <div className="flex items-center">
              <div className="relative w-48">
                <Input
                  label="Please Select"
                  value={governmentSelectedDates
                    .map((date) => format(date, "PP"))
                    .join(", ")}
                  readOnly
                />
                <span
                  role="img"
                  aria-label="calendar icon"
                  onClick={() =>
                    setShowGovernmentCalendar(!showGovernmentCalendar)
                  }
                  style={{
                    cursor: "pointer",
                    position: "absolute",
                    right: "8px",
                    top: "50%",
                    transform: "translateY(-50%)",
                  }}
                >
                  📅
                </span>
                {showGovernmentCalendar && (
                  <div className="fixed inset-0 flex items-center justify-center">
                    <div
                      className="absolute inset-0 bg-black opacity-50"
                      onClick={() => setShowGovernmentCalendar(false)}
                    ></div>
                    <div className="z-10 bg-white p-4 rounded-md">
                      <DayPicker
                        mode="single"
                        selected={governmentSelectedDates}
                        onSelect={handleGovernmentDateSelect}
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className="flex mt-2">
              {governmentSelectedDates.map((date) => (
                <div
                  key={date.toString()}
                  className="flex items-center bg-gray-200 p-2 rounded-md mr-2"
                >
                  <span>{format(date, "PP")}</span>
                  <span
                    role="img"
                    aria-label="cross icon"
                    onClick={() => handleGovernmentRemoveDate(date)}
                    style={{ cursor: "pointer", marginLeft: "4px" }}
                  >
                    ❌
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-bold mb-2">Official Holidays</h2>
            <div className="flex items-center">
              <div className="relative w-48">
                <Input
                  label="Please Select"
                  value={officialSelectedDates
                    .map((date) => format(date, "PP"))
                    .join(", ")}
                  readOnly
                />
                <span
                  role="img"
                  aria-label="calendar icon"
                  onClick={() => setShowOfficialCalendar(!showOfficialCalendar)}
                  style={{
                    cursor: "pointer",
                    position: "absolute",
                    right: "8px",
                    top: "50%",
                    transform: "translateY(-50%)",
                  }}
                >
                  📅
                </span>
                {showOfficialCalendar && (
                  <div className="fixed inset-0 flex items-center justify-center">
                    <div
                      className="absolute inset-0 bg-black opacity-50"
                      onClick={() => setShowOfficialCalendar(false)}
                    ></div>
                    <div className="z-10 bg-white p-4 rounded-md">
                      <DayPicker
                        mode="single"
                        selected={officialSelectedDates}
                        onSelect={handleOfficialDateSelect}
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className="flex mt-2">
              {officialSelectedDates.map((date) => (
                <div
                  key={date.toString()}
                  className="flex items-center bg-gray-200 p-2 rounded-md mr-2"
                >
                  <span>{format(date, "PP")}</span>
                  <span
                    role="img"
                    aria-label="cross icon"
                    onClick={() => handleOfficialRemoveDate(date)}
                    style={{ cursor: "pointer", marginLeft: "4px" }}
                  >
                    ❌
                  </span>
                </div>
              ))}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateCompany;
