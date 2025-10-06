import { View, Text, FlatList, StyleSheet } from "react-native";
import { theme } from "../../../styles/theme";
import RotinaItem from "../../../src/components/RotinaItem";

const tarefas = [
  { id: "1", nome: "Trocar lençóis", frequencia: "A cada 7 dias", icone: "bed-outline" },
  { id: "2", nome: "Lavar toalhas", frequencia: "A cada 3 dias", icone: "towel" },
  { id: "3", nome: "Limpar banheiro", frequencia: "Semanalmente", icone: "shower" },
  { id: "4", nome: "Limpar cozinha", frequencia: "Semanalmente", icone: "silverware-clean" },
  { id: "5", nome: "Limpar geladeira", frequencia: "Mensalmente", icone: "fridge-outline" },
  { id: "6", nome: "Limpar micro-ondas", frequencia: "A cada 2 semanas", icone: "microwave" },
  { id: "7", nome: "Limpar pisos", frequencia: "Semanalmente", icone: "broom" },
];

export default function Rotina() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tarefas Domésticas</Text>
      <FlatList
        data={tarefas}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <RotinaItem {...item} />}
      />
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
