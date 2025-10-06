import { View, Text, StyleSheet, FlatList } from "react-native";
import { theme } from "../../../styles/theme";
import DicaCard from "../../../src/components/DicaCard";

const dicas = [
  { id: "1", categoria: "Economia", texto: "Crie um orçamento" },
  { id: "2", categoria: "Economia", texto: "Use lâmpadas de LED" },
  { id: "3", categoria: "Limpeza", texto: "Use vinagre e bicarbonato para limpar" },
  { id: "4", categoria: "Cozinha", texto: "Planeje suas refeições" },
];

export default function Dicas() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Dicas Essenciais</Text>
      <FlatList data={dicas} keyExtractor={(item) => item.id} renderItem={({ item }) => <DicaCard {...item} />} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
    padding: theme.spacing.medium,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: theme.spacing.medium,
  },
});
