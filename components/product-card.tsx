import { ProductType } from "@/types";
import React from "react";
import { Text, View } from "react-native";
import ProductImage from "./product-image";
import { BASE_URL } from "@/lib/constants";

interface ProductProps {
  product: ProductType;
}
export function ProductCard({ product: { attributes } }: ProductProps) {
  return (
    <View>
      <View className="w-52 h-52 rounded-lg border border-border overflow-hidden">
        <ProductImage
          source={`${BASE_URL}${attributes.images.data[0]?.attributes.url}`}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "contain",
          }}
        />
      </View>
    </View>
  );
}
