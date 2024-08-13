type UseDateInputProps = {
  onComplete: (date: string) => void;
  onWrongInput?: () => void;
  debounceDelay?: number;
  defaultDate?: string;
};
export default UseDateInputProps;
