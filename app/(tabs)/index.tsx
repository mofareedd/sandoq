import Categories from "@/components/categories";
import { ProductCard, ProductsList } from "@/components/product";
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
      <ScrollView className="flex-1 py-4 gap-4">
        <View className="flex-row items-center justify-between px-6">
          <Text className="text-3xl font-medium">Sandoq</Text>
          <View className="relative">
            <ShoppingBag color={"#333"} />
            <View className="absolute bg-red-500 z-10 w-5 h-5 rounded-full -top-2 -right-2 items-center justify-center">
              <Text className="text-white text-xs">6</Text>
            </View>
          </View>
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

        {data ? (
          <ProductsList
            products={data}
            label="Flash Sale"
            isHorizontal={false}
          />
        ) : null}
      </ScrollView>
    </SafeAreaView>
  );
}
