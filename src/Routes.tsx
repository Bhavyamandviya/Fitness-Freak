import React, { useState, useEffect } from "react";

import { MaterialIcons } from "@expo/vector-icons";
import { createStackNavigator } from "@react-navigation/stack";
import * as SplashScreen from "expo-splash-screen";
import AppBottomTab from "./AppBottom";
import { NavigationContainer } from "@react-navigation/native";

SplashScreen.preventAutoHideAsync();

const Stack = createStackNavigator();

const Routes = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="BottomTab" component={AppBottomTab} />
    </Stack.Navigator>
  );
};

export default Routes;
