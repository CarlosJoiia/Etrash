import React from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  Dimensions,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default function EducationPage() {
  const navigation = useNavigation<any>();

  const Ewaste = () => {
    navigation.navigate("Ewaste");
  };

  const Planet = () => {
    navigation.navigate("Planet");
  };

  const Health = () => {
    navigation.navigate("Health");
  };

  const Economy = () => {
    navigation.navigate("Privacy");
  };

  const Politics = () => {
    navigation.navigate("Politics");
  };

  const Educational = () => {
    navigation.navigate("Educational");
  };

  return (
    <View style={styles.container}>
      {/* Primeira linha */}
      <View style={styles.row}>
        <TouchableOpacity onPress={Ewaste} style={styles.rectangle}>
          <View style={styles.rectangle}>
            <Icon name="recycle" size={windowWidth * 0.15} color="white" />
            <Text style={styles.text}>O que é E-waste</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={Planet} style={styles.rectangle}>
          <View style={styles.rectangle}>
            <Icon name="globe" size={windowWidth * 0.15} color="white" />
            <Text style={styles.text}>Impactos ambientais</Text>
          </View>
        </TouchableOpacity>
      </View>

      {/* Segunda linha */}
      <View style={styles.row}>
        <TouchableOpacity onPress={Health} style={styles.rectangle}>
          <View style={styles.rectangle}>
            <Icon name="plus" size={windowWidth * 0.15} color="white" />
            <Text style={styles.text}>Impactos na saúde</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={Economy} style={styles.rectangle}>
          <View style={styles.rectangle}>
            <Icon name="lock" size={windowWidth * 0.15} color="white" />
            <Text style={styles.text}>Privacidade</Text>
          </View>
        </TouchableOpacity>
      </View>

      {/* Terceira linha */}
      <View style={styles.row}>
        <TouchableOpacity onPress={Politics} style={styles.rectangle}>
          <View style={styles.rectangle}>
            <Icon name="flag" size={windowWidth * 0.15} color="white" />
            <Text style={styles.text}>Política</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={Educational} style={styles.rectangle}>
          <View style={styles.rectangle}>
            <Icon name="book" size={windowWidth * 0.15} color="white" />
            <Text style={styles.text}>Educação</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%", // Largura ocupando 100% do espaço disponível
    height: "100%", // Altura ocupando 100% do espaço disponível
  },

  row: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: windowHeight * 0.03, // Usando a altura da tela para criar espaço entre as linhas
    paddingHorizontal: windowWidth * 0.1, // Usando a largura da tela para definir o espaçamento horizontal
  },
  rectangle: {
    width: "45%", // Definindo a largura do retângulo como 45% da largura da tela para espaçamento uniforme
    aspectRatio: 1, // Mantendo uma proporção de 1:1 para o retângulo
    backgroundColor: "#3CB371",
    marginHorizontal: windowWidth * 0.025, // Espaçamento horizontal entre os retângulos
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    padding: 0,
  },
  text: {
    textAlign: "center",
    fontSize: windowWidth * 0.025, // Tamanho do texto responsivo
    color: "white",
    fontWeight: "bold",
  },
});
