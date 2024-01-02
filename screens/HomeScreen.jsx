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
import HOME_PRODUCTS from "../HOME_PRODUCTS.json";
import { useState } from "react";

// image
const cartIcon = require("../assets/image/HomepageImage/cartIcon.png");
const addIcon = require("../assets/image/HomepageImage/addIcon.png");
const offerImage = require("../assets/image/HomepageImage/offerImage.png");
const product_1 = require("../assets/image/HomepageImage/product_1.png");
const product_2 = require("../assets/image/HomepageImage/product_2.png");
const product_3 = require("../assets/image/HomepageImage/product_3.png");
const product_4 = require("../assets/image/HomepageImage/product_4.png");
const top_product_1 = require("../assets/image/HomepageImage/top_product_1.png");
const top_product_2 = require("../assets/image/HomepageImage/top_product_2.png");
const top_product_3 = require("../assets/image/HomepageImage/top_product_3.png");
const top_product_4 = require("../assets/image/HomepageImage/top_product_4.png");
const top_product_5 = require("../assets/image/HomepageImage/top_product_5.png");
const top_product_6 = require("../assets/image/HomepageImage/top_product_6.png");
const top_product_7 = require("../assets/image/HomepageImage/top_product_7.png");
const banner_1 = require("../assets/image/HomepageImage/banner_1.png");

const PRODUCTS = HOME_PRODUCTS;

