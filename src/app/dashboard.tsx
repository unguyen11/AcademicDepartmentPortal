// Dashboard page

import { View, Text, TouchableOpacity } from "react-native";
import { router } from "expo-router";
import { signOut } from "firebase/auth";
import { db, auth } from "../../firebase";
import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";

export default function DashboardScreen() {
    const [fullName, setFullName] = useState("");
    // Logout user
    const logout = async () => {
        await signOut(auth);
        router.replace("/login");
    };

    // Load current user information
    useEffect(() => {
        const loadUser = async () => {

            if (!auth.currentUser) return;

            const userRef = doc(
                db,
                "users",
                auth.currentUser.uid
            );

            const userSnap = await getDoc(userRef);

            if (userSnap.exists()) {
                setFullName(userSnap.data().fullName);
            }
        };

        loadUser();
    }, []);

    return (
        <View
            style={{
                flex: 1,
                padding: 20,
            }}
        >
            <Text
                style={{
                    fontSize: 28,
                    fontWeight: "bold",
                    textAlign: "center",
                    marginBottom: 30,
                    marginTop: 40,
                }}
            >
                Academic Department Portal
            </Text>

            <Text
                style={{
                    textAlign: "center",
                    marginBottom: 20,
                    fontSize: 18,
                }}
            >
                Welcome, {fullName}
            </Text>

            <TouchableOpacity
                style={buttonStyle}
                onPress={() => router.push("/courses")}
            >
                <Text style={textStyle}>Courses</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={buttonStyle}
                onPress={() => router.push("/faculty")}
            >
                <Text style={textStyle}>Faculty Directory</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={buttonStyle}
                onPress={() => router.push("/resources")}
            >
                <Text style={textStyle}>Student Resources</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={{
                    backgroundColor: "#dc2626",
                    padding: 15,
                    borderRadius: 8,
                    marginTop: 20,
                }}
                onPress={logout}
            >
                <Text
                    style={{
                        color: "white",
                        textAlign: "center",
                        fontWeight: "bold",
                    }}
                >
                    Logout
                </Text>
            </TouchableOpacity>
        </View>
    );
}

const buttonStyle = {
    backgroundColor: "#2563eb",
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
};

const textStyle = {
    color: "white",
    textAlign: "center" as const,
    fontWeight: "bold" as const,
};