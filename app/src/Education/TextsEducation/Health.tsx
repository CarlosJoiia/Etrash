import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
  Dimensions,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

interface CircleProps {
  text: string;
  image: any;
  example: string;
}

const Circle: React.FC<CircleProps> = ({ text, image, example }) => {
  const [showText, setShowText] = useState(false);
  const screenWidth = Dimensions.get("window").width;

  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      title: "Saúde",
    });
  }, [navigation]);

  return (
    <TouchableOpacity onPress={() => setShowText(!showText)}>
      <View
        style={[
          styles.circle,
          {
            backgroundColor: showText ? "#fff" : "#3CB371",
            width: screenWidth * 0.4,
            height: screenWidth * 0.4,
            borderRadius: screenWidth * 0.2,
          },
        ]}
      >
        {!showText && (
          <Image
            source={image}
            style={[
              styles.image,
              { width: screenWidth * 0.1, height: screenWidth * 0.1 },
            ]}
          />
        )}
        {showText && (
          <View>
            <Text style={[styles.text, { fontSize: screenWidth * 0.035 }]}>
              {text}
            </Text>
            <Text style={[styles.example, { fontSize: screenWidth * 0.022 }]}>
              {example}
            </Text>
          </View>
        )}
      </View>
    </TouchableOpacity>
  );
};

const HealthExplanation = () => {
  const screenWidth = Dimensions.get("window").width;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text
        style={[
          styles.title,
          { fontSize: screenWidth * 0.07, marginTop: screenWidth * 0.05 },
        ]}
      >
        Como o Lixo eletrônico afeta nossa saúde?
      </Text>
      <View style={styles.containerRow}>
        <Circle
          image={require("../../../assets/icons8-eyes-100.png")}
          text="Pulmão"
          example="A inalação de substâncias tóxicas provenientes do lixo eletrônico pode causar danos aos pulmões, levando a problemas respiratórios."
        />
        <Circle
          image={require("../../../assets/icons8-brain-100.png")}
          text="Cérebro"
          example="Certas toxinas presentes no lixo eletrônico podem atravessar a barreira hematoencefálica e prejudicar o funcionamento do cérebro, resultando em danos cognitivos ou neurológicos."
        />
      </View>
      <View style={styles.containerRow}>
        <Circle
          image={require("../../../assets/icons8-kidney-100.png")}
          text="Rins "
          example="Substâncias químicas liberadas pelo lixo eletrônico podem se acumular nos rins, interferindo em sua capacidade de filtrar resíduos do sangue e levando a problemas renais."
        />
        <Circle
          image={require("../../../assets/icons8-heart-with-pulse-100.png")}
          text="Coração"
          example="A exposição a substâncias tóxicas do lixo eletrônico pode causar inflamação e estresse oxidativo, o que também contribui para o desenvolvimento de doenças cardiovasculares."
        />
      </View>
      <View style={styles.containerRow}>
        <Circle
          image={require("../../../assets/icons8-estômago-100.png")}
          text="Sistema digestivo "
          example="Os principais metais pesados que afetam o sistema digestivo são o chumbo, cádmio, mercúrio, prata e estanho, podendo causar diversos sintomas gastrointestinais como dores abdominais, vômitos, diarreia e outros problemas"
        />
        <Circle
          image={require("../../../assets/icons8-eyes-100.png")}
          text="Visão"
          example="os principais metais pesados que podem afetar a visão são o chumbo, mercúrio, cádmio e arsênio, podendo causar diversos sintomas visuais, como visão turva, sensibilidade à luz, inflamação ocular e até cegueira"
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: "10%",
    paddingHorizontal: "5%",
  },
  circle: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#3CB371",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    padding: "5%",
    margin: "2.5%",
  },
  text: {
    marginLeft: "2.5%",
    textAlign: "center",
  },
  example: {
    marginTop: "1.25%",
    textAlign: "center",
  },
  image: {
    width: "10%",
    height: "10%",
  },
  title: {
    color: "#3CB371",
    fontWeight: "bold",
    textAlign: "center",
  },
  containerRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
});

export default HealthExplanation;
