import React, {useEffect, useRef, useState} from "react";
import UseDateInputProps from "./interfaces";

const useDateInput = ({
  onComplete,
  onWrongInput,
  debounceDelay = 1000,
  defaultDate,
}: UseDateInputProps) => {
  const dayRef = useRef();
  const monthRef = useRef();
  const yearRef = useRef();
  const [day, setDay] = useState(defaultDate ? defaultDate?.slice(0, 2) : "");
  const [month, setMonth] = useState(
    defaultDate ? defaultDate?.slice(3, 5) : ""
  );
  const [year, setYear] = useState(
    defaultDate ? defaultDate?.slice(6, 11) : ""
  );
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
    dayRef.current?.focus();
  }, []);

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
      } else {
        onWrongInput && onWrongInput();
      }
      clearTimeout(timeout);
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
