import Categories from "@/components/categories";
import { ProductsList } from "@/components/product";
import { useProducts } from "@/hooks/useProducts";
import { ShoppingBag } from "lucide-react-native";
import React, { useEffect } from "react";
import { ScrollView, Text, View, ViewProps } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Animated, {
  useAnimatedRef,
  useScrollViewOffset,
} from "react-native-reanimated";
import { useStore } from "@/hooks/useStore";
import { CartBottomSheet } from "@/components/cart-bottom-sheet";

export default function Home() {
  const { data } = useProducts();
  const categoriesRef = useAnimatedRef<Animated.View>();
  const { cartLength } = useStore();

  return (
    <SafeAreaView className="flex-1 pb-2 gap-4">
      <ScrollView className="flex-1 py-4 gap-4">
        <View className="flex-row items-center justify-between px-6 mb-6">
          <Text className="text-3xl font-medium">Sandoq</Text>
          <CartBottomSheet />
        </View>

        <Animated.View ref={categoriesRef} className="py-4 bg-background">
          <Categories />
        </Animated.View>

        {data ? <ProductsList products={data} isHorizontal={false} /> : null}
      </ScrollView>
    </SafeAreaView>
  );
}
