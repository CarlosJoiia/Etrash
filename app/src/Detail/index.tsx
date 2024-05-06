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
import { IMarker } from "../Home";
import MapView, { Marker } from "react-native-maps";

type DetailRoute = RouteProp<{ detail: IMarker }, "detail">;

export default function Detail() {
  const { params } = useRoute<DetailRoute>();
  const [address, setAddress] = useState<any>();
  const navigation = useNavigation();

  useEffect(() => {
    const coordenadas = `${params.latitude},${params.longitude}`;
    const chaveAPI =
      "AmBiooU8MSSTUBIJ2nQsjrRH-WUGCeg1qvtTji7_E3FAvigw8wKLmmA3ANjeXKgG"; // Substitua pela sua chave de API do Bing Maps

    fetch(
      `http://dev.virtualearth.net/REST/v1/Locations/${coordenadas}?key=${chaveAPI}`
    )
      .then((response) => response.json())
      .then((data) => {
        // Verifica se a resposta foi bem sucedida e se há resultados
        if (
          data &&
          data.resourceSets &&
          data.resourceSets.length > 0 &&
          data.resourceSets[0].resources &&
          data.resourceSets[0].resources.length > 0
        ) {
          const resultado = data.resourceSets[0].resources[0];
          setAddress(resultado.address);
          navigation.setOptions({
            title: params.name,
          });
        } else {
          console.log(
            "Não foi possível encontrar o endereço para as coordenadas fornecidas."
          );
        }
      })
      .catch((error) => {
        console.error("Ocorreu um erro ao buscar o endereço:", error);
      });
  }, []);

  if (!address || Object.keys(address).length === 0) {
    return (
      <View style={[styles.container, styles.loadingContainer]}>
        <ActivityIndicator size="large" color="#3CB371" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
        ></TouchableOpacity>
        <Text style={styles.title}>{params.name}</Text>
      </View>

      <MapView
        style={styles.map}
        mapType="satellite"
        region={{
          latitude: params.latitude,
          longitude: params.longitude,
          latitudeDelta: 0.0005,
          longitudeDelta: 0.0005,
        }}
      >
        <Marker
          coordinate={{
            latitude: params.latitude,
            longitude: params.longitude,
          }}
          title={params.name}
          description={params.description}
        />
      </MapView>

      <View style={styles.infoContainer}>
        <View style={styles.addressContainer}>
          <View>
            <Text style={styles.section}>Endereço</Text>
            <Text style={styles.text}>{address.addressLine}</Text>
            <Text style={styles.text}>
              {address.locality}, {address.adminDistrict}
            </Text>
            <Text style={styles.text}>{address.postalCode}</Text>
          </View>
        </View>

        <View style={styles.contactContainer}>
          <Text style={styles.section}>Contato</Text>
          <Text style={styles.text}>{params.contact}</Text>
        </View>
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
    marginLeft: "2%",
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
