// Dashboard page

import { View, Text, TouchableOpacity } from "react-native";
import { router } from "expo-router";

export default function DashboardScreen() {
    return (
        <View
            style={{
                flex: 1,
                padding: 20,
                justifyContent: "center",
            }}
        >
            <Text
                style={{
                    fontSize: 28,
                    fontWeight: "bold",
                    marginBottom: 30,
                    textAlign: "center",
                }}
            >
                Dashboard
            </Text>

            <TouchableOpacity
                style={{
                    backgroundColor: "#2563eb",
                    padding: 15,
                    borderRadius: 8,
                    marginBottom: 10,
                }}
                onPress={() => router.push("/courses")}
            >
                <Text style={{ color: "white", textAlign: "center" }}>
                    Courses
                </Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={{
                    backgroundColor: "#2563eb",
                    padding: 15,
                    borderRadius: 8,
                    marginBottom: 10,
                }}
                onPress={() => router.push("/faculty")}
            >
                <Text style={{ color: "white", textAlign: "center" }}>
                    Faculty Directory
                </Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={{
                    backgroundColor: "#2563eb",
                    padding: 15,
                    borderRadius: 8,
                }}
                onPress={() => router.push("/resources")}
            >
                <Text style={{ color: "white", textAlign: "center" }}>
                    Student Resources
                </Text>
            </TouchableOpacity>
        </View>
    );
}