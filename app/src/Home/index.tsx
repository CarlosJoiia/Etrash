import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  Platform,
  Image,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import MapView, { Marker } from "react-native-maps";
import { categories } from "./categories";
import { useNavigation } from "@react-navigation/native";

export interface IMarker {
  id: string;
  name: string;
  category: string;
  contact: string;
  description: string;
  latitude: number;
  longitude: number;
}

export default function Home() {
  const [markers, setMarkers] = useState<IMarker[]>([]);
  const [mapType, setMapType] = useState<"standard" | "satellite">("standard");
  const navigation = useNavigation<any>();
  const [filter, setFilter] = useState("");
  const filteredData = markers.filter((m) => m.category == filter);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const IPs = "192.168.0.118";
        const response = await fetch(`http://${IPs}:1403/list`);
        const { Cooperativas, Empresas } = await response.json();
        const combinedMarkers = [...Cooperativas, ...Empresas];
        setMarkers(combinedMarkers);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  if (!markers || markers.length == 0) {
    return (
      <View style={[styles.container, styles.loadingContainer]}>
        <ActivityIndicator size="large" color="#3CB371" />
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headercontainer}>
        <Text style={styles.title}>Bem vindo</Text>
        <Text style={styles.subTitle}>Encontre Um EcoPonto</Text>
      </View>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: -23.55052, // São Paulo latitude padrão
          longitude: -46.633308, // São Paulo longitude padrão
          latitudeDelta: 0.5,
          longitudeDelta: 0.5,
        }}
        mapType={mapType} // Aqui está a propriedade para definir o modo do mapa
      >
        {(filter ? filteredData : markers).map((item) => {
          const categoryColor =
            categories.find((cat) => cat.key === item.category)?.color || "";
          return (
            <Marker
              key={item.id}
              coordinate={{
                latitude: item.latitude,
                longitude: item.longitude,
              }}
              pinColor={categoryColor}
              onPress={() => navigation.navigate("Detail", item)}
            />
          );
        })}
      </MapView>

      <View style={styles.categoryContainer}>
        <FlatList
          data={categories}
          horizontal
          showsHorizontalScrollIndicator={false}
          ItemSeparatorComponent={() => <View style={{ width: 10 }} />}
          contentContainerStyle={{
            alignContent: "center",
          }}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => {
                setFilter(filter == item.key ? "" : item.key);
              }}
              style={[
                styles.categoryItem,
                filter == item.key ? styles.selectedCategory : null,
              ]}
              key={item.key}
            >
              <Image style={styles.categoryImage} source={item.Image} />
              <Text style={styles.categoryText}>{item.label}</Text>
            </TouchableOpacity>
          )}
        />
      </View>
      <TouchableOpacity
        style={styles.mapTypeButton}
        onPress={() =>
          setMapType(mapType === "standard" ? "satellite" : "standard")
        }
      >
        <Image
          style={styles.mapTypeButtonImage}
          source={
            mapType === "standard"
              ? require("../../assets/satellite.png")
              : require("../../assets/map.png")
          }
        />
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  loadingContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  headercontainer: {
    padding: 20,
    paddingTop: Platform.OS == "android" ? 50 : 0,
  },
  title: {
    fontSize: 24,
    fontWeight: "400",
    color: "#322153",
  },
  subTitle: {
    fontSize: 14,
    fontWeight: "400",
    color: "#6c6c80",
  },
  map: {
    flex: 1,
  },
  categoryContainer: {
    padding: 10,
    alignItems: "center",
  },
  categoryItem: {
    height: 110,
    backgroundColor: "#f0f0f5",
    width: 100,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  categoryImage: {
    width: 50,
    height: 50,
  },
  categoryText: {
    textAlign: "center",
    color: "#6c6c80",
  },
  selectedCategory: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#322153",
  },
  mapTypeButton: {
    position: "absolute",
    bottom: 135,
    right: "2%",
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  mapTypeButtonImage: {
    width: 30,
    height: 30,
  },
});
