import { StyleSheet, Text, View, Button } from "react-native";

// Quando você utiliza useNavigation() em um componente, ele retorna a instância de navegação associada ao componente.
// Isso permite que você acesse métodos de navegação, como navigate, goBack, push, etc.
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types/navigation";

import { useNavigation } from "@react-navigation/native";

type HomeScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "Home"
>;

export default function Home() {
  const navigation = useNavigation<HomeScreenNavigationProp>();

  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <Button
        title="Ir para Accelerometer"
        onPress={() => navigation.navigate("Accelerometer")}
      />

      <Button
        title="Ir para Camera"
        onPress={() => navigation.navigate("camera")}
      />

      <Button title="Ir para GPS" onPress={() => navigation.navigate("GPS")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
