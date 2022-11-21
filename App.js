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
  Platform,
} from "react-native";

export default function App() {
  const [nome, setNome] = useState("");
  const [peso, setPeso] = useState("");
  const [altura, setAltura] = useState("");

  const nomeDigitado = (nomeDigitado) => {
    setNome(nomeDigitado);
  };

  const pesoDigitado = (pesoDigitado) => {
    setPeso(pesoDigitado);
  };

  const alturaDigitado = (alturaDigitado) => {
    setAltura(alturaDigitado);
  };

  const calcularImc = () => {
    const imc = peso / (altura * altura);
    console.log(imc);

    if (imc < 18.5) {
      return Alert.alert(`Olá, ${nome}`, "situação de magreza");
    } else if (imc >= 18.5 && imc < 25) {
      return Alert.alert(`Olá, ${nome}`, "situação de normalidade");
    } else if (imc >= 25 && imc < 30) {
      return Alert.alert(`Olá, ${nome}`, "situação de sobrepeso");
    } else if (imc >= 30 && imc < 40) {
      return Alert.alert(`Olá, ${nome}`, "situação de obesidade");
    } else if (imc >= 40) {
      return Alert.alert(`Olá, ${nome}`, "situação de obesidade grave");
    } else {
    }
  };

  let tipoTeclado =
    Platform.OS === "ios" ? "numbers-and-punctuation" : "numeric";

  return (
    <SafeAreaView style={estilos.safeContainer}>
      <StatusBar barStyle="default" />
      <View style={estilos.container}>
        <Text style={estilos.titulo}>App IMC</Text>
      </View>

      <View>
        <TextInput
          style={estilos.input}
          placeholder="Informe seu nome"
          onChangeText={nomeDigitado}
          value={nome}
        />
      </View>

      <View style={estilos.viewInput}>
        <TextInput
          style={estilos.input1}
          placeholder="Peso (ex: 80)"
          onChangeText={pesoDigitado}
          value={peso}
          keyboardType={tipoTeclado}
        />
        <TextInput
          style={estilos.input2}
          keyboardType={tipoTeclado}
          placeholder="Altura (ex: 1.75)"
          onChangeText={alturaDigitado}
          value={altura}
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
    borderRadius: 5,
  },

  input1: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: "40%",
    borderRadius: 5,
  },

  input2: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: "40%",
    borderRadius: 5,
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
