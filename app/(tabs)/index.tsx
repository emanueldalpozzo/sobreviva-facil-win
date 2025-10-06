import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import { theme } from "../../styles/theme";
export default function Home() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem-vindo(a) ao seu novo lar!</Text>
      <Text style={styles.subtitle}>
        Prepare-se para uma jornada de independência e aprendizado. Aqui, você encontrará tudo o que
        precisa para transformar sua casa em um lar.
      </Text>

      <TouchableOpacity style={styles.button} onPress={() => router.push("/rotina")}>
        <Text style={styles.buttonText}>Rotina</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => router.push("/dicas")}>
        <Text style={styles.buttonText}>Dicas</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
    padding: theme.spacing.large,
    justifyContent: "center",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: theme.spacing.medium,
    color: theme.colors.text,
  },
  subtitle: {
    fontSize: 15,
    textAlign: "center",
    marginBottom: theme.spacing.large,
    color: "#666",
  },
  button: {
    backgroundColor: theme.colors.primary,
    padding: theme.spacing.medium,
    borderRadius: theme.radius.medium,
    marginVertical: theme.spacing.small,
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
  },
});
