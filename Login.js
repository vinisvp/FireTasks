import { StyleSheet, TextInput, Text, View } from "react-native";

export function Login() {
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    shadowColor: '#e3e3e3',
    shadowOffset: {
        height: 10,
        width: 10
    },
    padding: 20
  },
    header: {
    fontSize: 23,
    textAlign: 'center',
    marginBottom:40
  },
  input: {
    borderWidth: 2,
    borderRadius: 15,
    borderColor: "#4f4f4f",
    padding: 5,
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
});
