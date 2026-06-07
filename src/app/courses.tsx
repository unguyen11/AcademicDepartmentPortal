// Courses page

import { View, Text, FlatList } from "react-native";

const courses = [
    {
        code: "COMP5450",
        title: "Mobile Programming",
    },
    {
        code: "COMP5310",
        title: "Database Systems",
    },
    {
        code: "COMP5010",
        title: "Software Engineering",
    },
];

export default function CoursesScreen() {
    return (
        <FlatList
            data={courses}
            keyExtractor={(item) => item.code}
            renderItem={({ item }) => (
                <View
                    style={{
                        padding: 15,
                        margin: 10,
                        borderWidth: 1,
                        borderRadius: 8,
                    }}
                >
                    <Text style={{ fontWeight: "bold" }}>
                        {item.code}
                    </Text>

                    <Text>{item.title}</Text>
                </View>
            )}
        />
    );
}