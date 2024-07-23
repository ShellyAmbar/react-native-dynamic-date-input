import {StyleSheet} from "react-native";
const styles = StyleSheet.create({
  horizontal: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  text: {
    color: "#000",
    fontSize: 22,
  },
  input: {
    borderBottomWidth: 1,
    borderColor: "#000",
    padding: 10,
    fontSize: 22,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  space: {
    width: 12,
  },
});

export default styles;
