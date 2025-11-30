import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";

const ComponenteRefeicao = ({ nome }) => (
  <TouchableOpacity style={styles.botaoRefeicao}>
    <Text style={styles.nomeRefeicao}>{nome}</Text>
    <Text style={styles.iconeAdicionar}>+</Text>
  </TouchableOpacity>
);

const CardDia = ({ dia, numero }) => (
  <View style={styles.cardDia}>
    <View style={styles.headerDia}>
      <Text style={styles.diaSemana}>{dia}</Text>
      <Text style={styles.numeroDia}>{numero}</Text>
    </View>

    <ComponenteRefeicao nome="Café da manhã" />
    <ComponenteRefeicao nome="Almoço" />
    <ComponenteRefeicao nome="Jantar" />
  </View>
);

const CardResumoSemanal = ({
  refeicoesPlanejadas = 0,
  caloriasTotais = "-",
  proteinas = "-",
  carboidratos = "-",
}) => (
  <View style={styles.cardResumo}>
    <View style={styles.headerResumo}>
      <Text style={styles.textoResumoTitulo}>🍳 Resumo semanal</Text>
    </View>

    <View style={styles.areaContador}>
      <Text style={styles.contadorRefeicoes}>{refeicoesPlanejadas}</Text>
      <Text style={styles.textoPlanejadas}>Refeições planejadas</Text>
    </View>

    <View style={styles.areaMetricas}>
      <Text>Calorias totais: {caloriasTotais}</Text>
      <Text>Proteínas: {proteinas}</Text>
      <Text>Carboidratos: {carboidratos}</Text>
    </View>
  </View>
);

export default function Planejamento() {
  return (
    <View style={styles.containerPrincipal}>

      <ScrollView style={styles.scrollViewContent}>

        <Text style={styles.tituloPrincipal}>Planejamentos</Text>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.areaDias}
        >
          <TouchableOpacity style={styles.iconeNavegacao}>
            <Text style={styles.seta}>{"<"}</Text>
          </TouchableOpacity>

          <CardDia dia="Seg" numero="1" />
          <CardDia dia="Ter" numero="2" />
          <CardDia dia="Qua" numero="3" />

        </ScrollView>

        <CardResumoSemanal />

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

  tituloPrincipal: {
    fontSize: 26,
    fontWeight: "600",
    color: "#44a67f",
    textAlign: "center",
    marginBottom: 30,
  },

  areaDias: {
    flexDirection: "row",
    marginBottom: 30,
  },

  iconeNavegacao: {
    backgroundColor: "#e7e7e7",
    borderRadius: 50,
    width: 25,
    height: 25,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
    marginTop: 10,
  },

  seta: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#555",
  },

  cardDia: {
    width: 130,
    backgroundColor: "#fff",
    borderRadius: 12,
    marginHorizontal: 8,
    padding: 8,
    alignItems: "center",
    elevation: 2,
  },

  headerDia: {
    marginBottom: 10,
    alignItems: "center",
  },

  diaSemana: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
  },

  numeroDia: {
    fontSize: 12,
    color: "#999",
  },

  botaoRefeicao: {
    backgroundColor: "#f6f6f6",
    borderRadius: 8,
    width: "100%",
    paddingVertical: 12,
    paddingHorizontal: 10,
    marginBottom: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  nomeRefeicao: {
    fontSize: 13,
    fontWeight: "500",
    color: "#333",
  },

  iconeAdicionar: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#999",
  },

  cardResumo: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 16,
    marginBottom: 20,
    elevation: 4,
  },

  headerResumo: {
    marginBottom: 15,
  },

  textoResumoTitulo: {
    fontSize: 16,
    fontWeight: "600",
    color: "#f0ad4e",
  },

  areaContador: {
    backgroundColor: "#f6f6f6",
    borderRadius: 8,
    paddingVertical: 15,
    marginBottom: 15,
    alignItems: "center",
  },

  contadorRefeicoes: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#44a67f",
  },

  textoPlanejadas: {
    fontSize: 14,
    color: "#666",
  },

  areaMetricas: {
    marginTop: 10,
  },
});
