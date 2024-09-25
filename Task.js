import { StyleSheet, Text, View, TextInput, Alert } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { useState } from "react";
import { TouchableOpacity } from "react-native";

export function Task({ navigation }) {
    const [month, setMonth] = useState("");
    const [day, setDay] = useState("");
    const [year, setYear] = useState("");
    const [date, setDate] = useState(new Date());

    function defineDate(year, month, day) {
        const newDate = new Date(`${year}-${month}-${day}`);
        setDate(newDate);
        console.log(newDate);
    }

    return (
        <View style={styles.container}>
            <Text style={{ textAlign: "center", marginBottom: 3 }}>Descrição da Tarefa</Text>
            <TextInput style={styles.input} placeholder="Descreva essa tarefa" />
            <View style={styles.date}>
                <TextInput
                    style={styles.lBtn}
                    placeholder="Dia"
                    keyboardType="numeric"
                    onChangeText={text => setDay(text)}
                    maxLength={2}
                />
                <Picker
                    style={styles.select}
                    selectedValue={month}
                    onValueChange={(itemValue) => setMonth(itemValue)}
                >
                    <Picker.Item label="Janeiro" value={"01"} />
                    <Picker.Item label="Fevereiro" value={"02"} />
                    <Picker.Item label="Março" value={"03"} />
                    <Picker.Item label="Abril" value={"04"} />
                    <Picker.Item label="Maio" value={"05"} />
                    <Picker.Item label="Junho" value={"06"} />
                    <Picker.Item label="Julho" value={"07"} />
                    <Picker.Item label="Agosto" value={"08"} />
                    <Picker.Item label="Setembro" value={"09"} />
                    <Picker.Item label="Outubro" value={"10"} />
                    <Picker.Item label="Novembro" value={"11"} />
                    <Picker.Item label="Dezembro" value={"12"} />
                </Picker>
                <TextInput
                    style={styles.rBtn}
                    placeholder="Ano"
                    keyboardType="numeric"
                    onChangeText={text => setYear(text)}
                    maxLength={4}
                />
            </View>
            <TouchableOpacity
                onPress={() => defineDate(year, month, day)}
            >
                <Text>Criar</Text>
            </TouchableOpacity>
            <Text>
                {date.getDate()} /
                {date.getMonth()} /
                {date.getFullYear()}
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
    },
    date: {
        justifyContent: 'center',
        flexDirection: 'row',
        marginTop: 10
    },
    lBtn: {
        width: "15%",
        borderWidth: 2,
        borderTopStartRadius: 15,
        borderBottomStartRadius: 15,
        borderColor: "#4f4f4f",
        padding: 5,
        color: "#8f8f8f",
    },
    rBtn: {
        width: "15%",
        borderWidth: 2,
        borderTopEndRadius: 15,
        borderBottomEndRadius: 15,
        borderColor: "#4f4f4f",
        padding: 5,
        color: "#8f8f8f",
    },
    select: {
        borderWidth: 2,
        borderColor: "#4f4f4f",
        padding: 5,
        color: "#8f8f8f",
    }
})