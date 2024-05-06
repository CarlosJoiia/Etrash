import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import { useNavigation } from "@react-navigation/native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const PlanetExplanation = () => {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      title: "Planeta",
    });
  }, [navigation]);
  const [isVisible1, setIsVisible1] = useState(false);
  const [isVisible2, setIsVisible2] = useState(false);
  const [isVisible3, setIsVisible3] = useState(false);
  const [isVisible4, setIsVisible4] = useState(false);

  const toggleVisibility1 = () => {
    setIsVisible1(!isVisible1);
    if (isVisible2) setIsVisible2(false);
    if (isVisible3) setIsVisible3(false);
    if (isVisible4) setIsVisible4(false);
  };

  const toggleVisibility2 = () => {
    setIsVisible2(!isVisible2);
    if (isVisible1) setIsVisible1(false);
    if (isVisible3) setIsVisible3(false);
    if (isVisible4) setIsVisible4(false);
  };

  const toggleVisibility3 = () => {
    setIsVisible3(!isVisible3);
    if (isVisible1) setIsVisible1(false);
    if (isVisible2) setIsVisible2(false);
    if (isVisible4) setIsVisible4(false);
  };

  const toggleVisibility4 = () => {
    setIsVisible4(!isVisible4);
    if (isVisible1) setIsVisible1(false);
    if (isVisible2) setIsVisible2(false);
    if (isVisible3) setIsVisible3(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {" "}
        Como lixo eletrônico afeta o meio ambiente?
      </Text>

      <TouchableOpacity onPress={toggleVisibility1} style={styles.rectangle}>
        <Text style={styles.buttonText}>Flora</Text>
        <Icon name="leaf" color="#fff" size={windowWidth * 0.05} />
      </TouchableOpacity>
      {isVisible1 && (
        <View style={styles.textContainer}>
          <Text style={styles.text}>
            O lixo eletrônico prejudica a flora ao liberar substâncias tóxicas
            no solo e na água, afetando o crescimento das plantas e perturbando
            os ecossistemas. Além disso, sua presença pode dificultar atividades
            como agricultura e jardinagem, impactando a produção de alimentos e
            o equilíbrio ambiental.
          </Text>
        </View>
      )}
      <TouchableOpacity onPress={toggleVisibility2} style={styles.rectangle}>
        <Text style={styles.buttonText}>Lençol Freático</Text>
        <Icon name="water" color="#fff" size={windowWidth * 0.05} />
      </TouchableOpacity>
      {isVisible2 && (
        <View style={styles.textContainer}>
          <Text style={styles.text}>
            Os lençóis freáticos são reservatórios de água subterrânea
            essenciais para abastecimento de água. O lixo eletrônico pode
            contaminá-los, pois seus componentes tóxicos, como metais pesados,
            vazam para o solo e, eventualmente, atingem os lençóis freáticos.
            Essa contaminação prejudica a água potável e ecossistemas.
          </Text>
        </View>
      )}
      <TouchableOpacity onPress={toggleVisibility3} style={styles.rectangle}>
        <Text style={styles.buttonText}>Atmosfera</Text>
        <Icon name="cloud" color="#fff" size={windowWidth * 0.05} />
      </TouchableOpacity>
      {isVisible3 && (
        <View style={styles.textContainer}>
          <Text style={styles.text}>
            O lixo eletrônico afeta a atmosfera através da emissão de gases
            tóxicos durante sua incineração, da liberação de produtos químicos
            voláteis durante o descarte e da produção de resíduos eletrônicos.
            Esses impactos contribuem para a poluição do ar e para problemas de
            saúde pública, destacando a importância da gestão responsável de
            resíduos eletrônicos.
          </Text>
        </View>
      )}
      <TouchableOpacity onPress={toggleVisibility4} style={styles.rectangle}>
        <Text style={styles.buttonText}>Fauna</Text>
        <Icon name="cat" color="#fff" size={windowWidth * 0.05} />
      </TouchableOpacity>
      {isVisible4 && (
        <View style={styles.textContainer}>
          <Text style={styles.text}>
            O lixo eletrônico ameaça a fauna devido à liberação de substâncias
            tóxicas e ao perigo físico de seus componentes. Isso pode causar
            danos à saúde dos animais e perturbar ecossistemas, destacando a
            necessidade urgente de práticas de descarte responsáveis e
            reciclagem.
          </Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: windowHeight * 0.1, // Espaçamento superior responsivo
    paddingHorizontal: windowWidth * 0.05, // Espaçamento horizontal responsivo
  },
  rectangle: {
    width: "100%",
    height: windowHeight * 0.08, // Altura responsiva
    backgroundColor: "#3CB371",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: windowHeight * 0.02, // Espaçamento inferior responsivo
    padding: windowWidth * 0.03, // Espaçamento interno responsivo
    borderRadius: windowWidth * 0.03, // Raio do canto responsivo
    flexDirection: "row",
  },
  textContainer: {
    marginTop: windowHeight * 0.02, // Espaçamento superior responsivo
    padding: windowWidth * 0.03, // Espaçamento interno responsivo
    backgroundColor: "#fff",
    borderRadius: windowWidth * 0.03, // Raio do canto responsivo
  },
  text: {
    fontSize: windowWidth * 0.04, // Tamanho do texto responsivo
    color: "#333",
  },
  title: {
    fontSize: windowWidth * 0.08, // Tamanho do título responsivo
    color: "#3CB371",
    marginBottom: windowHeight * 0.05, // Espaçamento inferior responsivo
    fontWeight: "bold",
    textAlign: "center",
  },
  buttonText: {
    fontSize: windowWidth * 0.05, // Tamanho do texto do botão responsivo
    color: "#fff",
  },
});

export default PlanetExplanation;
