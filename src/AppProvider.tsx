import { NavigationContainer } from "@react-navigation/native";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "@gluestack-ui/themed";
import React, { memo, useEffect, useState } from "react";
import isEqual from "react-fast-compare";
import { SafeAreaView } from "react-native-safe-area-context";
import Routes from "./Routes";

SplashScreen.preventAutoHideAsync();

const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <NavigationContainer>
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar backgroundColor="#151515" />
        <Routes />
      </SafeAreaView>
    </NavigationContainer>
  );
};

export default memo(AppProvider, isEqual);
