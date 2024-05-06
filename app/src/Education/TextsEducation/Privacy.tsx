import React, { useEffect } from "react";
import { ScrollView, Text, StyleSheet, View, Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const PrivacyPolicyScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      title: "Privacidade",
    });
  }, [navigation]);
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.content}>
        <Text style={styles.heading}>Política de Privacidade</Text>
        <Text style={styles.text}>
          Esta Política de Privacidade descreve como as informações pessoais são
          coletadas, usadas e compartilhadas quando você utiliza nosso
          aplicativo.
        </Text>

        <Text style={styles.subheading}>Informações que Coletamos</Text>
        <Text style={styles.subtext}>
          Ao utilizar nosso aplicativo, podemos coletar as seguintes informações
          pessoais:
        </Text>
        <Text style={styles.bullet}>- Nome:</Text>
        <Text style={styles.description}>
          Coletamos seu nome para identificar sua empresa e personalizar sua
          experiência dentro do aplicativo.
        </Text>
        <Text style={styles.bullet}>- E-mail:</Text>
        <Text style={styles.description}>
          Solicitamos seu e-mail para criar uma conta e permitir que você se
          cadastre no nosso aplicativo. Além disso, utilizamos o e-mail para
          enviar comunicações importantes, como confirmações de conta e
          atualizações de serviço.
        </Text>
        <Text style={styles.bullet}>- Telefone:</Text>
        <Text style={styles.description}>
          Pedimos seu número de telefone para facilitar o contato, caso seja
          necessário fornecer suporte ou assistência relacionada ao uso do
          aplicativo.
        </Text>
        <Text style={styles.bullet}>- CNPJ:</Text>
        <Text style={styles.description}>
          Solicitamos o CNPJ para verificar a autenticidade da empresa que está
          se cadastrando em nosso aplicativo.
        </Text>

        <Text style={styles.subheading}>Como Utilizamos Suas Informações</Text>
        <Text style={styles.subtext}>
          Utilizamos as informações coletadas para:
        </Text>
        <Text style={styles.bullet}>
          - Criar e gerenciar sua conta dentro do aplicativo.
        </Text>
        <Text style={styles.bullet}>
          - Verificar a autenticidade da empresa através do CNPJ fornecido.
        </Text>
        <Text style={styles.bullet}>
          - Entrar em contato com você, se necessário, para fornecer suporte ou
          assistência relacionada ao uso do aplicativo.
        </Text>
        <Text style={styles.bullet}>
          - Enviar comunicações importantes, como confirmações de conta e
          atualizações de serviço.
        </Text>

        <Text style={styles.subheading}>Compartilhamento de Informações</Text>
        <Text style={styles.description}>
          Não compartilhamos suas informações pessoais com terceiros, exceto
          quando necessário para operar nosso aplicativo, cumprir obrigações
          legais ou proteger nossos direitos.
        </Text>

        <Text style={styles.subheading}>Seus Direitos</Text>
        <Text style={styles.description}>
          Você tem o direito de acessar, corrigir e excluir suas informações
          pessoais. Para exercer esses direitos, entre em contato conosco
          através dos canais fornecidos no final desta Política de Privacidade.
        </Text>

        <Text style={styles.subheading}>
          Atualizações da Política de Privacidade
        </Text>
        <Text style={styles.description}>
          Podemos atualizar esta Política de Privacidade periodicamente para
          refletir alterações em nossas práticas de privacidade. Recomendamos
          que você revise esta página regularmente para estar ciente de
          quaisquer alterações.
        </Text>

        <Text style={styles.contact}>Contato: E-trash@gmail.com</Text>
        <Text style={styles.lastUpdated}>
          Data de última atualização: 04/05/2024
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#3CB371",
    paddingHorizontal: windowWidth * 0.05,
    paddingVertical: windowHeight * 0.03,
    marginTop: "3%",
  },
  content: {
    alignItems: "center",
  },
  heading: {
    fontSize: windowWidth * 0.06,
    fontWeight: "bold",
    marginBottom: windowHeight * 0.02,
    textAlign: "center",
    color: "white",
  },
  subheading: {
    fontSize: windowWidth * 0.05,
    fontWeight: "bold",
    marginTop: windowHeight * 0.03,
    marginBottom: windowHeight * 0.015,
    textAlign: "left",
    color: "white",
  },
  text: {
    marginBottom: windowHeight * 0.015,
    textAlign: "justify",
    fontSize: windowWidth * 0.04,
    color: "white",
  },
  subtext: {
    marginBottom: windowHeight * 0.01,
    textAlign: "justify",
    fontSize: windowWidth * 0.04,
    color: "white",
  },
  bullet: {
    marginBottom: windowHeight * 0.005,
    fontWeight: "bold",
    fontSize: windowWidth * 0.04,
    color: "white",
  },
  description: {
    marginBottom: windowHeight * 0.01,
    textAlign: "justify",
    fontSize: windowWidth * 0.04,
    color: "white",
  },
  lastUpdated: {
    marginTop: windowHeight * 0.02,
    textAlign: "center",
    fontStyle: "italic",
    fontSize: windowWidth * 0.035,
  },
  contact: {
    marginTop: windowHeight * 0.01,
    textAlign: "center",
    color: "blue",
    fontSize: windowWidth * 0.04,
  },
});

export default PrivacyPolicyScreen;
