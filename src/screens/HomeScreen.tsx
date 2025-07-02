import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

type RootStackParamList = {
  Home: undefined;
  Profile: undefined;
};

type Props = NativeStackScreenProps<RootStackParamList, "Home">;

export default function HomeScreen({ navigation }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>👋 Welcome to My First React Native App</Text>
      <Text style={styles.subtitle}>Day 2 - Getting Started 🚀</Text>

      <Button title="Go to Profile" onPress={() => navigation.navigate("Profile")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#f8f8ff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 14,
  },
  subtitle: {
    fontSize: 16,
    color: "#666",
    marginBottom: 20,
  },
});
