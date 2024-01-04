import React, { useState } from "react";
import {
  Alert,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Swiper from "react-native-swiper";

import PRODUCTS from "../PRODUCTS.json";

const product_1 = require("../assets/image/cartScreenIcons/Image_1.png");
const product_2 = require("../assets/image/cartScreenIcons/Image_2.png");
const product_3 = require("../assets/image/cartScreenIcons/Image_3.png");
const product_4 = require("../assets/image/cartScreenIcons/Image_4.png");
const product_5 = require("../assets/image/cartScreenIcons/Image_5.png");
const product_6 = require("../assets/image/cartScreenIcons/Image_6.png");

const backbutton = require("../assets/image/cartScreenIcons/backbutton.png");
const cart_white = require("../assets/image/detailScreenIcons/cart_white.png");
const star = require("../assets/image/detailScreenIcons/star.png");

const DetailScreen = ({ route, navigation }) => {
  const ID = route.params.ID;

  const product = PRODUCTS.filter((element) => element.id === ID);


  let imageName = "";
  if (product[0].id == 1) {
    imageName = product_1;
  }
  if (product[0].id == 2) {
    imageName = product_2;
  }
  if (product[0].id == 3) {
    imageName = product_3;
  }
  if (product[0].id == 4) {
    imageName = product_4;
  }
  if (product[0].id == 5) {
    imageName = product_5;
  }
  if (product[0].id == 6) {
    imageName = product_6;
  }

  return (
    <SafeAreaView className=" flex-1 ">
      <View className=" flex-1 ">
        {/* header */}
        <View className="h-14 flex-row  justify-between">
          <View className="h-14 w-14 ">
            <TouchableOpacity
              className="flex justify-center items-center h-full"
              onPress={() => navigation.goBack()}
            >
              <Image
                source={backbutton}
                resizeMode="contain"
                className="w-8 h-8"
              />
            </TouchableOpacity>
          </View>
          <View className="h-14 w-14 flex-1  flex justify-center items-center">
            <Text className="text-lg font-semibold">My Cart</Text>
          </View>
          <View className="h-14 w-14"></View>
        </View>

        {/* body */}
        <View className="flex-1">
          {/* Swiper */}
          <View className="h-[45%]">
            <Swiper
              className=""
              dot={<View className="bg-[#BFBFBF] w-2 h-2 rounded-full m-1 " />}
              activeDot={
                <View className="bg-kirmizi3 w-4 h-2 rounded-full m-1" />
              }
              autoplay
              autoplayTimeout={4}
            >
              <View className="flex justify-center items-center ">
                <Image
                  source={imageName}
                  resizeMode="contain"
                  className="w-[85%] h-[85%] "
                />
              </View>
              <View className="flex justify-center items-center">
                <Image
                  source={imageName}
                  resizeMode="contain"
                  className="w-[85%] h-[85%]"
                />
              </View>
              <View className="flex justify-center items-center">
                <Image
                  source={imageName}
                  resizeMode="contain"
                  className="w-[85%] h-[85%]"
                />
              </View>
            </Swiper>
          </View>

          {/* product */}
          <View>
            <View className="flex-row justify-start items-center flex ">
              <Text className="text-black px-2 font-semibold text-3xl">{product[0].name}</Text>
              <View className=" flex justify-center items-center flex-row bg-white w-16 h-6 rounded-full ">
                <Image
                  source={star}
                  resizeMode="contain"
                  className="w-5 h-[60%]"
                />
                <Text className="text-black font-semibold text-left">{product[0].rating}</Text>
              </View>
            </View>
            <Text className="text-[16px] p-2 text-gray-500">{product[0].description}</Text>
            <Text className="text-kirmizi3 text-[22px] px-2 my-3">${product[0].price}.00</Text>
          </View>

          <View className=" flex-row flex justify-start items-center m-2">
            <Text className="text-[18px]">Color: </Text> 
            {
              product[0].colors.map((color, index) => {
                return (
                  <View key={index}
                  style={[
                    { backgroundColor: color.hex },
                  ]}
                  className={`w-5 h-5 rounded-full  ml-1`}></View>
                )
              })
            }
          </View>

          <View className=" flex-row flex justify-start items-center m-2">
            <Text className="text-[18px]">Size: </Text> 
            {
              product[0].sizes.map((size, index) => {
                return (
                <View key={index} className="px-2 h-5 flex justify-center items-center rounded-full bg-yellow-300/50 ml-1">
                  <Text className="text-[12px]">{size}</Text>    
                </View>
                )
              })
            }
          </View>
        </View>
        
        <View className="h-20 w-full p-3  bg-white rounded-tl-2xl rounded-tr-2xl absolute bottom-0 flex-row overflow-hidden">
          <TouchableOpacity
            activeOpacity={0.7}
            className="flex-1"
          >
            <View className="h-full w-full bg-kirmizi3 rounded-md flex justify-center items-center ">
              <Image
                source={cart_white}
                resizeMode="contain"
                className="w-8 h-8"
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            className="flex-[3]"
            activeOpacity={0.7}
          >
            <View className=" h-full w-[97%] justify-center items-center ml-2  rounded-md bg-kirmizi3">
                <Text className="text-lg text-white font-semibold">Buy Now</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default DetailScreen;
