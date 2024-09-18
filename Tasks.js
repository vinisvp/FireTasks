import { StyleSheet, Text, View, Image } from "react-native";
import { CheckBox, FlatList, ScrollView, TouchableOpacity } from "react-native-web";

export function Tasks({navigation}) {
  const DATA = [
    {
      id: 1,
      description: "Tarefa 1",
      done: false,
      date: new Date('July 20, 69 20:17:40 GMT+00:00')
    },
    {
      id: 2,
      description: "Tarefa 2",
      done: true,
      date: new Date('Setember 11, 69 19:45:12 GMT+00:00')
    }
  ]

  return (
    <View style={styles.container}>
      <ScrollView style={{ padding: 10 }}>
        <FlatList
          data={DATA}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <View style={{ flexDirection: 'row' }}>
                <CheckBox
                  value={item.done}
                  onValueChange={() => item.done = !item.done}
                />
                <Text style={{ marginLeft: 8 }}>{item.description}</Text>
              </View>
              <View style={{ flexDirection: 'row', gap: 5, justifyContent: 'flex-end' }}>
                <TouchableOpacity>
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
          )}
        />
      </ScrollView>
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
  }
});
