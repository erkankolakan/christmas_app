import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";

import { StatusBar } from "expo-status-bar";
import { Image, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";


//Screens
import HomeScreen from "./screens/HomeScreen";
import CartScreen from "./screens/CartScreen";



const footer_home = require("./assets/image/footerIcons/home.png")
const footer_home_active = require("./assets/image/footerIcons/home_active.png")
const footer_search = require("./assets/image/footerIcons/search.png")
const footer_search_active = require("./assets/image/footerIcons/search_active.png")
const footer_like = require("./assets/image/footerIcons/like.png")
const footer_like_active = require("./assets/image/footerIcons/like_active.png")
const footer_profile = require("./assets/image/footerIcons/profile.png")
const footer_profile_active = require("./assets/image/footerIcons/profile_active.png")
const footer_barcode = require("./assets/image/footerIcons/barcode.png")




const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();










const SearchScreen = () => {
  return (
    <View className="flex-1 justify-center items-center ">
      <Text>SearchScreen Screen</Text>
    </View>
  );
};

const BarcodeScreen = () => {
  return (
    <View className="flex-1 justify-center items-center ">
      <Text>BarcodeScreen Screen</Text>
    </View>
  );
};

const LikeScreen = () => {
  return (
    <View className="flex-1 justify-center items-center ">
      <Text>LikeScreen Screen</Text>
    </View>
  );
};

const ProfileScreen = () => {
  return (
    <View className="flex-1 justify-center items-center ">
      <Text>ProfileScreen Screen</Text>
    </View>
  );
};



const StackScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Cart" component={CartScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
  )
}







const App = () => {
  return (
    <>
      <StatusBar hidden />
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            headerShown: false,
            tabBarShowLabel: false,
            tabBarStyle:{
              position:"absolute",
              borderTopLeftRadius:25,
              borderTopRightRadius:25,
              shadowColor:"black",
              shadowOffset:{
                width:0,
                height:10
              },
              shadowOpacity:1,
              shadowRadius:10,
              elevation:10,
            },
            
            tabBarIcon: ({ focused }) => {
              let icon = ""
              if (route.name === "INITIAL") {
                icon = focused ? footer_home_active : footer_home
              }else if (route.name === "Search"){
                icon = focused ? footer_search_active : footer_search
              }else if (route.name === "Barcode"){
                icon = footer_barcode
              }else if (route.name === "Like"){
                icon = focused ? footer_like_active : footer_like
              }else if (route.name === "Profile"){
                icon = focused ? footer_profile_active : footer_profile
              }

              if (route.name === "Barcode") {
                return(
                  <View className="w-16 h-16 absolute -top-8 bg-[#FF0000] border-4 border-[#EBEBEB] rounded-full flex justify-center items-center">
                    <Image source={icon} resizeMode="contain" className="w-6" />
                  </View>
                )
              }
              return <Image source={icon} resizeMode="contain" className="w-6" />;
            },  
          })}
        >
          <Tab.Screen name="INITIAL" component={StackScreen} />
          <Tab.Screen name="Search" component={SearchScreen} />
          <Tab.Screen name="Barcode" component={BarcodeScreen} />
          <Tab.Screen name="Like" component={LikeScreen} />
          <Tab.Screen name="Profile" component={ProfileScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
