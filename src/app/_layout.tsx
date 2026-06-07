// Main app layout

import { Stack } from "expo-router";

export default function RootLayout() {
    return (
        <Stack>
            <Stack.Screen
                name="login"
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="register"
                options={{ title: "Register" }}
            />

            <Stack.Screen
                name="dashboard"
                options={{ title: "Dashboard" }}
            />

            <Stack.Screen
                name="announcements"
                options={{ title: "Announcements" }}
            />

            <Stack.Screen
                name="search"
                options={{ title: "Search" }}
            />

            <Stack.Screen
                name="courses"
                options={{ title: "Courses" }}
            />

            <Stack.Screen
                name="faculty"
                options={{ title: "Faculty Directory" }}
            />

            <Stack.Screen
                name="resources"
                options={{ title: "Resources" }}
            />

            <Stack.Screen
                name="calendar"
                options={{ title: "Academic Calendar" }}
            />
        </Stack>
    );
}