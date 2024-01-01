import {
  View,
  Text,
  Image,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Swiper from "react-native-swiper";

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

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <View className="flex-1">
        <View className="h-[90px] flex-row justify-between p-4 pt-6">
          <View>
            <Text className="text-gray-500 mt-4">Hello,</Text>
            <Text className="font-semibold text-[16px]">Erkan KOLAKAN</Text>
          </View>
          <TouchableOpacity className="w-14 h-14" activeOpacity={0.5}>
            <View className="w-5 h-5 justify-center absolute z-10 -right-1 -top-1 items-center bg-kirmizi3 rounded-full">
              <Text className="text-[13px] text-white">5</Text>
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
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
          >
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

        <View className="h-[240px] px-2">
          <View className="absolute w-16  h-20 z-20 bottom-4 right-6">
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
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
