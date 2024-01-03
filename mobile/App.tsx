import { StyleSheet, Text, View, StatusBar } from "react-native";

import SignIn from "./src/Pages/SignIn";

export default function App() {
  return (
    <View>
      <StatusBar
        backgroundColor="#1D1D2E"
        barStyle="light-content"
        translucent={false}
      />
      <SignIn/>
    </View>
  );
}
