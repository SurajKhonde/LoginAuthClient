import React, { createContext, useState } from "react";

export const OtpContext = createContext();

let timeoutId;
export default function OtpProvider({ children }) {
  const [Otp, setOtp] = useState("");
  const [classes, setClasses] = useState("");

  const OtpNotification = (type, value) => {
    if (timeoutId) clearTimeout(timeoutId);

    switch (type) {
      case "success":
        setClasses("bg-green-500");
        break;
      case "warning":
        setClasses("bg-orange-500");
        break;
      default:
        setClasses("bg-red-500");
    }
    setOtp(value);

    timeoutId = setTimeout(() => {
      setOtp("");
    }, 3000);
  };

  return (
    <OtpContext.Provider value={{OtpNotification}}>
      {children}
      {Otp && (
        <div className="fixed left-1/2 -translate-x-1/2 top-24 ">
          <div className="bounce-custom shadow-md shadow-gray-400 rounded">
            <p className={classes + " text-white px-4 py-2 font-semibold"}>
              {Otp}
            </p>
          </div>
        </div>
      )}
    </OtpContext.Provider>
  );
}
