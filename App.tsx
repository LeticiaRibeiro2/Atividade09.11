import React from "react";

// Stack Navigation
import { NavigationContainer } from "@react-navigation/native"; // Importa o componente NavigationContainer de "@react-navigation/native" para envolver a navegação da aplicação.
import { createNativeStackNavigator } from "@react-navigation/native-stack"; // Importa a função createNativeStackNavigator de "@react-navigation/native-stack" para criar um navegador de pilha nativo.

// Páginas
import Home from "./src/pages/Home";
import GPS from "./src/pages/GPS";
import camera from "./src/pages/Camera";
import Accelerometer from "./src/pages/Accelerometer";
// Cria uma instância de um navegador de pilha usando createNativeStackNavigator e a armazena na constante Stack.
// Isso permite que você use esse navegador de pilha para definir a navegação em sua aplicação.
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      {/* Componente fornecido pelo React Navigation para envolver a navegação da aplicação. */}
      <Stack.Navigator initialRouteName="Home">
        {/* Componente Navigator do navegador de pilha. initialRouteName define a rota inicial da navegação. */}
        <Stack.Screen name="Home" component={Home} />
        {/* Define uma tela com o nome "Home" e associa o componente Home a ela. */}
        <Stack.Screen name="GPS" component={GPS} />
        {/* Define uma tela com o nome "Sobre" e associa o componente Sobre a ela. */}
        <Stack.Screen name="camera" component={camera} />
        <Stack.Screen name="Accelerometer" component={Accelerometer} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
