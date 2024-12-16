import React from "react";

export default function Result({label, lableName}) {
  return (
    <p className="text-3xl sm:text-4xl md:text-7xl italic font-extrabold text-gray-800">
      <span className="text-[#864CFF]">{lableName} </span>{label}
    </p>
  );
}
