// Faculty directory page

import { View, Text, FlatList } from "react-native";

const faculty = [
    {
        id: "1",
        name: "Dr. Sabah Mohammed",
        office: "AT 13",
        email: "sabah@lakeheadu.ca",
    },
    {
        id: "2",
        name: "Dr. Moira MacNeil",
        office: "AT 16",
        email: "moira@lakeheadu.ca",
    },
    {
        id: "3",
        name: "Dr. Rachael Wang",
        office: "AT 34",
        email: "rachael@lakeheadu.ca",
    },
];

export default function FacultyScreen() {
    return (
        <FlatList
            data={faculty}
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
                    <Text style={{ fontWeight: "bold", fontSize: 16 }}>
                        {item.name}
                    </Text>

                    <Text>Office: {item.office}</Text>
                    <Text>Email: {item.email}</Text>
                </View>
            )}
        />
    );
}