const HomeScreen = () => {


  const [products, setProducts] = useState([]);





  return (
    <SafeAreaView className="flex-1  ">
      <View className="flex-1 ">
        <View className="h-[90px] flex-row justify-between p-4 pt-6">
          <View>
            <Text className="text-gray-500 mt-4">Hello,</Text>
            <Text className="font-semibold text-[16px]">Erkan KOLAKAN</Text>
          </View>
          <TouchableOpacity className="w-14 h-14" activeOpacity={0.5}>
            <View className="w-5 h-5 justify-center absolute z-10 -right-1 -top-1 items-center bg-kirmizi3 rounded-full">
              <Text className="text-[13px] text-white">{products.length}</Text>
            </View>
            <View className="w-14 h-14 items-center justify-center bg-white rounded-full">
              <Image
                source={cartIcon}
                resizeMode="contain"
                className="w-5 h-5"
              />
            </View>
          </TouchableOpacity>
        </View>

        <View className="h-[70px] justify-center my-2 ">
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View className="flex-row items-center justify-evenly gap-x-2 px-2  ">
              <View className="w-[70px] h-[70px]">
                <Image
                  className="w-full h-full"
                  source={top_product_1}
                  resizeMode="contain"
                />
              </View>
              <View className="w-[70px] h-[70px]">
                <Image
                  className="w-full h-full"
                  source={top_product_2}
                  resizeMode="contain"
                />
              </View>
              <View className="w-[70px] h-[70px]">
                <Image
                  className="w-full h-full"
                  source={top_product_3}
                  resizeMode="contain"
                />
              </View>
              <View className="w-[70px] h-[70px]">
                <Image
                  className="w-full h-full"
                  source={top_product_4}
                  resizeMode="contain"
                />
              </View>
              <View className="w-[70px] h-[70px]">
                <Image
                  className="w-full h-full"
                  source={top_product_5}
                  resizeMode="contain"
                />
              </View>
              <View className="w-[70px] h-[70px]">
                <Image
                  className="w-full h-full"
                  source={top_product_6}
                  resizeMode="contain"
                />
              </View>
              <View className="w-[70px] h-[70px]">
                <Image
                  className="w-full h-full"
                  source={top_product_7}
                  resizeMode="contain"
                />
              </View>
            </View>
          </ScrollView>
        </View>

        <View className="h-[220px] px-2 ">
          <View className="absolute w-16 h-20 z-20 bottom-4 right-6">
            <Image
              className="h-full w-full"
              source={offerImage}
              resizeMode="contain"
            />
          </View>

          <Swiper
            className=" -top-4 "
            dot={<View className="bg-[#BFBFBF] w-2 h-2 rounded-full m-1  " />}
            activeDot={
              <View className="bg-kirmizi3 w-4 h-2 rounded-full m-1" />
            }
            autoplay
            autoplayTimeout={4}
          >
            <View>
              <Image
                className="w-[95%] h-full"
                source={banner_1}
                resizeMode="contain"
              />
            </View>
            <View>
              <Image
                className="w-[95%] h-full"
                source={banner_1}
                resizeMode="contain"
              />
            </View>
            <View>
              <Image
                className="w-[95%] h-full"
                source={banner_1}
                resizeMode="contain"
              />
            </View>
            <View>
              <Image
                className="w-[95%] h-full"
                source={banner_1}
                resizeMode="contain"
              />
            </View>
            <View>
              <Image
                className="w-[95%] h-full"
                source={banner_1}
                resizeMode="contain"
              />
            </View>
            <View>
              <Image
                className="w-[95%] h-full"
                source={banner_1}
                resizeMode="contain"
              />
            </View>
          </Swiper>
        </View>

        <View className="flex-1 px-3">
          <Text className="text-lg mb-2 font-semibold">New Collection</Text>

          <ScrollView
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
          >
          {/* ROW */}
              <View className="pb-16">
                <View className="h-44 flex-row">
                  <View className="flex-1 m-1 p-2 bg-white rounded-md">
                    <View className="h-24 flex justify-center items-center  ">
                      <Image
                        source={product_1}
                        className=" w-full h-full "
                        resizeMode="contain"
                      />
                    </View>
                    <View className="flex-1 flex-row justify-between mt-2">
                      {/* left */}
                      <View className="flex-1">
                        <Text className="text-[13.5px] font-semibold">
                          {PRODUCTS[0].name}
                        </Text>
                        <Text className="text-kirmizi3 ">
                          ${PRODUCTS[0].price}.00
                        </Text>
                      </View>

                      {/* right */}
                      <View className="flex justify-center items-center">
                        <View>
                          <TouchableOpacity
                            className="w-6 h-6 bg-kirmizi3 rounded-full flex justify-center items-center"
                            activeOpacity={0.7}
                            onPress={() => {
                              let duplicate = products.filter(
                                (element) => element.id == PRODUCTS[0].id
                              );
                              if (duplicate.length != 0) {
                                Alert.alert(
                                  "Uyarı",
                                  "Bu ürün zaten sepetinizde mevcut",
                                  [
                                    {
                                      text: "Tamam",
                                      onPress: () => console.log("OK Pressed"),
                                    },
                                  ]
                                );
                              } else {
                                setProducts([...products, PRODUCTS[0]]);
                              }
                            }}
                          >
                            <Image
                              source={addIcon}
                              className="w-3 h-3"
                              resizeMode="contain"
                            />
                          </TouchableOpacity>
                        </View>
                      </View>
                    </View>
                  </View>

                  <View className="flex-1 m-1 p-2 bg-white rounded-md">
                    <View className="h-24 flex justify-center items-center ">
                      <Image
                        source={product_2}
                        className=" w-full h-full"
                        resizeMode="cover"
                      />
                    </View>
                    <View className="flex-1 flex-row justify-between mt-2">
                      {/* left */}
                      <View className="flex-1">
                        <Text className="text-[13.5px] font-semibold">
                          {PRODUCTS[1].name}
                        </Text>
                        <Text className="text-kirmizi3 ">
                          ${PRODUCTS[1].price}.00
                        </Text>
                      </View>

                      {/* right */}
                      <View className="flex justify-center items-center">
                        <View>
                          <TouchableOpacity
                            className="w-6 h-6 bg-kirmizi3 rounded-full flex justify-center items-center"
                            activeOpacity={0.7}
                            onPress={() => {
                              let duplicate = products.filter(
                                (element) => element.id == PRODUCTS[1].id
                              );
                              if (duplicate.length != 0) {
                                Alert.alert(
                                  "Uyarı",
                                  "Bu ürün zaten sepetinizde mevcut",
                                  [
                                    {
                                      text: "Tamam",
                                      onPress: () => console.log("OK Pressed"),
                                    },
                                  ]
                                );
                              } else {
                                setProducts([...products, PRODUCTS[1]]);
                              }
                            }}
                          >
                            <Image
                              source={addIcon}
                              className="w-3 h-3"
                              resizeMode="contain"
                            />
                          </TouchableOpacity>
                        </View>
                      </View>
                    </View>
                  </View>
                </View>

                <View className="h-44 flex-row">
                  <View className="flex-1 m-1 p-2 bg-white rounded-md">
                    <View className="h-24 flex justify-center items-center  ">
                      <Image
                        source={product_3}
                        className=" w-full h-full "
                        resizeMode="contain"
                      />
                    </View>
                    <View className="flex-1 flex-row justify-between mt-2">
                      {/* left */}
                      <View className="flex-1">
                        <Text className="text-[13.5px] font-semibold">
                          {PRODUCTS[2].name}
                        </Text>
                        <Text className="text-kirmizi3 ">
                          ${PRODUCTS[2].price}.00
                        </Text>
                      </View>

                      {/* right */}
                      <View className="flex justify-center items-center">
                        <View>
                          <TouchableOpacity
                            className="w-6 h-6 bg-kirmizi3 rounded-full flex justify-center items-center"
                            activeOpacity={0.7}
                            onPress={() => {
                              let duplicate = products.filter(
                                (element) => element.id == PRODUCTS[2].id
                              );
                              if (duplicate.length != 0) {
                                Alert.alert(
                                  "Uyarı",
                                  "Bu ürün zaten sepetinizde mevcut",
                                  [
                                    {
                                      text: "Tamam",
                                      onPress: () => console.log("OK Pressed"),
                                    },
                                  ]
                                );
                              } else {
                                setProducts([...products, PRODUCTS[2]]);
                              }
                            }}
                          >
                            <Image
                              source={addIcon}
                              className="w-3 h-3"
                              resizeMode="contain"
                            />
                          </TouchableOpacity>
                        </View>
                      </View>
                    </View>
                  </View>

                  <View className="flex-1 m-1 p-2 bg-white rounded-md">
                    <View className="h-24 flex justify-center items-center ">
                      <Image
                        source={product_4}
                        className=" w-full h-full"
                        resizeMode="contain"
                      />
                    </View>
                    <View className="flex-1 flex-row justify-between mt-2">
                      {/* left */}
                      <View className="flex-1">
                        <Text className="text-[13.5px] font-semibold">
                          {PRODUCTS[3].name}
                        </Text>
                        <Text className="text-kirmizi3 ">
                          ${PRODUCTS[3].price}.00
                        </Text>
                      </View>

                      {/* right */}
                      <View className="flex justify-center items-center">
                        <View>
                          <TouchableOpacity
                            className="w-6 h-6 bg-kirmizi3 rounded-full flex justify-center items-center"
                            activeOpacity={0.7}
                            onPress={() => {
                              let duplicate = products.filter(
                                (element) => element.id == PRODUCTS[3].id
                              );
                              if (duplicate.length != 0) {
                                Alert.alert(
                                  "Uyarı",
                                  "Bu ürün zaten sepetinizde mevcut",
                                  [
                                    {
                                      text: "Tamam",
                                      onPress: () => console.log("OK Pressed"),
                                    },
                                  ]
                                );
                              } else {
                                setProducts([...products, PRODUCTS[3]]);
                              }
                            }}
                          >
                            <Image
                              source={addIcon}
                              className="w-3 h-3"
                              resizeMode="contain"
                            />
                          </TouchableOpacity>
                        </View>
                      </View>
                    </View>
                  </View>
                </View>

              </View>
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
