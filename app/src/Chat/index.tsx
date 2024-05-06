import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import React, { useEffect, useState } from "react";

import {
  Text,
  View,
  StyleSheet,
  ActivityIndicator,
  Image,
  TouchableOpacity,
} from "react-native";

export default function Chat() {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      title: "Chat de Mensagens",
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <View style={styles.headercontainer}>
        <Text style={styles.title}>Em Desenvolvimento</Text>
      </View>
      <View style={styles.loadingContainer}>
        <Image
          source={require("../../assets/OIG1__2_-removebg-preview.png")}
          style={styles.backArrow}
        ></Image>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F0F0F5",
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  backArrow: {
    width: "80%",
    height: "80%",
    marginRight: 10,
  },
  headercontainer: {
    height: "20%",
    justifyContent: "flex-end",
    alignItems: "center",
    padding: 20,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    padding: 10,
    backgroundColor: "#F0F0F5",
  },

  title: {
    color: "#322153",
    fontSize: 24,
    fontWeight: "bold",
  },
  text: {
    color: "#6C6C80",
    fontSize: 16,
    marginBottom: 5,
  },
});
