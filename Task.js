import { StyleSheet, Text, View, TextInput } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { useState } from "react";

export function Task({ navigation }) {
    const [month, setMonth] = useState(0);

    return (
        <View style={styles.container}>
            <Text style={{ textAlign: "center", marginBottom: 3 }}>Descrição da Tarefa</Text>
            <TextInput style={styles.input} placeholder="Descreva essa tarefa" />
            <TextInput
            />
            <Picker
                selectedValue={month}
                onValueChange={(itemValue) => setMonth(itemValue)}
            >
                <Picker.Item label="Janeiro" value={0}/>
                <Picker.Item label="Fevereiro" value={1}/>
            </Picker>
            <TextInput
            />
            <Text>
                {month}
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        shadowColor: '#e3e3e3',
        shadowOffset: {
            height: 5,
            width: 0
        },
        shadowRadius: 5,
        margin: 10,
        padding: 10,
        borderRadius: 15
    },
    input: {
        borderWidth: 2,
        borderRadius: 15,
        borderColor: "#4f4f4f",
        padding: 10,
        color: "#8f8f8f",
        height: 100
    }
})