import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";

const CardReceitaFavorita = ({
  titulo,
  descricao,
  tempo,
  porcoes,
  avaliacao,
  imageSource,
}) => (
  <View style={styles.card}>
        <Image
            source={require("../assets/frango.jpg")}
            style={styles.cardImg}
        />

    <TouchableOpacity style={styles.favorito}>
      <Ionicons name="heart" size={22} color="#44a67f" />
    </TouchableOpacity>

    <View style={styles.cardBody}>
      <Text style={styles.cardTitulo}>{titulo}</Text>
      <Text style={styles.cardDescricao}>{descricao}</Text>

      <View style={styles.cardInfo}>
        <Text>⏱ {tempo}</Text>
        <Text>👥 {porcoes}</Text>
        <Text>⭐ {avaliacao}</Text>
      </View>
    </View>
  </View>
);

export default function Favoritos() {
  return (
    <View style={styles.containerPrincipal}>
      <ScrollView style={styles.scrollViewContent}>
        {/* HEADER */}
        <View style={styles.header}>
          <Text style={styles.titulo}>Minhas receitas favoritas</Text>

          <Ionicons name="heart" size={35} color="#44a67f" style={styles.coracao} />
        </View>

        {/* BUSCA */}
        <View style={styles.buscaWrapper}>
          <TextInput
            style={styles.campoBusca}
            placeholder="Buscar receitas..."
            placeholderTextColor="#777"
          />

          <TouchableOpacity style={styles.btnFiltros}>
            <Text style={styles.btnFiltrosTexto}>Filtros</Text>
          </TouchableOpacity>
        </View>

        {/* LISTA */}
        <View style={styles.listaFavoritos}>
          <Text style={styles.contador}>1 receita salva</Text>

          <CardReceitaFavorita
            titulo="Sopa de Legumes Antidesperdício"
            descricao="Uma sopa nutritiva que aproveita vegetais próximos do vencimento."
            tempo="25 min"
            porcoes="4 pessoas"
            avaliacao="4.7"
            imageSource="https://i.imgur.com/kS5k2Zc.png"
          />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  containerPrincipal: {
    flex: 1,
    backgroundColor: "#f6f6f6",
  },

  scrollViewContent: {
    padding: 16,
    paddingTop: 50,
  },

  // HEADER
  header: {
    marginBottom: 30,
    alignItems: "center",
  },

  titulo: {
    fontSize: 26,
    fontWeight: "600",
    color: "#333",
    textAlign: "center",
  },

  coracao: {
    marginTop: 5,
  },

  // BUSCA
  buscaWrapper: {
    marginBottom: 30,
  },

  campoBusca: {
    width: "100%",
    backgroundColor: "#fff",
    borderRadius: 8,
    borderColor: "#ddd",
    borderWidth: 1,
    padding: 12,
    marginBottom: 8,
    fontSize: 14,
  },

  btnFiltros: {
    backgroundColor: "#e7e7e7",
    padding: 10,
    borderRadius: 8,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
  },

  btnFiltrosTexto: {
    fontSize: 14,
    fontWeight: "500",
  },

  // LISTA
  listaFavoritos: {
    gap: 18,
  },

  contador: {
    fontSize: 14,
    fontWeight: "500",
    color: "#555",
    marginBottom: 10,
  },

  // CARD
  card: {
    backgroundColor: "#fff",
    borderRadius: 12,
    overflow: "hidden",
    marginBottom: 20,
    elevation: 4,
  },

  cardImg: {
    width: "100%",
    height: 180,
  },

  favorito: {
    position: "absolute",
    top: 12,
    right: 12,
    backgroundColor: "#fff",
    padding: 6,
    borderRadius: 20,
    elevation: 3,
  },

  cardBody: {
    padding: 14,
  },

  cardTitulo: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 4,
  },

  cardDescricao: {
    fontSize: 13,
    color: "#555",
    marginBottom: 10,
  },

  cardInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 5,
    borderTopWidth: 1,
    borderTopColor: "#eee",
    marginTop: 5,
  },
});
