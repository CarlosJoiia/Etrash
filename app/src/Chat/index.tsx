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
  return (
    <View style={styles.container}>
      <Text>aaaa</Text>
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
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    padding: 10,
    backgroundColor: "#F0F0F5",
  },
  backArrow: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  title: {
    color: "#322153",
    fontSize: 24,
    fontWeight: "bold",
  },
  map: {
    flex: 1,
    marginBottom: 20,
  },
  infoContainer: {
    backgroundColor: "#F0F0F5",
    padding: 20,
    elevation: 3,
    borderRadius: 10,
    marginHorizontal: 10,
  },
  addressContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  locationIcon: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  contactContainer: {
    marginBottom: 20,
  },
  section: {
    color: "#322153",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  text: {
    color: "#6C6C80",
    fontSize: 16,
    marginBottom: 5,
  },
});
