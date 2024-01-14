import { ProductType } from "@/types";
import React, { useState } from "react";
import { Pressable, ScrollView, Text, View } from "react-native";
import ProductImage from "./product-image";
import { BASE_URL } from "@/lib/constants";
import { Heart, ShoppingBag } from "lucide-react-native";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { useStore } from "@/hooks/useStore";

interface ProductListProps {
  products: ProductType[];
  label?: string;
  isHorizontal?: boolean;
}
export function ProductsList({
  products,
  label,
  isHorizontal = false,
}: ProductListProps) {
  return (
    <View className="">
      {label ? (
        <Text className="px-6 mb-4 font-bold text-xl">{label}</Text>
      ) : null}
      <ScrollView
        horizontal={isHorizontal}
        className=""
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      >
        {products.map((product) => (
          <View
            className={cn(
              "gap-2 relative",
              isHorizontal ? "items-center ml-6  my-0" : "items-start px-6 my-2"
            )}
            key={product.id}
          >
            <ProductCard product={product} isRow={!isHorizontal} />
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

export function ProductCard({
  product,
  isRow = false,
}: {
  product: ProductType;
  isRow?: boolean;
}) {
  const [isLiked, setIsLiked] = useState(false);

  const { attributes } = product;
  const { addToCart } = useStore();

  return (
    <View className={cn("gap-4", isRow ? "flex-row" : "flex-col")}>
      <View
        className={cn(
          "rounded-lg border border-border overflow-hidden relative",
          isRow ? "w-32 h-40" : "w-40 h-52"
        )}
      >
        <View className="absolute p-4  z-10 flex-row items-center justify-between w-full">
          <Text className="text-background bg-orange-400 rounded-md overflow-hidden px-2 py-1 text-xs font-bold">
            50%
          </Text>
          <Pressable onPress={() => setIsLiked(!isLiked)}>
            <Heart
              size={20}
              className={cn(isLiked ? "text-red-500" : "text-muted-foreground")}
              fill={isLiked ? "red" : "none"}
            />
          </Pressable>
        </View>
        <ProductImage
          source={`${BASE_URL}${attributes.images.data[0]?.attributes.url}`}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "contain",
          }}
        />
      </View>
      <View className={cn("py-2", isRow ? "flex-1" : "")}>
        <Text
          className={cn(
            isRow ? "max-w-60 line-clamp-3" : "max-w-40 line-clamp-2"
          )}
        >
          {attributes.name}
        </Text>
        <View
          className={cn(
            "flex-row justify-between items-end py-2",
            isRow ? "flex-1" : ""
          )}
        >
          <View
            className={cn("gap-2", isRow ? "flex-col-reverse" : "flex-row")}
          >
            <Text
              className={cn("", isRow ? "text-xl font-bold" : "font-medium")}
            >
              ${attributes.price.toFixed(2)}
            </Text>
            <Text className="text-muted-foreground text-xs line-through">
              ${attributes.price.toFixed(2)}
            </Text>
          </View>
          {isRow ? (
            <Button
              size={"sm"}
              className="text-xs w-20 h-10 flex-row items-center gap-2"
              textClass="text-white"
              onPress={() => addToCart({ ...product, count: 1 })}
            >
              <ShoppingBag size={16} className="text-background" />
              <Text className="text-background">Buy</Text>
            </Button>
          ) : null}
          {/* {!isRow ? (
            <Text className="text-muted-foreground">
              {attributes.stock} left
            </Text>
          ) : null} */}
        </View>
      </View>
    </View>
  );
}
