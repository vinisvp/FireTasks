import { StyleSheet, Text, View, Image } from "react-native";
import { CheckBox, FlatList, ScrollView, TouchableOpacity } from "react-native-web";
import { db } from "./firestore";
import { getDocs, collection } from "firebase/firestore";
import { useState } from "react";

export function Tasks({ navigation }) {
  const [DATA, setData] = useState();

  getDocs(collection(db, "tasks")).then(docSnap => {
    let tasks = [];
    docSnap.forEach((doc) => {
      tasks.push({ ...doc.data(), id: doc.id })
    });
    setData(tasks);
  })

  const newTask = () => {
    navigation.navigate('Task');
  }

  function editTask(task){
    //console.log(task);
    navigation.navigate('Task', {
      task
    });
  }

  return (
    <View style={styles.container}>
      <ScrollView style={{ padding: 10 }}>
        <FlatList
          data={DATA}
          keyExtractor={item => item.id}
          renderItem={({ item }) => {
            return (
              <View style={styles.card}>
                <View style={{ flexDirection: 'row' }}>
                  <CheckBox
                    value={item.done}
                    onValueChange={() => item.done = !item.done}
                  />
                  <Text style={{ marginLeft: 8 }}>{item.description}</Text>
                </View>
                <View style={{ flexDirection: 'row', gap: 5, justifyContent: 'flex-end' }}>
                  <TouchableOpacity onPress={() => editTask(item)}>
                    <Image
                      source={{ uri: 'https://cdn0.iconfinder.com/data/icons/multimedia-solid-30px/30/edit_modify_write_pen-512.png' }}
                      style={{ width: 18, height: 18 }}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Image
                      source={{ uri: 'https://cdn-icons-png.flaticon.com/512/6861/6861362.png' }}
                      style={{ width: 18, height: 18 }}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            );
          }}
        />
      </ScrollView>
      <TouchableOpacity style={styles.add}
        onPress={newTask}
      >
        <Text style={{ alignSelf: "center", color: "#fff", fontSize: 30 }}>+</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 35
  },
  card: {
    backgroundColor: '#fff',
    shadowColor: '#e3e3e3',
    shadowOffset: {
      height: 5,
      width: 0
    },
    shadowRadius: 5,
    padding: 20,
    marginBottom: 15,
    borderRadius: 15
  },
  add: {
    backgroundColor: "#20a0e6",
    width: "20%",
    borderRadius: 90,
    padding: 10,
    alignContent: "center",
    alignSelf: "center"
  }
});
