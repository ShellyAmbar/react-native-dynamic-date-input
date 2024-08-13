import {TextInputProps, ViewStyle} from "react-native";

type DateInputProps = {
  onComplete: (date: string) => void;
  onWrongInput?: () => void;
  viewStyle?: ViewStyle;
  inputStyle?: ViewStyle;
  inputDayProps?: TextInputProps;
  inputMonthProps?: TextInputProps;
  inputYearProps?: TextInputProps;
  debounceDelay?: number;
  defaultDate?: string;
};
export default DateInputProps;
