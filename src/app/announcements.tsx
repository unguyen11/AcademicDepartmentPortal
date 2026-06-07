// Announcements page

import { View, Text, FlatList } from "react-native";

const announcements = [
    {
        id: "1",
        title: "Fall Registration Opens",
        date: "July 15, 2026",
    },
    {
        id: "2",
        title: "Midterm Schedule Posted",
        date: "October 10, 2026",
    },
    {
        id: "3",
        title: "Graduation Applications Due",
        date: "November 1, 2026",
    },
];

export default function AnnouncementsScreen() {
    return (
        <FlatList
            data={announcements}
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
                        {item.title}
                    </Text>

                    <Text>{item.date}</Text>
                </View>
            )}
        />
    );
}