// CreateCompany.js
"use client";

import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import DynamicRadioButtons from "./DynamicRadioButtons";
import { Button } from "@/components/ui/button";
// import { Checkbox } from "@/components/ui/checkbox";

import { format } from "date-fns";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
// import SickLeave from "./createcompany/SickLeave";

const staffCodeOptions = [
  { label: "Auto generated", value: "Auto generated" },
  { label: "Custom", value: "Custom" },
];

const dateSelectionOptions = [
  { label: "English", value: "English" },
  { label: "Nepali", value: "Nepali" },
];

const salaryCalculationOptions = [
  { label: "Calender Days", value: "Calender Days" },
  { label: "30 Days", value: "30 Days" },
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

  const [selectedSickLeave, setSelectedSickLeave] = useState("");
  const [selectedprobation, setSelectedprobation] = useState("");

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

  const handleSickLeaveSelect = (value) => {
    setSelectedSickLeave(value);
  };
  const handleProbation = (value) => {
    setSelectedProbation(value);
  };
  const Page = () => {
    const days = [
      {
        id: "sunday",
        label: "Sunday",
      },
      {
        id: "monday",
        label: "Monday",
      },
      {
        id: "tuesday",
        label: "Tuesday",
      },
      {
        id: "wednesday",
        label: "Wednesday",
      },
      {
        id: "thursday",
        label: "Thursday",
      },
      {
        id: "friday",
        label: "Friday",
      },
      {
        id: "saturday",
        label: "Saturday",
      },
    ];
    const NetworkOptions = [
      { label: "Any Network", value: "Any Network" },
      {
        label: "Private office IP [192.168.1.10]",
        value: "Private office IP [192.168.1.10]",
      },
    ];

    const [selectedDays, setSelectedDays] = useState([]);
    const [workingHours, setWorkingHours] = useState(480); // Default to 08:00 (8 hours * 60 minutes)
    const [selectedNetwork, setSelectedNetwork] = useState(null);

    const handleDayToggle = (dayId) => {
      if (selectedDays.includes(dayId)) {
        setSelectedDays(selectedDays.filter((day) => day !== dayId));
      } else {
        setSelectedDays([...selectedDays, dayId]);
      }
    };

    const handleDecreaseTime = () => {
      if (workingHours > 0) {
        setWorkingHours(workingHours - 10);
      }
    };

    const handleIncreaseTime = () => {
      setWorkingHours(workingHours + 10);
    };

    const formatTime = (minutes) => {
      const hours = Math.floor(minutes / 60);
      const mins = minutes % 60;
      return `${hours.toString().padStart(2, "0")}:${mins
        .toString()
        .padStart(2, "0")}`;
    };

    return (
      <div>
        <div>
          <form action="" method="post">
            <h2 className="text-xl font-bold mb-2">Company name</h2>

            <Input label="Company Name" className="w-61" />
            <div className="space-y-4">
              <h2 className="text-xl font-bold mb-2">Address</h2>

              <Input label="Address" className="w-61" />
            </div>
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
                    onClick={() =>
                      setShowOfficialCalendar(!showOfficialCalendar)
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
              {/* select sick allowed  */}
              <h2 className="text-xl font-bold mb-2">Sick Leave allowed</h2>
              <div className="flex">
                <Select>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Monthly" />
                  </SelectTrigger>
                  <SelectContent onSelect={handleSickLeaveSelect}>
                    <SelectItem value="Weekly">Weekly</SelectItem>
                    <SelectItem value="Monthly">Monthly</SelectItem>
                    <SelectItem value="Yearly">Yearly</SelectItem>
                  </SelectContent>
                  <Input className="w-[80px]" type="number" name="" id="" />
                </Select>
              </div>
              <p>Selected Sick Leave: {selectedSickLeave}</p>

              <Select>
                <h2 className="text-xl font-bold mb-2">Probation Period</h2>

                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Monthly" />
                </SelectTrigger>
                <SelectContent onSelect={handleSickLeaveSelect}>
                  <SelectItem value="Weekly">1 month</SelectItem>
                  <SelectItem value="Monthly">3 month</SelectItem>
                  <SelectItem value="Yearly">6 month</SelectItem>
                </SelectContent>
                <p>Selected Probation Period Leave: {setSelectedprobation}</p>
              </Select>
            </div>
            <div className="p-4 border rounded bg-gray-100">
              <div className="mb-4">
                <h2>Select Business Leave Days</h2>
              </div>

              {days.map((day) => (
                <div
                  key={day.id}
                  onClick={() => handleDayToggle(day.id)}
                  className={`flex flex-row items-start space-x-3 space-y-0 cursor-pointer p-2 rounded ${
                    selectedDays.includes(day.id)
                      ? "bg-blue-200 border border-blue-500"
                      : ""
                  }`}
                >
                  <span className="font-normal">{day.label}</span>
                </div>
              ))}

              <div className="mb-4 mt-8">
                <h2>Office Working Hours</h2>
                <div className="flex items-center space-x-3">
                  <button
                    onClick={handleDecreaseTime}
                    className="p-2 rounded bg-blue-200 cursor-pointer"
                  >
                    -
                  </button>
                  <div>{formatTime(workingHours)}</div>
                  <button
                    onClick={handleIncreaseTime}
                    className="p-2 rounded bg-blue-200 cursor-pointer"
                  >
                    +
                  </button>
                </div>
                {/* now need the radio button  */}
                <div className="space-y-4 flex flex-col">
                  <DynamicRadioButtons
                    title="Staff Code"
                    options={NetworkOptions}
                    onSelect={setSelectedNetwork}
                    containerClassName="ml-4 space-y-2"
                    labelClassName="ml-4 text-lg"
                  />
                </div>
                <p>Selected Staff Code: {selectedNetwork}</p>
                <Button className="bg-red-400">Add</Button>
              </div>

              <CreateCompany />
            </div>
          </form>
        </div>
      </div>
    );
  };
};

export default CreateCompany;
