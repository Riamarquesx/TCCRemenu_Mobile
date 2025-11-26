import React from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, ScrollView } from "react-native";

export default function Receitas() {
  return (
    <ScrollView style={styles.container}>

      {/* HEADER */}
      <View style={styles.header}>
        <Text style={styles.titulo}>Receitas</Text>
        <Text style={styles.subtitulo}>
          Descubra receitas deliciosas e saudáveis{"\n"}
          para todas as ocasiões
        </Text>
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

      {/* LISTA DE RECEITAS */}
      <View style={styles.listaReceitas}>

        {/* CARD 1 */}
        <View style={styles.card}>
          <Image
            source={require('../assets/sopa.jpg')}
            style={styles.cardImg}
          />

          <TouchableOpacity style={styles.favorito}>
            <Text style={styles.favoritoIcon}>♡</Text>
          </TouchableOpacity>

          <View style={styles.cardBody}>
            <Text style={styles.cardTitulo}>Sopa de Legumes Antidesperdício</Text>
            <Text style={styles.cardDescricao}>
              Uma sopa nutritiva e saborosa que aproveita vegetais que estão perdendo a firmeza.
            </Text>

            <View style={styles.cardInfo}>
              <Text>⏱ 25 min</Text>
              <Text>👥 4 pessoas</Text>
              <Text>⭐ 4.7</Text>
            </View>
          </View>
        </View>

        {/* CARD 2 */}
        <View style={styles.card}>
          <Image
            source={require('../assets/frango.jpg')}
            style={styles.cardImg}
          />

          <TouchableOpacity style={styles.favorito}>
            <Text style={styles.favoritoIcon}>♡</Text>
          </TouchableOpacity>

          <View style={styles.cardBody}>
            <Text style={styles.cardTitulo}>Frango com Arroz Integral</Text>
            <Text style={styles.cardDescricao}>
              Prato completo e balanceado, com proteínas e carboidratos complexos.
            </Text>

            <View style={styles.cardInfo}>
              <Text>⏱ 25 min</Text>
              <Text>👥 4 pessoas</Text>
              <Text>⭐ 4.7</Text>
            </View>
          </View>
        </View>

      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f6f6f6",
    padding: 16,
  },

  /* HEADER */
  header: {
    marginBottom: 20,
  },
  titulo: {
    fontSize: 26,
    fontWeight: "600",
    color: "#44a67f",
  },
  subtitulo: {
    color: "#666",
    fontSize: 13,
    marginTop: 4,
    lineHeight: 18,
  },

  /* BUSCA */
  buscaWrapper: {
    marginBottom: 20,
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
  },
  btnFiltrosTexto: {
    fontSize: 14,
    fontWeight: "500",
  },

  /* CARDS */
  listaReceitas: {
    gap: 18,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 12,
    overflow: "hidden",
    marginBottom: 20,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },
    elevation: 4,
  },
  cardImg: {
    width: "100%",
    height: 160,
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
  favoritoIcon: {
    fontSize: 20,
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
    fontSize: 12,
  },
});
