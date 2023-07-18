
"use client"
import Link from "next/link";
import React, { useEffect, useState, useCallback } from "react";
import { useTheme } from "next-themes";
import Image from "next/image";

const ThemeButton = () => {
  const { theme, setTheme } = useTheme();
  const [isLightTheme, setIsLightTheme] = useState(theme === "light");

  useEffect(() => {
    setIsLightTheme(theme === "light");
  }, [theme]);

  const toggleTheme = () => {
    setTheme(isLightTheme ? "dark" : "light");
  };

  return (
    <div className="z-50 flex items-center">
      <button className="flex items-center justify-center lg:w-16 md:w-[4.5rem] w-5" onClick={toggleTheme}>
        {isLightTheme ? (
          <Image
            width={20}
            height={20}
            alt='copyicon'
            className='ml-2 '
            src='/images/moonicon.svg'
          />
        ) : (
          <Image
            width={20}
            height={20}
            alt='sunicon'
            className=''
            src='/images/sunicon.svg'
          />
        )}
      </button>
    </div>
  );
};

export default ThemeButton;
