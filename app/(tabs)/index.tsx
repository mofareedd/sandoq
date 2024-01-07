import ProductImage from "@/components/product-image";
import { Button } from "@/components/ui/button";
import { useCategory } from "@/hooks/useStrapi";
import { BASE_URL } from "@/lib/constants";
import { Link } from "expo-router";
import { ShoppingBag } from "lucide-react-native";
import React from "react";
import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Home() {
  const { data: categories, isLoading } = useCategory();
  return (
    <SafeAreaView className="flex-1 py-4 gap-4">
      <View className="flex-row items-center justify-between px-6">
        <Text className="text-3xl font-medium">Sandoq</Text>
        <ShoppingBag color={"#333"} />
      </View>

      {/* .bg_product::after {
  background: rgba(15, 17, 17, 0.03);
  border-radius: 4px;
  content: "";
  height: 100%;
  pointer-events: none;
  position: absolute;
  width: 100%;
} */}

      <View className="my-4">
        <View className="flex-row items-center justify-between px-6 mb-4">
          <Text className="text-xl font-medium">Categories</Text>
          <Link href={""}>
            <Text className="text-muted-foreground text-lg">See All</Text>
          </Link>
        </View>
        <ScrollView
          horizontal
          className=""
          showsHorizontalScrollIndicator={false}
        >
          {categories && categories.length
            ? categories.map((category) => {
                return (
                  <View
                    className="items-center ml-6 gap-2 relative"
                    key={category.id}
                  >
                    <View
                      style={{
                        backgroundColor: "rgba(15, 17, 17, 0.04)",
                        borderRadius: 100,
                        height: 64,
                        pointerEvents: "none",
                        position: "absolute",
                        width: 64,
                        borderWidth: 1,
                        borderColor: "#9999",
                      }}
                    />
                    <View className="w-20 h-20 p-4 rounded-full items-center justify-center">
                      <ProductImage
                        source={`${BASE_URL}${category.attributes.image.data.attributes.url}`}
                        style={{ width: 40, height: 40 }}
                      />
                    </View>
                    <Text className="capitalize">
                      {category.attributes.name}
                    </Text>
                  </View>
                );
              })
            : null}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
