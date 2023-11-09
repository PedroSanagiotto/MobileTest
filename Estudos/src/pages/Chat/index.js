import react, { useState } from "react";
import { TouchableOpacity } from "react-native";
import { View } from "react-native";
import { Text, TextInput, StyleSheet } from "react-native";

export default function Chat() {
  const [pergunta, setPergunta] = useState("");
  const [resposta, setResposta] = useState("");

  const { handleSubmit } = useForm({});

  function handleQuestionario() {
    if (pergunta === "") {
      alert("Insira o que deseja perguntar");
      return;

      const data = {
        pergunta,
        resposta,
      };

      console.log(data);
    }

    return (
      <>
        <View style={styles.container}>
          <Text style={styles.title}> Faça sua pesquisa </Text>
          <TextInput
            onChangeText={setPergunta}
            value={pergunta}
            placeholder="Digite sua pergunta"
            style={styles.input}
          />

          <TextInput
            onChangeText={setResposta}
            value={resposta}
            placeholder="resultado"
            style={styles.input}
          />

          <TouchableOpacity
            style={styles.buttonValidation}
            onPress={handleSubmit(handleQuestionario)}
          >
            <Text style={styles.buttonText}>Pesquisar</Text>
          </TouchableOpacity>
        </View>
      </>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#F0F4FF",
      paddingHorizontal: 18,
    },
    title: {
      fontSize: 12,
      marginBottom: 24,
      color: "#121212",
      fontWeight: "bold",
    },
    input: {
      width: "100%",
      height: 40,
      color: "#FFF",
    },
    buttonValidation: {
      backgroundColor: "#7FFF00",
      width: "100%",
      height: 40,
    },
    buttonText: {
        fontSize: 16,
        color: '#FFF',
    }
  });
}
