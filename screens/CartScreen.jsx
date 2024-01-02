import {
    View,
    Text,
    Image,
    SafeAreaView,
    TouchableOpacity,
    ScrollView,
    Alert,
  } from "react-native";
  import Swiper from "react-native-swiper";
  
  //data
  import PRODUCTS from "../PRODUCTS.json";
  import { useState } from "react";
  
  // image
  const product_1 = require("../assets/image/cartScreenIcons/Image_1.png");
  const product_2 = require("../assets/image/cartScreenIcons/Image_2.png");
  const product_3 = require("../assets/image/cartScreenIcons/Image_3.png");
  const product_4 = require("../assets/image/cartScreenIcons/Image_4.png");
  const product_5 = require("../assets/image/cartScreenIcons/Image_5.png");
  const product_6 = require("../assets/image/cartScreenIcons/Image_6.png");
  const backbutton = require("../assets/image/cartScreenIcons/backbutton.png");
  
  
  const CartScreen = () => {
  
  
  
    return (
      <SafeAreaView className="flex-1  ">
        <View className="flex-1 ">

        </View>
      </SafeAreaView>
    );
  };
  
  export default CartScreen;
  