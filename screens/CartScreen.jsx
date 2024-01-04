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
import { useEffect, useState } from "react";

// image
const product_1 = require("../assets/image/cartScreenIcons/Image_1.png");
const product_2 = require("../assets/image/cartScreenIcons/Image_2.png");
const product_3 = require("../assets/image/cartScreenIcons/Image_3.png");
const product_4 = require("../assets/image/cartScreenIcons/Image_4.png");
const product_5 = require("../assets/image/cartScreenIcons/Image_5.png");
const product_6 = require("../assets/image/cartScreenIcons/Image_6.png");
const backbutton = require("../assets/image/cartScreenIcons/backbutton.png");
const qtydown = require("../assets/image/cartScreenIcons/qtydown.png");
const qtyup = require("../assets/image/cartScreenIcons/qtyup.png");

const Product = ({ product }) => {

  const [qty, setQty] = useState(1);
  
  let imageName = "";

  if (product.id == 1) {
    imageName = product_1;
  }
  if (product.id == 2) {
    imageName = product_2;
  }
  if (product.id == 3) {
    imageName = product_3;
  }
  if (product.id == 4) {
    imageName = product_4;
  }
  if (product.id == 5) {
    imageName = product_5;
  }
  if (product.id == 6) {
    imageName = product_6;
  }

  return (
    <View  className="flex flex-row bg-white h-24 my-2 mx-4 rounded-lg overflow-hidden  ">
      <View className="flex-[2] p-2">
        <Image
          source={imageName}
          resizeMode="contain"
          className="w-full h-full "
        />
      </View>

      <View className="flex-[4] flex justify-center p-2">
        <Text className="text-lg font-semibold ">{product.name}</Text>
        <Text className="text-lg text-kirmizi3 ">${product.price}.00</Text>
      </View>

      <View className="flex-1 flex-col justify-evenly items-center py-1">
      <TouchableOpacity
        activeOpacity={0.9}
        onPress={() => {
          setQty(qty + 1);
        }}
      >
          <View className="h-6 w-6 rounded-full flex justify-center items-center bg-kirmizi3">
            <Image
              source={qtyup}
              resizeMode="contain"
              className="w-[50%] h-[50%]  "
            />
          </View>
        </TouchableOpacity>

        <Text className="">{qty}</Text>

        <TouchableOpacity
        activeOpacity={0.9}
        onPress={() => {
          if (qty !== 0) {
            setQty(qty - 1);
          }
        }}
      >
          <View className="h-6 w-6 rounded-full  flex justify-center items-center bg-kirmizi3">
            <Image
              source={qtydown}
              resizeMode="contain"
              className="w-[50%]  h-[50%]  "
            />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};





const CartScreen = ({ navigation }) => {

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

        <View className="flex-1">
          <ScrollView className=""
            showsVerticalScrollIndicator={false}
          >
            <View className="pb-16">
              {PRODUCTS.map((product) => {
                return <Product key={product.id} product={product}  navigation={navigation} />;
              })}
            </View>
          </ScrollView>
        </View>

        <View className="w-full h-[9%] absolute bottom-0 rounded-tl-2xl rounded-tr-2xl bg-white  ">
          <View className="flex-1 flex-row justify-between px-6 items-center">
            <Text className="font-semibold text-lg ">$550,00</Text>
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => {
              }}
            >
              <Text className="font-bold text-md py-3 px-8 rounded-full bg-kirmizi3 text-white ">CHECKOUT</Text>
            </TouchableOpacity>
          </View>
        </View>


      </View>
    </SafeAreaView>
  );
};

export default CartScreen;
