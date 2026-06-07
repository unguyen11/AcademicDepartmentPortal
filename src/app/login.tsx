// Login page

import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { router } from "expo-router";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";

export default function LoginScreen() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const login = async () => {
        try {
            await signInWithEmailAndPassword(
                auth,
                email,
                password
            );

            router.replace("/dashboard");
        } catch (error) {
            alert("Invalid email or password");
        }
    };

    return (
        <View
            style={{
                flex: 1,
                justifyContent: "center",
                padding: 20,
            }}
        >
            <View
                style={{
                    width: "100%",
                    maxWidth: 450,
                    alignSelf: "center",
                }}
            >
                <Text
                    style={{
                        fontSize: 28,
                        fontWeight: "bold",
                        marginBottom: 20,
                        textAlign: "center",
                    }}
                >
                    Academic Department Portal
                </Text>

                <TextInput
                    placeholder="Email"
                    value={email}
                    onChangeText={setEmail}
                    style={{
                        borderWidth: 1,
                        padding: 12,
                        marginBottom: 12,
                        borderRadius: 8,
                    }}
                />

                <TextInput
                    placeholder="Password"
                    secureTextEntry
                    value={password}
                    onChangeText={setPassword}
                    style={{
                        borderWidth: 1,
                        padding: 12,
                        marginBottom: 20,
                        borderRadius: 8,
                    }}
                />

                <TouchableOpacity
                    style={{
                        backgroundColor: "#2563eb",
                        padding: 15,
                        borderRadius: 8,
                    }}
                    onPress={login}
                >
                    <Text
                        style={{
                            color: "white",
                            textAlign: "center",
                            fontWeight: "bold",
                        }}
                    >
                        Login
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => router.push("/register")}
                >
                    <Text
                        style={{
                            textAlign: "center",
                            marginTop: 15,
                            color: "#2563eb",
                        }}
                    >
                        Create Account
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}