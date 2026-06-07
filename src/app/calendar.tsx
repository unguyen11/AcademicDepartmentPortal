// Academic calendar page

import { View, Text, FlatList } from "react-native";

const events = [
    {
        id: "1",
        date: "Jan 10",
        event: "Classes Begin",
    },
    {
        id: "2",
        date: "Feb 19",
        event: "Reading Week Begins",
    },
    {
        id: "3",
        date: "Apr 15",
        event: "Final Exams Start",
    },
    {
        id: "4",
        date: "May 5",
        event: "Final Grades Released",
    },
];

export default function CalendarScreen() {
    return (
        <FlatList
            data={events}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
                <View
                    style={{
                        padding: 15,
                        margin: 10,
                        borderWidth: 1,
                        borderRadius: 8,
                    }}
                >
                    <Text
                        style={{
                            fontWeight: "bold",
                            fontSize: 16,
                        }}
                    >
                        {item.date}
                    </Text>

                    <Text>{item.event}</Text>
                </View>
            )}
        />
    );
}