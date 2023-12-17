import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useIsFocused, useNavigation } from "@react-navigation/native";
import capitalize from "lodash/capitalize";
import {
  AddIcon,
  Box,
  Center,
  HStack,
  Icon,
  Pressable,
  BellIcon,
  TrashIcon,
  CheckIcon,
  Text,
} from "@gluestack-ui/themed";
import React, { FC, memo, useEffect, useState } from "react";
import isEqual from "react-fast-compare";
import Home from "./Home";
import Mydiet from "./Diet/Mydiet";
import Myworkout from "./Workout/Myworkout";
import { LinearGradient } from "expo-linear-gradient";

const Tab = createBottomTabNavigator();

const PressableIcons: FC<{
  selected: number;
  indexNumber: number;
  setSelected: (value: React.SetStateAction<number>) => void;
  defaultName: string | any;
  outlineName: string | any;
  name: string;
}> = memo(
  ({ selected, setSelected, defaultName, outlineName, indexNumber, name }) => {
    const manageIndex = () => setSelected(indexNumber);

    return (
      <Pressable
        opacity={selected === indexNumber ? 1 : 0.5}
        flex={1}
        onPress={manageIndex}
      >
        <Center>
          {/* <Icon
            as={
              <MaterialIcons
                name={selected === indexNumber ? defaultName : outlineName}
              />
            }
            color="white"
          /> */}
          <Ionicons
            size={32}
            name={selected === indexNumber ? defaultName : outlineName}
            color="#FFFFFFFF"
          />
          {/* <Icon as={selected === indexNumber ? defaultName : outlineName} /> */}
          <Text color="white">{capitalize(name)}</Text>
        </Center>
      </Pressable>
    );
  },
  isEqual
);

const BottomNavigation = memo((props: any) => {
  const [selected, setSelected] = useState(0);
  const { navigate } = useNavigation();
  const isFocused = useIsFocused();

  useEffect(() => {
    if (selected === 0 && props.state.index !== 0) {
      // @ts-ignore
      navigate("Home.ride");
      setSelected(0);
    }
    if (selected === 1 && props.state.index !== 1) {
      // @ts-ignore
      navigate("Home.event");
      setSelected(1);
    }
    if (selected === 2 && props.state.index !== 2) {
      // @ts-ignore
      navigate("Home.food");
      setSelected(2);
    }
    // if (selected === 3 && props.state.index !== 3) {
    //   // @ts-ignore
    //   navigate("Home.Hotel");
    //   setSelected(3);
    // }
    // if (selected === 4 && props.state.index !== 4) {
    //   // @ts-ignore
    //   navigate("Home.cust.map");
    //   setSelected(4);
    // }
  }, [selected, props.state, isFocused]);

  return (
    <Box
      bg="#000000FF"
      width="100%"
      alignSelf="center"
      p="$1"
      marginBottom="$1"
    >
      <HStack bg="#000000FF" alignItems="center">
        <PressableIcons
          selected={selected}
          setSelected={setSelected}
          defaultName={"home"}
          outlineName={"home-outline"}
          indexNumber={0}
          name="Home"
        />
        <PressableIcons
          selected={selected}
          setSelected={setSelected}
          defaultName={"fitness"}
          outlineName={"fitness-outline"}
          indexNumber={1}
          name="Videos"
        />
        <PressableIcons
          selected={selected}
          setSelected={setSelected}
          defaultName={"fast-food"}
          outlineName={"fast-food-outline"}
          indexNumber={2}
          name="Diet"
        />
        {/* <PressableIcons
          selected={selected}
          setSelected={setSelected}
          defaultName="hotel"
          outlineName="hotel"
          indexNumber={3}
          name="Hotel"
        />
        <PressableIcons
          selected={selected}
          setSelected={setSelected}
          defaultName="map"
          outlineName="map"
          indexNumber={4}
          name="Map"
        /> */}
      </HStack>
    </Box>
  );
}, isEqual);

const AppBottomTab = () => {
  return (
    <Tab.Navigator
      tabBar={(props) => <BottomNavigation {...props} />}
      screenOptions={{ headerShown: false }}
      initialRouteName={"Home.ride"}
    >
      <Tab.Screen name="Home.ride" component={Home} />
      <Tab.Screen name="Home.event" component={Mydiet} />
      <Tab.Screen name="Home.food" component={Myworkout} />
      {/* <Tab.Screen name="Home.Hotel" component={Hotel} />
      <Tab.Screen name="Home.cust.map" component={CustMap} /> */}
    </Tab.Navigator>
  );
};

export default AppBottomTab;
