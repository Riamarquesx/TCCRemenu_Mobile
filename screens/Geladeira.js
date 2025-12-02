import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Modal,
  TextInput,
  ScrollView,
  Platform,
  StatusBar
} from "react-native";

// --- ESTILOS ---
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  appHeader: {
    paddingHorizontal: 20,
    paddingBottom: 20,
    alignItems: "center",
    backgroundColor: "#fff",
  },
  logoText: { fontSize: 18, fontWeight: "bold", color: "#D13838" },
  screenTitle: { fontSize: 24, fontWeight: "700", marginTop: 15, color: "#333" },
  scrollContent: { paddingHorizontal: 20, paddingBottom: 100 },
  categoryTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
    marginTop: 20,
    marginBottom: 10,
  },
  cardItem: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F7F7F7",
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
  },
  itemName: { fontSize: 16, fontWeight: "700", color: "#333" },
  itemDetails: { fontSize: 13, color: "#666", marginTop: 2 },
  iconContainer: { flexDirection: "row" },
  iconStyle: { fontSize: 18, color: "#D13838" },
  readMoreButton: {
    backgroundColor: "#E6693B",
    paddingVertical: 10,
    paddingHorizontal: 25,
    borderRadius: 20,
    alignSelf: "flex-start",
    marginTop: 15,
    marginBottom: 20,
  },
  readMoreText: { color: "#fff", fontWeight: "bold", fontSize: 14 },
  addButton: {
    position: "absolute",
    bottom: 20,
    alignSelf: "center",
    backgroundColor: "#fff",
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 30,
  },
  addButtonText: { color: "#E6693B", fontWeight: "bold", fontSize: 16 },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalView: {
    width: "85%",
    backgroundColor: "white",
    borderRadius: 10,
    padding: 20,
  },
  modalHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 15,
  },
  modalTitle: { fontSize: 18, fontWeight: "bold", color: "#E6693B" },
  modalInput: {
    height: 40,
    borderColor: "#ddd",
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 15,
    paddingHorizontal: 10,
  },
  modalAddButton: {
    backgroundColor: "#E6693B",
    padding: 12,
    borderRadius: 5,
    alignItems: "center",
    marginTop: 10,
  },
  modalAddButtonText: { color: "white", fontWeight: "bold", fontSize: 16 },
});

// --- COMPONENTE ITEM ---
const ItemCard = ({ nome, quantidade, validade }) => (
  <View style={styles.cardItem}>
    <View style={{ flex: 1 }}>
      <Text style={styles.itemName}>{nome}</Text>
      <Text style={styles.itemDetails}>Quantidade: {quantidade}</Text>
      <Text style={styles.itemDetails}>Válido até: {validade}</Text>
    </View>
    <View style={styles.iconContainer}>
      <TouchableOpacity style={{ marginRight: 15 }}>
        <Text style={styles.iconStyle}>✏️</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.iconStyle}>🗑️</Text>
      </TouchableOpacity>
    </View>
  </View>
);

// --- MODAL ---
const AdicionarIngredienteModal = ({ isVisible, onClose }) => {
  const [nome, setNome] = useState("");
  const [quantidade, setQuantidade] = useState("");
  const [categoria, setCategoria] = useState("");

  return (
    <Modal visible={isVisible} animationType="fade" transparent>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <View style={styles.modalHeader}>
            <Text style={styles.modalTitle}>Adicionar Ingrediente</Text>
            <TouchableOpacity onPress={onClose}>
              <Text style={{ fontSize: 18 }}>X</Text>
            </TouchableOpacity>
          </View>
          <TextInput
            style={styles.modalInput}
            placeholder="Nome"
            value={nome}
            onChangeText={setNome}
          />
          <TextInput
            style={styles.modalInput}
            placeholder="Quantidade"
            value={quantidade}
            onChangeText={setQuantidade}
          />
          <TextInput
            style={styles.modalInput}
            placeholder="Categoria"
            value={categoria}
            onChangeText={setCategoria}
          />
          <TouchableOpacity
            style={styles.modalAddButton}
            onPress={() => {
              alert(`Adicionando: ${nome}`);
              onClose();
            }}
          >
            <Text style={styles.modalAddButtonText}>Adicionar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

// --- TELA PRINCIPAL ---
const GeladeiraScreen = () => {
  const [isModalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.appHeader}>
        <Text style={styles.logoText}>Remenu</Text>
        <Text style={styles.screenTitle}>Minha Geladeira</Text>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.categoryTitle}>Vegetais</Text>
        <ItemCard nome="Tomate" quantidade="3 unidades" validade="14/01/2025" />

        <Text style={styles.categoryTitle}>Proteínas</Text>
        <ItemCard nome="Ovos" quantidade="1 dúzia" validade="18/03/2025" />

        <Text style={styles.categoryTitle}>Laticínios</Text>
        <ItemCard nome="Leite" quantidade="1 litro" validade="17/01/2025" />

        <TouchableOpacity style={styles.readMoreButton}>
          <Text style={styles.readMoreText}>Ler mais</Text>
        </TouchableOpacity>
      </ScrollView>

      <TouchableOpacity
        style={styles.addButton}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.addButtonText}>+ Adicionar Ingrediente</Text>
      </TouchableOpacity>

      <AdicionarIngredienteModal
        isVisible={isModalVisible}
        onClose={() => setModalVisible(false)}
      />
    </View>
  );
};

export default GeladeiraScreen;
