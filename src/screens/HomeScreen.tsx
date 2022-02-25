import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useState } from "react";
import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native"
import { RouteParams } from "../navigation/RootNavigator";

const HomeScreen = () => {
  const [doctor, setDoctor] = useState('');

  const navigation = useNavigation<NativeStackNavigationProp<RouteParams>>();

  const searchDocs = () => {
    navigation.navigate('FilterDocs');
  }

  return (
    <KeyboardAvoidingView
    style={styles.container}
    behavior="padding">
      <Text style={styles.headerText}>Trouve Ton Doc</Text>
      <View style={styles.inputContainer}>
        <TextInput 
        placeholder="Rechercher un médecin"
        value={doctor}
        onChangeText={text => setDoctor(text)}
        style={styles.input} />
      </View>
      <View>
        <Text>List</Text>
      </View>
      <View style={styles.buttonContainer}>
       <TouchableOpacity
        onPress={searchDocs}
        style={styles.button}
        >
          <Text style={styles.buttonText}>Filtre</Text>
        </TouchableOpacity> 
      </View>
    </KeyboardAvoidingView>
  )
}

export default HomeScreen;

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
    justifyContent: "center",
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
});
