import {
  View,
  Text,
  HStack,
  Pressable,
  Box,
  Image,
  VStack,
  Center,
} from "@gluestack-ui/themed";
import React from "react";
import { ScrollView } from "react-native";

const RestHeader = () => {
  return (
    <>
      <HStack
        h={"$16"}
        backgroundColor="#000000FF"
        // borderEndEndRadius={40}
        borderBottomLeftRadius={40}
        borderBottomRightRadius={40}
        py="$3"
        px={4}
        w={"100%"}
        justifyContent="center"
      >
        <Text
          color="white"
          fontWeight="bold"
          // textAlign="center"
          // w={"40%"}
          mt={10}
        >
          Fitness Freak
        </Text>
      </HStack>
    </>
  );
};

const FreeWorkoutCard: React.FC<{
  img: string;
  name: string;
  date1: string;
  date2: string;
}> = ({ date1, date2, img, name }) => {
  return (
    <>
      <VStack
        space={"md"}
        p={"$1.5"}
        w={"$80"}
        borderWidth={"$1"}
        borderColor={"#0f045d"}
        style={{ shadowColor: "blue" }}
        borderRadius={"$md"}
        bg={"white"}
      >
        <Box>
          <Image
            w={"100%"}
            height={150}
            source={{
              uri: img,
            }}
            alt="image"
          />
          <Center
            bg="$violet500"
            position="absolute"
            bottom="$0"
            px="$3"
            py="$1.5"
          >
            <Text color="$warmGray50" fontWeight="$700" fontSize="$xs">
              {name}
            </Text>
          </Center>
        </Box>

        <HStack w={"100%"}>
          <Text color={"$blueGray500"} fontWeight={"semibold"} w={"15%"}>
            Date
          </Text>
          <Text w={"5%"}>:</Text>
          <VStack>
            <HStack space={"md"}>
              <Text>{date1}</Text>
              <Text>to</Text>
              <Text>{date2}</Text>
            </HStack>
          </VStack>
        </HStack>
      </VStack>
    </>
  );
};

const FreeWorkout = () => {
  return (
    <>
      <ScrollView horizontal={true}>
        <HStack p={"$5"} space="md">
          <FreeWorkoutCard
            img="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?q=80&w=1975&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            date1="12/10/2023"
            date2="13/10/2023"
            name="Monday"
          />
          <FreeWorkoutCard
            img="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?q=80&w=1975&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            date1="12/10/2023"
            date2="13/10/2023"
            name="Monday"
          />
          <FreeWorkoutCard
            img="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?q=80&w=1975&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            date1="12/10/2023"
            date2="13/10/2023"
            name="Monday"
          />
          <FreeWorkoutCard
            img="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?q=80&w=1975&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            date1="12/10/2023"
            date2="13/10/2023"
            name="Monday"
          />
          <FreeWorkoutCard
            img="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?q=80&w=1975&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            date1="12/10/2023"
            date2="13/10/2023"
            name="Monday"
          />
        </HStack>
      </ScrollView>
    </>
  );
};

const Home = () => {
  return (
    <>
      <VStack bg="#FFFFFFFF" flex={1}>
        <RestHeader />

        <ScrollView>
          <FreeWorkout />
        </ScrollView>
      </VStack>
    </>
  );
};

export default Home;
