import { useNavigation } from "@react-navigation/native"
import { NativeStackNavigationProp } from "@react-navigation/native-stack"
import { createUserWithEmailAndPassword } from "firebase/auth"
import { useState } from "react"
import { KeyboardAvoidingView, View, StyleSheet, Text, TextInput, TouchableOpacity } from "react-native"
import { auth } from "../../firebase"
import { RouteParams } from "../navigation/RootNavigator"

const RegisterScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation<NativeStackNavigationProp<RouteParams>>();

  const handleSignUp = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(userCredentials => {
        const user = userCredentials.user;
        console.log('Register with:', user.email);
        if (user) {
          navigation.navigate('Login'); 
        }
      })
      .catch(error => alert(error.message));
  }

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior="padding"
    >    
    <Text style={styles.headerText}>Page d'inscription</Text>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Identifiant"
          value={email}
          onChangeText={text => setEmail(text)}
          style={styles.input}
        />
        <TextInput
          placeholder="Mot de passe"
          value={password}
          onChangeText={text => setPassword(text)}
          style={styles.input}
          secureTextEntry
        />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={handleSignUp}
          style={styles.button}
        >
        <Text style={styles.buttonText}>Inscription</Text>
      </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  )
}

export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  headerText: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 50,
  },
  inputContainer: {
    width: '80%',
  },
  input: {
    backgroundColor: 'white',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 5,
  },
  buttonContainer: {
    width: '60%',
    justifyContent: 'center',
    alignItems: "center",
    marginTop: 40,
  },
  button: {  
    backgroundColor: "#0782F9",
    width: '100%',
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: '700',
    fontSize: 16,
  },
})

