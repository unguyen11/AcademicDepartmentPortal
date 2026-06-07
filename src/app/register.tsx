// Register page

import { useState } from "react";
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Alert,
} from "react-native";
import { router } from "expo-router";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../../firebase";

export default function RegisterScreen() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [fullName, setFullName] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

// Create new user
    const register = async () => {

        if (password !== confirmPassword) {
            Alert.alert("Error", "Passwords do not match");
            return;
        }

        try {
            const userCredential =
                await createUserWithEmailAndPassword(
                    auth,
                    email,
                    password
                );

            await setDoc(
                doc(db, "users", userCredential.user.uid),
                {
                    fullName,
                    email,
                    role: "student",
                }
            );

            Alert.alert("Success", "Account created successfully");
            router.replace("/login");
        } catch (error: any) {
            Alert.alert("Registration Failed", error.message);
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
                        textAlign: "center",
                        marginBottom: 20,
                    }}
                >
                    Academic Department Portal
                </Text>

                <Text
                    style={{
                        textAlign: "center",
                        marginBottom: 20,
                        color: "gray",
                    }}
                >
                    Create your student account
                </Text>

                <TextInput
                    placeholder="Full Name"
                    value={fullName}
                    onChangeText={setFullName}
                    style={{
                        borderWidth: 1,
                        padding: 12,
                        marginBottom: 12,
                        borderRadius: 8,
                    }}
                />

                <TextInput
                    placeholder="Email"
                    value={email}
                    onChangeText={setEmail}
                    autoCapitalize="none"
                    style={{
                        borderWidth: 1,
                        padding: 12,
                        marginBottom: 12,
                        borderRadius: 8,
                    }}
                />

                <TextInput
                    placeholder="Password"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry
                    style={{
                        borderWidth: 1,
                        padding: 12,
                        marginBottom: 20,
                        borderRadius: 8,
                    }}
                />

                <TextInput
                    placeholder="Confirm Password"
                    value={confirmPassword}
                    onChangeText={setConfirmPassword}
                    secureTextEntry
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
                    onPress={register}
                >
                    <Text
                        style={{
                            color: "white",
                            textAlign: "center",
                            fontWeight: "bold",
                        }}
                    >
                        Register
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => router.push("/login")}
                >
                    <Text
                        style={{
                            textAlign: "center",
                            marginTop: 15,
                            color: "#2563eb",
                        }}
                    >
                        Already have an account? Login
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}