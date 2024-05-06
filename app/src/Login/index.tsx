import React, { useEffect, useState, useCallback } from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Text,
  ActivityIndicator,
} from "react-native";
import { WebView } from "react-native-webview";
import { useNavigation } from "@react-navigation/native";

const generateRandomNumbers = () => {
  const numbers = Array.from(
    { length: 4 },
    () => Math.floor(Math.random() * 100) + 1
  );
  return numbers;
};

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [showWebView, setShowWebView] = useState(false);
  const [loading, setLoading] = useState(false);

  const navigation = useNavigation<any>();

  const handleLogin = async () => {
    if (email === "" || senha === "") {
      alert("Preencha os campos de email e senha");
      return;
    }
    setLoading(true); // Mostrar a view de loading

    try {
      const URL = "http://192.168.0.118:1403/";
      const algorithm = "aes-256-cbc";
      const KEYcodi = "CC@@ll00$1403";

      const response = await fetch("http://192.168.0.118:1403/Login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          senha: senha,
        }),
      });
      if (response.ok) {
        const data = await response.json();
        if (data.token === "Authenticated") {
          navigation.navigate("Main");
        }
      } else {
        const data = await response.json();
        alert(data.mensagem);
      }
    } catch (error) {
      console.error("Erro ao fazer login:", error);
      alert("Erro ao fazer login");
    } finally {
      setLoading(false); // Esconder a view de loading
    }
  };

  const handleRegister = useCallback(() => {
    setShowWebView(true);
  }, [setShowWebView]);

  const handleCloseWebView = () => {
    setShowWebView(false);
  };

  return (
    <View style={styles.container}>
      {!showWebView ? (
        <>
          <View style={styles.headercontainer}>
            <Text style={styles.title}>Faça login</Text>
            <Text style={styles.subTitle}>Informe suas credenciais</Text>
          </View>
          <View style={styles.formContainer}>
            <TextInput
              style={styles.input}
              placeholder="Email"
              value={email}
              onChangeText={(text) => setEmail(text)}
            />
            <TextInput
              style={styles.input}
              placeholder="Senha"
              value={senha}
              onChangeText={(text) => setSenha(text)}
              secureTextEntry
            />
            <TouchableOpacity
              style={styles.buttonContainer}
              onPress={handleLogin}
            >
              <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.registerTextContainer}
              onPress={handleRegister}
            >
              <Text style={styles.registerText}>
                Não tem uma conta? Registrar
              </Text>
            </TouchableOpacity>
          </View>
          {loading ? (
            <View style={styles.loadingContainer}>
              <ActivityIndicator size="large" color="#3CB371" />
            </View>
          ) : null}
        </>
      ) : (
        <>
          <TouchableOpacity
            style={styles.closeButton}
            onPress={handleCloseWebView}
          >
            <Text style={styles.closeButtonText}>Fechar</Text>
          </TouchableOpacity>
          <WebView
            source={{ uri: "http://192.168.0.118:3000/Cadastro" }}
            style={styles.webview}
          />
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F0F0F5",
    position: "relative",
  },
  headercontainer: {
    height: "45%",
    justifyContent: "flex-end",
    alignItems: "center",
    padding: 20,
    paddingBottom: 10,
  },
  loadingContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    zIndex: 999,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#3CB371",
    marginBottom: 5,
    textAlign: "center",
  },
  subTitle: {
    fontSize: 16,
    fontWeight: "400",
    color: "#6C6C80",
    textAlign: "center",
  },
  formContainer: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: "10%",
  },
  input: {
    height: 40,
    width: "100%",
    backgroundColor: "#FFFFFF",
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 10,
    color: "#6C6C80",
    fontSize: 16,
    paddingVertical: 10,
    textAlignVertical: "center",
  },
  buttonContainer: {
    width: "100%",
    backgroundColor: "#3CB371",
    borderRadius: 10,
    marginBottom: 10,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    fontSize: 18,
    color: "#FFFFFF",
  },
  registerTextContainer: {
    marginTop: 20,
    alignItems: "center",
  },
  registerText: {
    color: "#6C6C80",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "center",
    textDecorationLine: "underline",
  },
  closeButton: {
    position: "absolute",
    top: "5%",
    right: "7%",
    zIndex: 999,
    backgroundColor: "#3CB371",
    padding: 10,
    borderRadius: 5,
  },
  closeButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
  },
  webview: {
    flex: 1,
    marginTop: "10%",
  },
});
