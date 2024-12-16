import React, { useState } from "react";
import Input from "./components/Input";
import Result from "./components/Result";

export default function App() {
  const [day, setDay] = useState("--");
  const [month, setMoths] = useState("--");
  const [year, setYear] = useState("--");

  const [dayInput, setDayInput] = useState("");
  const [monthInput, setmonthInput] = useState("");
  const [yearInput, setYearInput] = useState("");

  const [allInputError, setAllInputError] = useState("");
  const [validDate, setValidDate] = useState("");
  const [validMonth, setValidMonth] = useState("");
  const [validYear, setValidYear] = useState("");

  let handleAgeCalc = () => {
    let date = new Date();
    let currentDate = date.getDate();
    let currentMonth = date.getMonth() + 1;
    let currentYear = date.getFullYear();

    if (!dayInput && !monthInput && !yearInput) {
      setAllInputError("This field in required");
      setValidDate("");
      return;
    }
    if (dayInput >= 31) {
      setValidDate("Enter a Valid Date");
      setAllInputError("");
      setValidMonth("");
      setValidYear("");
      return;
    }
    if (monthInput >= 13) {
      setValidMonth("Enter a Valid Month");
      setAllInputError("");
      setValidDate("");
      setValidYear("");
      return;
    }
    if (yearInput >= currentYear) {
      setValidYear("Enter a Valid Year");
      setAllInputError("");
      setValidDate("");
      setValidMonth("");
      return;
    } else {
      setDay(currentDate - dayInput);
      setMoths(currentMonth - monthInput);
      setYear(currentYear - yearInput);

      setDayInput("");
      setmonthInput("");
      setYearInput("");
      setAllInputError("");
      setValidDate("");
      setValidMonth("");
      setValidYear("");
    }
  };

  return (
    <div className="container flex justify-center items-center  min-h-screen p-4">
      <div className="age-container bg-white w-full max-w-md md:max-w-lg lg:max-w-xl p-6 md:p-10 rounded-lg shadow-sm">
        {/* Input Section */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-6  mb-4">
          <Input
            inputError={allInputError}
            inputValue={dayInput}
            label="Day"
            InputPlaceholder="DD"
            setInputValue={setDayInput}
            validError={validDate}
            />
          <Input
            inputError={allInputError}
            inputValue={monthInput}
            label="Month"
            InputPlaceholder="MM"
            setInputValue={setmonthInput}
            validError={validMonth}
            />
          <Input
            inputError={allInputError}
            inputValue={yearInput}
            label="Year"
            InputPlaceholder="YYYY"
            setInputValue={setYearInput}
            validError={validYear}
            />
        </div>

        {/* Divider */}
        <div className="flex justify-center items-center mb-6">
          <div className="border-t flex-1 border-gray-300"></div>
          <button
            onClick={handleAgeCalc}
            className="bg-purple-600 p-4 sm:p-5 hover:bg-black rounded-full"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="46"
              height="44"
              viewBox="0 0 46 44"
            >
              <g fill="none" stroke="#FFF" strokeWidth="2">
                <path d="M1 22.019C8.333 21.686 23 25.616 23 44M23 44V0M45 22.019C37.667 21.686 23 25.616 23 44" />
              </g>
            </svg>
          </button>
          <div className="border-t flex-1 border-gray-300 block sm:hidden"></div>
        </div>

        {/* Result Section */}
        <div className="result-section flex flex-col items-start space-y-2">
          <Result lableName={year} label="year" />
          <Result lableName={month} label="months" />
          <Result lableName={day} label="days" />
        </div>
      </div>
    </div>
  );
}
