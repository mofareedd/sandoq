import React from "react";
import { Pressable, ScrollView, Text, View } from "react-native";
import ProductImage from "./product-image";
import { BASE_URL } from "@/lib/constants";
import { useCategory } from "@/hooks/useCategory";
import { Button } from "./ui/button";

export default function Categories() {
  const { data: categories, isLoading } = useCategory();
  const [selectedCategory, setSelectedCategory] = React.useState<number | null>(
    null
  );

  function onChangeCategory(id: number) {
    selectedCategory === id
      ? setSelectedCategory(null)
      : setSelectedCategory(id);
  }
  return (
    <ScrollView horizontal className="" showsHorizontalScrollIndicator={false}>
      {categories && categories.length
        ? categories.map((category) => {
            const isSelected = selectedCategory === category.id;
            return (
              <Button
                onPress={() => onChangeCategory(category.id)}
                className="ml-6 px-4 rounded-xl"
                key={category.id}
                variant={isSelected ? "default" : "outline"}
                size={"sm"}
                textClass="font-normal capitalize"
              >
                {category.attributes.name}
              </Button>
            );
          })
        : null}
    </ScrollView>
  );
}
