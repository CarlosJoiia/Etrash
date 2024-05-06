import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const EWasteExplanation = () => {
  return (
    <View style={styles.container}>
      <View style={styles.rectangle}>
        <Text style={styles.title}><Text style={styles.emphasis}>O que é </Text>E-waste?</Text>
        <Text style={styles.paragraph}>
          O termo "E-waste" é utilizado para designar os resíduos eletrônicos que não podem ser reutilizados,
          mas que podem ser reciclados. 
        </Text>
        <Text style={styles.title}>Observe alguns exemplos abaixo:</Text>
      </View>
      <View style={styles.examples}>
        <Icon name="mobile" size={windowWidth * 0.15} color="white" />
        <Text style={styles.exampleText}>
          Celulares e tablets, Ao serem descartados, os celulares e tablets são jogados em aterros sanitários.
        </Text>
      </View>
      <View style={styles.examples}>
        <Icon name="tv" size={windowWidth * 0.15} color="white" />
        <Text style={styles.exampleText}>
          TVs e monitores, Estes dispositivos podem conter substâncias perigosas, como mercúrio e chumbo.
        </Text>
      </View>
      <View style={styles.examples}>
        <Icon name="plug" size={windowWidth * 0.15} color="white" />
        <Text style={styles.exampleText}>
          Cabos e carregadores, Muitas vezes, são descartados junto com outros resíduos eletrônicos.
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: '8%',
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: windowWidth * 0.06, // Tamanho do título responsivo
    fontWeight: 'bold',
    marginBottom: windowHeight * 0.02, // Espaçamento inferior responsivo
  },
  emphasis: {
    fontStyle: 'italic',
    fontWeight: 'bold',
  },
  paragraph: {
    fontSize: windowWidth * 0.04, // Tamanho do parágrafo responsivo
    lineHeight: windowHeight * 0.03, // Espaçamento entre linhas responsivo
    textShadowColor: 'rgba(0, 0, 0, 0.2)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1,
  },
  examples: {
    flexDirection: 'row',
    marginBottom: windowHeight * 0.02, // Espaçamento inferior responsivo
    borderColor: '#3CB371',
    borderWidth: 2,
    minHeight: windowHeight * 0.1, // Altura mínima responsiva
    padding: windowWidth * 0.03, // Espaçamento interno responsivo
    borderTopRightRadius: windowWidth * 0.1, // Raio do canto responsivo
    borderBottomLeftRadius: windowWidth * 0.1,
    backgroundColor: '#3CB371',
  },
  exampleText: {
    marginLeft: windowWidth * 0.03, // Espaçamento à esquerda responsivo
    flex: 1,
    fontSize: windowWidth * 0.04, // Tamanho do texto responsivo
    color: 'white',
  },
  rectangle: {
    backgroundColor: '#F0F0F5',
    minHeight: windowHeight * 0.2, // Altura mínima responsiva
    padding: windowWidth * 0.03, // Espaçamento interno responsivo
    borderRadius: windowWidth * 0.05, // Raio do canto responsivo
    marginBottom: windowHeight * 0.05, // Espaçamento inferior responsivo
  },
});

export default EWasteExplanation;
