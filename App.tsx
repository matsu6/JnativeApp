import React from "react"
import { View, Text, StyleSheet } from "react-native"
import { Sample } from "./src/components/Sample"
const App = () => {
  return (
    // <View style={styles.container}>
    //   <Text>Hello World</Text>
    // </View>
    <Sample />
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
})
export default App
