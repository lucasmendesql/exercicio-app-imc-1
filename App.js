import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
  Pressable,
  Alert,
} from "react-native";

export default function App() {
  const calcularImc = () => {
    Alert.alert("Testando", "testandooooooooo");
  };

  return (
    <SafeAreaView style={estilos.safeContainer}>
      <StatusBar barStyle="default" />
      <View style={estilos.container}>
        <Text style={estilos.titulo}>App IMC</Text>
      </View>

      <View>
        <TextInput style={estilos.input} placeholder="Informe seu nome" />
      </View>

      <View style={estilos.viewInput}>
        <TextInput style={estilos.input1} placeholder="Peso (ex: 80)" />
        <TextInput
          style={estilos.input2}
          keyboardType="numeric"
          placeholder="Altura (ex: 1.75)"
        />
      </View>

      <Pressable style={estilos.botaoInicial} onPress={calcularImc}>
        <Text style={estilos.textoBotao}>Calcular imc</Text>
      </Pressable>
    </SafeAreaView>
  );
}

const estilos = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: "#f7f7f7",
  },
  container: {
    backgroundColor: "black",
    width: "100%",
    height: 90,
    justifyContent: "center",
  },
  titulo: {
    color: "white",
    textAlign: "center",
    fontSize: 25,
    fontWeight: "bold",
  },

  viewInput: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },

  input1: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: "40%",
  },

  input2: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: "40%",
  },

  botaoInicial: {
    borderStyle: "solid",
    padding: 12,
    borderWidth: 1,
    backgroundColor: "#f7f7f7",
    borderRadius: 5,
    margin: 10,
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  textoBotao: {
    fontSize: 16,
    color: "black",
    fontWeight: "bold",
    textAlign: "center",
    textTransform: "uppercase",
  },
});
