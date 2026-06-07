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
                backgroundColor: "#f5f5f5",
            }}
        >
            <Text
                style={{
                    fontSize: 28,
                    fontWeight: "bold",
                    textAlign: "center",
                    marginTop: 40,
                    marginBottom: 10,
                }}
            >
                Academic Department Portal
            </Text>

            <Text
                style={{
                    textAlign: "center",
                    fontSize: 18,
                    marginBottom: 5,
                }}
            >
                Welcome, {fullName}
            </Text>

            <Text
                style={{
                    textAlign: "center",
                    color: "gray",
                    marginBottom: 25,
                }}
            >
                Student Services Dashboard
            </Text>

            {/* First row */}
            <View
                style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    marginBottom: 15,
                }}
            >
                <DashboardCard
                    title="Courses"
                    onPress={() => router.push("/courses")}
                />

                <DashboardCard
                    title="Faculty"
                    onPress={() => router.push("/faculty")}
                />
            </View>

            {/* Second row */}
            <View
                style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    marginBottom: 15,
                }}
            >
                <DashboardCard
                    title="Resources"
                    onPress={() => router.push("/resources")}
                />

                <DashboardCard
                    title="Search"
                    onPress={() => router.push("/search")}
                />
            </View>

            {/* Third row */}
            <View
                style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    marginBottom: 15,
                }}
            >
                <DashboardCard
                    title="Announcements"
                    onPress={() => router.push("/announcements")}
                />

                <DashboardCard
                    title="Calendar"
                    onPress={() => router.push("/calendar")}
                />
            </View>

            <TouchableOpacity
                style={{
                    backgroundColor: "#dc2626",
                    padding: 15,
                    borderRadius: 10,
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

// Dashboard card component
function DashboardCard({
                           title,
                           onPress,
                       }: {
    title: string;
    onPress: () => void;
}) {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={{
                width: "48%",
                height: 110,
                backgroundColor: "white",
                borderRadius: 12,

                justifyContent: "center",
                alignItems: "center",

                shadowColor: "#000",
                shadowOffset: {
                    width: 0,
                    height: 2,
                },
                shadowOpacity: 0.1,
                shadowRadius: 4,

                elevation: 3,
            }}
        >
            <Text
                style={{
                    fontSize: 16,
                    fontWeight: "bold",
                    textAlign: "center",
                }}
            >
                {title}
            </Text>
        </TouchableOpacity>
    );
}