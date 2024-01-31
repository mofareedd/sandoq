import ProductImage from "@/components/product-image";
import { Input } from "@/components/ui/input";
import { useCategory } from "@/hooks/useCategory";
import { BASE_URL } from "@/lib/constants";
import React from "react";
import { FlatList, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Search() {
  const { data, isLoading } = useCategory();
  return (
    <SafeAreaView className="flex-1">
      <View className="flex-1 px-6 py-4">
        <View>
          <Input placeholder="Search" />
        </View>

        <View className="">
          {data && data.length ? (
            <FlatList
              data={data}
              numColumns={2}
              keyExtractor={(item) => item.id.toString()}
              contentContainerStyle={{ gap: 10 }}
              columnWrapperStyle={{ gap: 10 }}
              renderItem={({ item }) => {
                return (
                  <View className="relative flex-1 h-52">
                    <View className="absolute z-10 items-center justify-center w-full h-full">
                      <Text className="">{item.attributes.name}</Text>
                    </View>

                    <ProductImage
                      source={`${BASE_URL}${item.attributes.image}`}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "contain",
                      }}
                    />
                  </View>
                );
              }}
            />
          ) : null}
        </View>
      </View>
    </SafeAreaView>
  );
}
