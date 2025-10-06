import { View, Text, StyleSheet, TouchableOpacity, ActionSheetIOS } from "react-native";
import { useRouter } from "expo-router";
import { theme } from "../../styles/theme";
import { MaterialCommunityIcons } from "@expo/vector-icons";

interface Props {
  categoria: string;
  texto: string;
}

export default function DicaCard({ categoria, texto }: Props) {
  const router = useRouter();

  const abrirMenu = () => {
    ActionSheetIOS.showActionSheetWithOptions(
      {
        options: ["Cancelar", "Ver detalhes", "Compartilhar"],
        cancelButtonIndex: 0,
      },
      (buttonIndex) => {
        if (buttonIndex === 1) router.push(`/detalhe?texto=${encodeURIComponent(texto)}`);
      }
    );
  };

  return (
    <TouchableOpacity style={styles.card} onPress={abrirMenu}>
      <MaterialCommunityIcons name="lightbulb-outline" size={24} color={theme.colors.primary} />
      <View style={styles.textContainer}>
        <Text style={styles.categoria}>{categoria}</Text>
        <Text style={styles.texto}>{texto}</Text>
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
  textContainer: {
    marginLeft: 12,
  },
  categoria: {
    fontWeight: "bold",
    color: "#666",
  },
  texto: {
    color: theme.colors.text,
  },
});
