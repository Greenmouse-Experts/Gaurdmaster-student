import React, { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

const TextInput = ({
  label,
  type,
  placeholder,
  value,
  onChange,
  inputClass,
  altClass,
  disabled
}) => {
    const [isPasswordType, setIsPasswordType] = useState(false);
    const [inputType, setInputType] = useState(type);
    const togglePassword = (state) => {
      setIsPasswordType(state);
      setInputType(!state ? 'password' : 'text');
    };
  
  return (
    <div className={altClass || ""}>
      <p className="font-medium">{label}</p>
      <div className='flex items-center border border-gray-400 bg-white  mt-1 rounded-[4px]'>
        <input
          type={inputType}
          name={label}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          disabled={disabled}
          className={inputClass || "p-2 rounded-l-[4px] w-full"}
        />
         {type === 'password' && (
          <div onClick={() => togglePassword(!isPasswordType)} className="px-3">
            {!isPasswordType ? (
              <FaRegEyeSlash className="text-xl text-black" />
            ) : (
              <FaRegEye className="text-xl text-black" />
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default TextInput;
