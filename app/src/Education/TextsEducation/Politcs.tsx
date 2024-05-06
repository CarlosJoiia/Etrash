import React, { useEffect } from "react";
import { View, Text, StyleSheet, ScrollView, Dimensions } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import { useNavigation } from "@react-navigation/native";

const PoliticExplanation = () => {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      title: "Política",
    });
  }, [navigation]);
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.rectangle}>
        <Text style={styles.heading}>
          A Relação entre Política e Lixo Eletrônico
        </Text>
      </View>
      <View style={styles.rectangle}>
        <View style={styles.subHeadingContainer}>
          <Icon
            name="flag"
            color="#fff"
            size={Dimensions.get("window").width * 0.05}
          />
          <Text style={styles.subHeading}>Regulamentação e Legislação</Text>
        </View>
        <Text style={styles.text}>
          A política desempenha um papel fundamental na formulação de
          regulamentações e legislações para gerenciar o ciclo de vida dos
          produtos eletrônicos. Isso inclui desde a produção e uso responsável
          de materiais até a coleta, reciclagem e disposição final adequada.
          Legislações ambientais e políticas de gestão de resíduos são
          essenciais para incentivar práticas sustentáveis e responsáveis na
          indústria e entre os consumidores.
        </Text>
      </View>
      <View style={styles.rectangle}>
        <View style={styles.subHeadingContainer}>
          <Icon
            name="industry"
            color="#fff"
            size={Dimensions.get("window").width * 0.05}
          />
          <Text style={styles.subHeading}>Responsabilidade do Produtor</Text>
        </View>
        <Text style={styles.text}>
          Políticas que estabelecem a responsabilidade do produtor incentivam as
          empresas a projetar produtos com maior durabilidade, facilidade de
          reparo e reciclabilidade. Além disso, essas políticas promovem a
          implementação de programas de reciclagem e a gestão adequada do
          descarte de produtos eletrônicos no final de sua vida útil.
        </Text>
      </View>
      <View style={styles.rectangle}>
        <View style={styles.subHeadingContainer}>
          <Icon
            name="globe"
            color="#fff"
            size={Dimensions.get("window").width * 0.05}
          />
          <Text style={styles.subHeading}>Cooperação Internacional</Text>
        </View>
        <Text style={styles.text}>
          Dada a natureza transfronteiriça do comércio de produtos eletrônicos e
          do fluxo de resíduos, a cooperação internacional é essencial. Acordos
          e tratados internacionais podem facilitar a troca de melhores
          práticas, tecnologias e recursos entre os países, promovendo padrões
          globais mais elevados para o gerenciamento de lixo eletrônico.
        </Text>
      </View>
      <View style={styles.rectangle}>
        <View style={styles.subHeadingContainer}>
          <Icon
            name="pen"
            color="#fff"
            size={Dimensions.get("window").width * 0.05}
          />
          <Text style={styles.subHeading}>Educação e Conscientização</Text>
        </View>
        <Text style={styles.text}>
          Políticas voltadas para a educação e conscientização pública
          desempenham um papel crucial na mudança de comportamento e na promoção
          da responsabilidade individual. Campanhas de sensibilização podem
          informar os consumidores sobre os impactos ambientais do descarte
          inadequado de produtos eletrônicos e incentivar práticas de consumo
          mais sustentáveis.
        </Text>
      </View>
      <View style={styles.rectangle}>
        <View style={styles.subHeadingContainer}>
          <Icon
            name="coins"
            color="#fff"
            size={Dimensions.get("window").width * 0.05}
          />
          <Text style={styles.subHeading}>Incentivos Econômicos</Text>
        </View>
        <Text style={styles.text}>
          Incentivos econômicos, como subsídios para a reciclagem e taxas sobre
          produtos eletrônicos descartados, podem estimular a indústria a adotar
          práticas mais sustentáveis e eficientes. Essas políticas não apenas
          mitigam os custos associados ao gerenciamento de lixo eletrônico, mas
          também incentivam a inovação e o desenvolvimento de soluções
          tecnológicas mais ecológicas.
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff",
    paddingHorizontal: Dimensions.get("window").width * 0.05,
    paddingVertical: Dimensions.get("window").height * 0.02,
    marginTop: Dimensions.get("window").height * 0.02,
  },
  rectangle: {
    backgroundColor: "#3CB371",
    padding: Dimensions.get("window").width * 0.03,
    marginVertical: Dimensions.get("window").height * 0.02,
    borderRadius: Dimensions.get("window").width * 0.01,
    width: "100%",
  },
  heading: {
    fontSize: Dimensions.get("window").width * 0.06,
    fontWeight: "bold",
    marginBottom: Dimensions.get("window").height * 0.015,
    color: "#ffffff",
  },
  subHeadingContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: Dimensions.get("window").height * 0.01,
  },
  subHeading: {
    fontSize: Dimensions.get("window").width * 0.045,
    fontWeight: "bold",
    color: "#ffffff",
    marginLeft: Dimensions.get("window").width * 0.03,
  },
  text: {
    fontSize: Dimensions.get("window").width * 0.04,
    lineHeight: Dimensions.get("window").height * 0.03,
    textAlign: "justify",
    color: "#ffffff",
  },
});

export default PoliticExplanation;
