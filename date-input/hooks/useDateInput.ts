import React, {useEffect, useRef, useState} from "react";
import UseDateInputProps from "./interfaces";

const useDateInput = ({
  onComplete,
  debounceDelay = 1000,
}: UseDateInputProps) => {
  const dayRef = useRef();
  const monthRef = useRef();
  const yearRef = useRef();
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const handleDayChange = (text) => {
    setDay(text);
    if (text.length === 2 && Number(text) > 0 && Number(text) < 32) {
      monthRef.current.focus();
    }
  };
  const handleMonthChange = (text) => {
    setMonth(text);
    if (text.length === 2 && Number(text) > 0 && Number(text) < 13) {
      yearRef.current.focus();
    }
  };
  const handleYearChange = (text) => {
    setYear(text);
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (
        year.length === 4 &&
        Number(month) > 0 &&
        Number(month) < 13 &&
        Number(day) > 0 &&
        Number(day) < 32
      ) {
        onComplete(`${day}/${month}/${year}`);
        clearTimeout(timeout);
      }
    }, debounceDelay);

    return () => {
      clearTimeout(timeout);
    };
  }, [day, month, year]);

  return {
    day,
    month,
    year,
    dayRef,
    monthRef,
    yearRef,
    handleDayChange,
    handleMonthChange,
    handleYearChange,
  };
};

export default useDateInput;
