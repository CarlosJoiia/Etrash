import React, { useEffect } from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import Swiper from "react-native-swiper";
import Icon from "react-native-vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";

const EducationalExplanation = () => {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      title: "Educação",
    });
  }, [navigation]);
  return (
    <Swiper>
      <View style={styles.slide}>
        <View style={styles.cards}>
          <Icon
            name="question-circle"
            color="#fff"
            size={Dimensions.get("window").width * 0.2}
            style={styles.icon}
          />
          <Text style={styles.text}>
            Por que é importante realizar a educação sobre o lixo eletrônico? A
            seguir, alguns exemplos destacam a relevância dessa iniciativa:
          </Text>
        </View>
      </View>
      <View style={styles.slide}>
        <View style={styles.cards}>
          <Icon
            name="globe"
            color="#fff"
            size={Dimensions.get("window").width * 0.2}
            style={styles.icon}
          />
          <Text style={styles.text}>
            Impacto ambiental significativo: A educação sobre o lixo eletrônico
            é essencial porque os dispositivos eletrônicos contêm materiais
            tóxicos, como mercúrio, chumbo e cádmio, que podem contaminar o solo
            e a água se descartados de forma inadequada. Além disso, muitos
            componentes eletrônicos podem levar centenas de anos para se
            decompor, contribuindo para a poluição e degradação do meio
            ambiente.
          </Text>
        </View>
      </View>
      <View style={styles.slide}>
        <View style={styles.cards}>
          <Icon
            name="diamond"
            color="#fff"
            size={Dimensions.get("window").width * 0.2}
            style={styles.icon}
          />
          <Text style={styles.text}>
            Recursos preciosos: Dispositivos eletrônicos descartados
            frequentemente contêm metais preciosos, como ouro, prata e platina,
            além de outros materiais valiosos, como cobre e alumínio. Educar as
            pessoas sobre o lixo eletrônico pode promover a reciclagem e a
            recuperação desses materiais, reduzindo a necessidade de mineração e
            conservando recursos naturais limitados.
          </Text>
        </View>
      </View>
      <View style={styles.slide}>
        <View style={styles.cards}>
          <Icon
            name="plus"
            color="#fff"
            size={Dimensions.get("window").width * 0.2}
            style={styles.icon}
          />
          <Text style={styles.text}>
            Riscos à saúde pública: A falta de educação sobre o lixo eletrônico
            pode resultar em práticas de descarte impróprias, como queima de
            resíduos, o que libera substâncias tóxicas no ar, representando
            riscos à saúde humana. Além disso, trabalhadores em países em
            desenvolvimento muitas vezes são expostos a condições perigosas ao
            lidar com o descarte de eletrônicos sem os devidos cuidados, o que
            pode levar a problemas de saúde graves. Portanto, a educação sobre o
            lixo eletrônico é crucial para mitigar esses riscos à saúde pública.
          </Text>
        </View>
      </View>
    </Swiper>
  );
};

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  cards: {
    width: Dimensions.get("window").width * 0.8,
    height: Dimensions.get("window").height * 0.6,
    backgroundColor: "#3CB371",
    borderRadius: 10,
    justifyContent: "flex-start", // Ajuste para alinhar os itens no topo
    alignItems: "center",
    padding: Dimensions.get("window").width * 0.05,
    margin: Dimensions.get("window").width * 0.05,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    flexDirection: "column", // Ajuste para colocar o ícone em cima do texto
  },
  text: {
    color: "#fff",
    fontSize: Dimensions.get("window").width * 0.04,
    textAlign: "center",
  },
  icon: {},
});

export default EducationalExplanation;
