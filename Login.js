import { useState } from "react";
import { StyleSheet, TextInput, Text, View, TouchableOpacity } from "react-native";
import { firebaseConfig } from "./firebaseConfig";
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';


export function Login({ navigation }) {
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  
  const enter = () => {
    signInWithEmailAndPassword(auth, email, pwd)
      .then((userCredencial) => {
        setEmail("");
        setPwd("");
        const user = userCredencial.user;
        navigation.navigate('Home',{user});
      })
      .catch((error) => {
        console.log(error.code);
        console.log(error.message);
      })
  }
  
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Login</Text>
      <View style={styles.inputGroup}>
        <Text style={{ textAlign: "center", marginBottom: 3 }}>Usuário</Text>
        <TextInput style={styles.input}
                   placeholder="E-Mail ou nome de usuário"
                   value={email}
                   onChangeText={text => setEmail(text)}
        />
      </View>

      <View style={styles.inputGroup}>
        <Text style={{ textAlign: "center", marginBottom: 3 }}>Senha</Text>
        <TextInput style={styles.input}
                   placeholder="Senha"
                   value={pwd}
                   onChangeText={text => setPwd(text)}
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={enter}>
        <Text style={{color: "#fff"}}>Acessar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    shadowColor: '#e3e3e3',
    shadowOffset: {
      height: 7,
      width: 0
    },
    shadowRadius: 15,
    padding: 20,
    margin: 35,
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
