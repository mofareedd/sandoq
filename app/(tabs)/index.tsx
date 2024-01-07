import { Button } from "@/components/ui/button";
import { useCategory } from "@/hooks/useStrapi";
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
            ? categories.map((category) => (
                <View className="items-center ml-6 gap-2" key={category.id}>
                  <View className="w-16 h-16 rounded-full bg-border" />
                  <Text>{category.attributes.name}</Text>
                </View>
              ))
            : null}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
