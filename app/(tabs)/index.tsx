import Categories from "@/components/categories";
import { ProductsList } from "@/components/product";
import { useProducts } from "@/hooks/useProducts";
import { ShoppingBag } from "lucide-react-native";
import React, { useState } from "react";
import { Pressable, ScrollView, Text, View, ViewProps } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Animated, {
  useAnimatedRef,
  useScrollViewOffset,
} from "react-native-reanimated";
import { useStore } from "@/hooks/useStore";
import { CartBottomSheet } from "@/components/cart-bottom-sheet";
import { cn } from "@/lib/utils";

export default function Home() {
  const { data } = useProducts();
  const categoriesRef = useAnimatedRef<Animated.View>();
  const { cartLength } = useStore();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <SafeAreaView
      className={cn(
        "flex-1 pb-2 gap-4"
        // isOpen ? "bg-gray-200" : "bg-background"
      )}
    >
      <ScrollView className="flex-1 py-4 gap-4">
        <View className="flex-row items-center justify-between px-6 mb-6">
          <Text className="text-3xl font-medium">Sandoq</Text>
          {/* <CartBottomSheet /> */}
          <Pressable onPress={() => setIsOpen(true)} className="relative">
            <ShoppingBag color={"#333"} />
            <View className="absolute bg-red-500 z-10 w-5 h-5 rounded-full -top-2 -right-2 items-center justify-center">
              <Text className="text-white text-xs">{cartLength}</Text>
            </View>
          </Pressable>
        </View>

        <Animated.View ref={categoriesRef} className="py-4 bg-background">
          <Categories />
        </Animated.View>

        {data ? <ProductsList products={data} isHorizontal={false} /> : null}
      </ScrollView>

      <CartBottomSheet isOpen={isOpen} onOpenChange={setIsOpen} />
    </SafeAreaView>
  );
}
