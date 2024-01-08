import React from "react";
import { ScrollView, Text, View } from "react-native";
import ProductImage from "./product-image";
import { BASE_URL } from "@/lib/constants";
import { useCategory } from "@/hooks/useCategory";

export default function Categories() {
  const { data: categories, isLoading } = useCategory();

  return (
    <ScrollView horizontal className="" showsHorizontalScrollIndicator={false}>
      {categories && categories.length
        ? categories.map((category) => {
            return (
              <View
                className="items-center ml-6 gap-2 relative"
                key={category.id}
              >
                <View className="rounded-full  items-center justify-center">
                  <ProductImage
                    source={`${BASE_URL}${category.attributes.image.data.attributes.url}`}
                    style={{
                      width: 60,
                      height: 60,
                      borderRadius: 50,
                      borderWidth: 1,
                      borderColor: "#999",
                    }}
                  />
                </View>
                <Text className="capitalize">{category.attributes.name}</Text>
              </View>
            );
          })
        : null}
    </ScrollView>
  );
}
