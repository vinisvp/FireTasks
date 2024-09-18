import { StyleSheet, Text, View, TextInput } from "react-native";
import { DateTimePickerAndroid } from "@react-native-community/datetimepicker";
import { TouchableOpacity } from "react-native-web";

export function Task({ navigation }) {

    const openTimePicker = () => {
        DateTimePickerAndroid.open({
            mode: 'date',
            is24Hour: true
        })
    }

    return (
        <View style={styles.container}>
            <Text style={{ textAlign: "center", marginBottom: 3 }}>Descrição da Tarefa</Text>
            <TextInput style={styles.input} placeholder="Descreva essa tarefa" />
            <TouchableOpacity onPress={openTimePicker()}>
                <Text>AAA</Text>
            </TouchableOpacity>
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