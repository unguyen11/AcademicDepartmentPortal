// Search page

import { useState } from "react";
import {
    View,
    Text,
    TextInput,
    FlatList,
} from "react-native";

const data = [
    {
        id: "1",
        type: "Course",
        name: "COMP5450 Mobile Programming",
    },
    {
        id: "2",
        type: "Course",
        name: "COMP5310 Database Systems",
    },
    {
        id: "3",
        type: "Course",
        name: "COMP5010 Software Engineering",
    },
    {
        id: "4",
        type: "Faculty",
        name: "Dr. Sabah Mohammed",
    },
    {
        id: "5",
        type: "Faculty",
        name: "Dr. Moira MacNeil",
    },
    {
        id: "6",
        type: "Faculty",
        name: "Dr. Rachael Wang",
    },
    {
        id: "7",
        type: "Resource",
        name: "Academic Calendar",
    },
    {
        id: "8",
        type: "Resource",
        name: "Program Handbook",
    },
    {
        id: "9",
        type: "Resource",
        name: "Course Registration Form",
    },
    {
        id: "10",
        type: "Resource",
        name: "Graduation Checklist",
    },
];

export default function SearchScreen() {
    const [searchText, setSearchText] = useState("");

    const filteredData = data.filter((item) =>
        item.name.toLowerCase().includes(
            searchText.toLowerCase()
        )
    );

    return (
        <View
            style={{
                flex: 1,
                padding: 20,
            }}
        >
            <Text
                style={{
                    fontSize: 24,
                    fontWeight: "bold",
                    marginBottom: 20,
                }}
            >
                Search
            </Text>

            <TextInput
                placeholder="Search courses, faculty, resources..."
                value={searchText}
                onChangeText={setSearchText}
                style={{
                    borderWidth: 1,
                    borderRadius: 8,
                    padding: 12,
                    marginBottom: 20,
                }}
            />

            <FlatList
                data={filteredData}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View
                        style={{
                            borderWidth: 1,
                            borderRadius: 8,
                            padding: 15,
                            marginBottom: 10,
                        }}
                    >
                        <Text
                            style={{
                                fontWeight: "bold",
                            }}
                        >
                            {item.name}
                        </Text>

                        <Text>{item.type}</Text>
                    </View>
                )}
            />
        </View>
    );
}