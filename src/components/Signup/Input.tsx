"use client";

import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

interface Props {
  className: string;
  placeholder: string;
  type: string;
  id: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
  valid: string | boolean | undefined;
  error: string | undefined;
}

const Input: React.FC<Props> = ({
  className,
  type,
  id,
  value,
  onChange,
  onBlur,
  valid,
  error,
  placeholder,
}) => {
  const [visible, setVisible] = useState(false);

  if (type == "email" || type == "text") {
    return (
      <div className={className}>
        <input
          type="text"
          id={id}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          placeholder={placeholder}
          className={`border-2 w-full rounded-full py-2 px-4 outline-none duration-300 ${
            valid
              ? "border-[#ff4a4a] focus:border-[#ff4a4a] hover:border-[#ff4a4a] caret-[#ff4a4a]"
              : "border-gray-300 focus:border-[#2f834f] hover:border-[#2f834f] caret-[#71c381]"
          }`}
        />
        {valid && <p className="text-[12px] ml-2 text-[#ff4a4a]">{error}</p>}
      </div>
    );
  }

  if (type == "password") {
    return (
      <div className={`${className} relative`}>
        <input
          type={visible ? "text" : "password"}
          id={id}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          placeholder={placeholder}
          className={`flex border-2 w-full rounded-full py-2 px-4 outline-none duration-300 ${
            valid
              ? "border-[#ff4a4a] focus:border-[#ff4a4a] hover:border-[#ff4a4a] caret-[#ff4a4a]"
              : "border-gray-300 focus:border-[#2f834f] hover:border-[#2f834f] caret-[#71c381]"
          }`}
        />
        {visible ? (
          <AiOutlineEye
            className="absolute right-3 top-3 cursor-pointer text-gray-500"
            size={20}
            onClick={() => setVisible(false)}
          />
        ) : (
          <AiOutlineEyeInvisible
            className="absolute right-3 top-3 cursor-pointer text-gray-500"
            size={20}
            onClick={() => setVisible(true)}
          />
        )}
        {valid && <p className="text-[12px] ml-2 text-[#ff4a4a]">{error}</p>}
      </div>
    );
  }
};

export default Input;
