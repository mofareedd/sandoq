import Categories from "@/components/categories";
import { ProductCard } from "@/components/product-card";
import { useProducts } from "@/hooks/useProducts";
import { Link } from "expo-router";
import { ShoppingBag } from "lucide-react-native";
import React from "react";
import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Home() {
  const { data } = useProducts();
  return (
    <SafeAreaView className="flex-1 py-4 gap-4">
      <View className="flex-row items-center justify-between px-6">
        <Text className="text-3xl font-medium">Sandoq</Text>
        <ShoppingBag color={"#333"} />
      </View>

      <View className="my-4">
        <View className="flex-row items-center justify-between px-6 mb-4">
          <Text className="text-xl font-medium">Categories</Text>
          <Link href={""}>
            <Text className="text-muted-foreground text-lg">See All</Text>
          </Link>
        </View>
        <Categories />
      </View>

      <View className="">
        <Text className="px-6 font-bold text-xl">Flash Sale</Text>
        <ScrollView
          horizontal
          className=""
          showsHorizontalScrollIndicator={false}
        >
          {data && data.length
            ? data.map((product) => (
                <View
                  className="items-center ml-6 gap-2 relative"
                  key={product.id}
                >
                  <ProductCard product={product} />
                </View>
              ))
            : null}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
