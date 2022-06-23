import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import superjson from "superjson";

const data = {
  createdAt: new Date(),
  id: 1,
  name: "nic cage",
  oscar: false,
};

const str = superjson.stringify(data);
const json = JSON.parse(str);

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text>superjson</Text>
      <Text>{JSON.stringify(json, null, 2)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
