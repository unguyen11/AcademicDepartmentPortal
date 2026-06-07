// Student resources page

import { View, Text, FlatList } from "react-native";

const resources = [
    {
        id: "1",
        name: "Academic Calendar",
    },
    {
        id: "2",
        name: "Program Handbook",
    },
    {
        id: "3",
        name: "Course Registration Form",
    },
    {
        id: "4",
        name: "Graduation Checklist",
    },
];

export default function ResourcesScreen() {
    return (
        <FlatList
            data={resources}
            keyExtractor={(item) => item.id}
            renderItem={({item}) => (
                <View
                    style={{
                        padding: 15,
                        margin: 10,
                        borderWidth: 1,
                        borderRadius: 8,
                    }}
                >
                    <Text>{item.name}</Text>
                </View>
            )}
        />
    );
}