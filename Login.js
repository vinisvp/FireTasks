import { StyleSheet, TextInput, Text, View, TouchableOpacity } from "react-native";

export function Login({ navigation }) {
  const enter=()=>{
    navigation.navigate('Home');
  }
  
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Login</Text>
      <View style={styles.inputGroup}>
        <Text style={{ textAlign: "center", marginBottom: 3 }}>E-Mail</Text>
        <TextInput style={styles.input} placeholder="E-Mail" />
      </View>

      <View style={styles.inputGroup}>
        <Text style={{ textAlign: "center", marginBottom: 3 }}>Senha</Text>
        <TextInput style={styles.input} placeholder="Senha" />
      </View>

      <TouchableOpacity style={styles.button} onPress={() => enter()}>
        <Text style={{color: "#fff"}}>Entrar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    shadowColor: '#e3e3e3',
    shadowOffset: {
      height: 7,
      width: 0
    },
    shadowRadius: 15,
    padding: 20,
    borderRadius: 15
  },
  header: {
    fontSize: 23,
    textAlign: 'center',
    marginBottom: 40
  },
  input: {
    borderWidth: 2,
    borderRadius: 15,
    borderColor: "#4f4f4f",
    padding: 10,
    color: "#8f8f8f",
  },
  inputFocus: {
    borderWidth: 2,
    borderRadius: 15,
    borderColor: "#4f4f4f",
    padding: 5,
    color: "#8f8f8f",
  },
  inputGroup: {
    marginBottom: 10,
  },
  button: {
    width: "50%",
    alignSelf: "center",
    borderRadius: 10,
    backgroundColor: "#20a0e6",
    alignItems: "center",
    padding: 10,
  }
});
