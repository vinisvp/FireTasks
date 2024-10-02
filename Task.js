import { StyleSheet, Text, View, TextInput } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { useEffect, useState } from "react";
import { TouchableOpacity } from "react-native";
import { db } from "./firestore";
import { addDoc, collection, doc, updateDoc } from "firebase/firestore";

export function Task({ route, navigation }) {
    var task = null
    
    if(route.params){
        task = route.params
        task = task.task;
    }

    var [edit, setEdit] = useState(false);
    var [description, setDescription] = useState("");
    var date = null;

    var [month, setMonth] = useState();
    var [day, setDay] = useState();
    var [year, setYear] = useState();

    useEffect(() => {
        if (task) {
            setEdit(true);
            setDescription(task.description);
            date = new Date(task.date.seconds * 1000);
        } else {
            setEdit(false);
            date = new Date();
        }

        setMonth(date.getMonth())
        setDay(date.getDate())
        setYear(date.getFullYear())
    }, [task])

    function defineDate(year, month, day) {
        month = parseInt(month);
        const newDate = new Date(year, month, day);
        return newDate;
    }

    function clear(){
        task = null;
        setEdit(false);
        setDescription("");

        date = new Date();
        setMonth(date.getMonth());
        setDay(date.getDate());
        setYear(date.getFullYear());
    }

    function create(db, description, date) {
        addDoc(collection(db, "tasks"), {
            description: description,
            done: false,
            date: date
        }).then(() => {
            clear();
            navigation.navigate('Tasks');
        }).catch((error) => {
            console.log(error.code);
            console.log(error.message);
        })
    }

    function update(db, task) {
        updateDoc(doc(db, "tasks", task.id), {
            description: task.description,
            done: task.done,
            date: task.date
        }).then(() => {
            clear();
            navigation.navigate('Tasks');
        }).catch((error) => {
            console.log(error.code);
            console.log(error.message);
        })
    }

    return (
        <View style={styles.container}>
            <Text style={{ textAlign: "center", marginBottom: 3 }}>Descrição da Tarefa</Text>
            <TextInput style={styles.input}
                value={description}
                onChangeText={text => setDescription(text)}
                placeholder="Descreva essa tarefa"
                multiline
            />
            <View style={styles.date}>
                <TextInput
                    value={day}
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
                    <Picker.Item label="Janeiro" value={0} />
                    <Picker.Item label="Fevereiro" value={1} />
                    <Picker.Item label="Março" value={2} />
                    <Picker.Item label="Abril" value={3} />
                    <Picker.Item label="Maio" value={4} />
                    <Picker.Item label="Junho" value={5} />
                    <Picker.Item label="Julho" value={6} />
                    <Picker.Item label="Agosto" value={7} />
                    <Picker.Item label="Setembro" value={8} />
                    <Picker.Item label="Outubro" value={9} />
                    <Picker.Item label="Novembro" value={10} />
                    <Picker.Item label="Dezembro" value={11} />
                </Picker>
                <TextInput
                    value={year}
                    style={styles.rBtn}
                    placeholder="Ano"
                    keyboardType="numeric"
                    onChangeText={text => setYear(text)}
                    maxLength={4}
                />
            </View>
            <TouchableOpacity
                style={styles.button}
                onPress={() => {
                    if (edit == false) {
                        create(db, description, defineDate(year, month, day));
                    } else {
                        task.description = description;
                        task.date = defineDate(year, month, day);
                        update(db, task)
                    }
                }}
            >
                <Text style={{ color: "#fff" }}>{edit ? "Editar" : "Criar "}</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.altButton}
                onPress={() => {clear(); navigation.navigate('Tasks')}}
            >
                <Text style={{ color: "#20a0e6" }}>Cancelar</Text>
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
    },
    button: {
        width: "50%",
        alignSelf: "center",
        borderRadius: 10,
        backgroundColor: "#20a0e6",
        alignItems: "center",
        padding: 10,
        margin: 10,
    },
    altButton: {
        width: "50%",
        alignSelf: "center",
        borderRadius: 10,
        borderWidth: 2,
        borderColor: "#20a0e6",
        alignItems: "center",
        padding: 10,
        margin: 10,
    }
})