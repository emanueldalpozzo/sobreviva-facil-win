import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useState, useEffect } from "react";
import { theme } from "../../styles/theme";

interface Props {
  nome: string;
  frequencia: string;
  icone: string;
}

export default function RotinaItem({ nome, frequencia, icone }: Props) {
  const [feito, setFeito] = useState(false);

  useEffect(() => {
    if (feito) console.log(`Tarefa "${nome}" marcada como feita`);
  }, [feito]);

  return (
    <TouchableOpacity style={[styles.card, feito && styles.done]} onPress={() => setFeito(!feito)}>
      <MaterialCommunityIcons
        name={icone as any}
        size={28}
        color={feito ? "#fff" : theme.colors.primary}
      />
      <View style={styles.textContainer}>
        <Text style={[styles.nome, feito && styles.nomeFeito]}>{nome}</Text>
        <Text style={[styles.frequencia, feito && styles.frequenciaFeita]}>{frequencia}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: theme.colors.card,
    borderRadius: theme.radius.medium,
    padding: theme.spacing.medium,
    marginBottom: theme.spacing.small,
  },
  done: {
    backgroundColor: theme.colors.primary,
  },
  textContainer: {
    marginLeft: 12,
  },
  nome: {
    fontSize: 16,
    fontWeight: "bold",
  },
  frequencia: {
    color: "#666",
  },
  nomeFeito: {
    color: "#fff",
  },
  frequenciaFeita: {
    color: "#e0e0e0",
  },
});
