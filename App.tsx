import {
  View,
  Text,
  GluestackUIProvider,
  StatusBar,
} from "@gluestack-ui/themed";
import React from "react";
import { config } from "@gluestack-ui/config";
import AppBottomTab from "./src/AppBottom";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";

const App = () => {
  return (
    <NavigationContainer>
      <GluestackUIProvider config={config}>
        <SafeAreaView style={{ flex: 1 }}>
          <StatusBar backgroundColor="#151515" />
          <AppBottomTab />
        </SafeAreaView>
      </GluestackUIProvider>
    </NavigationContainer>
  );
};

export default App;
