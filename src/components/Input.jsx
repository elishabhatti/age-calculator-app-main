import React from "react";

export default function Input({
  inputError,
  inputValue,
  setInputValue,
  validError,
  InputPlaceholder,
  label,
}) {
  return (
    <div className="flex flex-col w-full md:w-1/4">
      <label
        className={`text-xs font-bold text-gray-600 uppercase tracking-wider ${
          inputError && "text-red-600"
        }`}
      >
        {label}
      </label>
      <input
        type="number"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder={InputPlaceholder}
        className={`border border-gray-300 font-bold  text-gray-700 p-2 mt-2 outline-black  rounded-md ${
          inputError && "border-red-600"
        } `}
      />
      {inputError && <p className="text-red-600 text-sm my-2">{inputError}</p>}
      {validError && <p className="text-red-600 text-sm my-2">{validError}</p>}
    </div>
  );
}
