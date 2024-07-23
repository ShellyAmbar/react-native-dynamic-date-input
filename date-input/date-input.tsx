import {View, Text, TextInput} from "react-native";
import React from "react";
import styles from "./date-input.styles";
import useDateInput from "./hooks/useDateInput";
import DateInputProps from "./interfaces";
const DateInput = ({
  onComplete,
  viewStyle,
  inputStyle,
  inputDayProps,
  inputMonthProps,
  inputYearProps,
  debounceDelay = 1000,
  defaultDate,
}: DateInputProps) => {
  const {
    day,
    month,
    year,
    dayRef,
    monthRef,
    yearRef,
    handleDayChange,
    handleMonthChange,
    handleYearChange,
  } = useDateInput({onComplete, debounceDelay, defaultDate});
  return (
    <View style={[styles.horizontal, {...viewStyle}]}>
      <TextInput
        ref={dayRef}
        value={day}
        onChangeText={handleDayChange}
        placeholder="Day"
        keyboardType="numeric"
        maxLength={2}
        style={[styles.input, {...inputStyle}]}
        {...inputDayProps}
      />
      <View style={styles.space} />
      <TextInput
        ref={monthRef}
        value={month}
        onChangeText={handleMonthChange}
        placeholder="Month"
        keyboardType="numeric"
        maxLength={2}
        style={[styles.input, {...inputStyle}]}
        {...inputMonthProps}
      />
      <View style={styles.space} />
      <TextInput
        ref={yearRef}
        value={year}
        onChangeText={handleYearChange}
        placeholder="Year"
        keyboardType="numeric"
        maxLength={4}
        style={[styles.input, {...inputStyle}]}
        {...inputYearProps}
      />
    </View>
  );
};

export default DateInput;
