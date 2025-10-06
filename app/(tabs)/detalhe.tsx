import { View, Text, StyleSheet } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { theme } from "../../styles/theme";

export default function Detalhe() {
  const { texto } = useLocalSearchParams();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Detalhe da Dica</Text>
      <Text style={styles.content}>{texto}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
    padding: theme.spacing.large,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: theme.spacing.medium,
  },
  content: {
    fontSize: 16,
    color: theme.colors.text,
  },
});
