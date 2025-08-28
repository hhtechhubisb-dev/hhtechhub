import React, { useState } from "react";

function Input({ type = "text", label }) {
  const [isFocused, setIsFocused] = useState(false);
  const [value, setValue] = useState("");

  const isFile = type === "file";

  return (
    <div className="relative w-full">
      {!isFile ? (
        <>
          <input
            type={type}
            value={value}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            onChange={(e) => setValue(e.target.value)}
            placeholder=" "
            className={`peer w-full p-2 pt-4 border rounded outline-none transition-all
              ${isFocused || value
                ? "border-orange-500 shadow-lg shadow-orange-200"
                : "border-gray-300"}`}
          />
          <label
            className={`absolute left-3 top-3 text-sm text-gray-500 transition-all 
              pointer-events-none bg-white px-1
              ${isFocused || value
                ? "text-orange-500 -top-2 text-xs"
                : "top-3"}`}
          >
            {label}
          </label>
        </>
      ) : (
        <>
          <input
            type="file"
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            className={`peer w-full rounded p-[11px] pr-2 file:mr-4 file:py-2 file:px-4
               file:border-0
              file:text-sm file:font-semibold
              file:bg-gray-200 file:text-gray-700
              file:hover:bg-gray-200
              border  outline-none transition-all
              ${isFocused ? "border rounded border-orange-500 shadow-lg shadow-orange-200" : "border-gray-300"}`}
          />
          <label className="block mt-1 text-sm text-gray-700">{label}</label>
        </>
      )}
    </div>
  );
}

export default Input;
