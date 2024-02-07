import ProductImage from "@/components/product-image";
import { Input } from "@/components/ui/input";
import { useCategory } from "@/hooks/useCategory";
import { useDebounce } from "@/hooks/useDebounce";
import { useSearchProduct } from "@/hooks/useProducts";
import { BASE_URL } from "@/lib/constants";
import React, { useState } from "react";
import { FlatList, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Search() {
  const [searchVal, setSearchVal] = useState("");
  const debouncedValue = useDebounce(searchVal);
  const { data, isLoading } = useCategory();
  const { data: products, refetch } = useSearchProduct({
    query: debouncedValue,
  });

  return (
    <SafeAreaView className="flex-1">
      <ScrollView>
        <View className="flex-1 px-6 py-4">
          <View className="mb-6">
            <Input
              value={searchVal}
              onChangeText={(text) => setSearchVal(text)}
              placeholder="Search"
            />
          </View>

          {searchVal && products && products.length ? (
            <View className="gap-4">
              {products.map((p) => {
                return (
                  <View key={p.id} className="flex-row items-center gap-4">
                    <View className="w-10 h-16">
                      <ProductImage
                        source={`${BASE_URL}${p.attributes.images.data[0]?.attributes.url}`}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "contain",
                        }}
                      />
                    </View>
                    <View className="flex-1 border-b border-border pb-4">
                      <Text className="line-clamp-2">{p.attributes.name}</Text>
                    </View>
                  </View>
                );
              })}
            </View>
          ) : null}

          <View className="">
            {!searchVal && data && data.length ? (
              <FlatList
                data={data}
                numColumns={2}
                keyExtractor={(item) => item.id.toString()}
                contentContainerStyle={{ gap: 10 }}
                columnWrapperStyle={{ gap: 10 }}
                scrollEnabled={false}
                renderItem={({ item }) => {
                  return (
                    <View className="relative flex-1 h-52 rounded-lg overflow-hidden">
                      <View className="absolute z-20 items-center justify-center w-full h-full">
                        <Text className="text-white text-xl font-bold">
                          {item.attributes.name}
                        </Text>
                      </View>

                      <View className="absolute left-0 top-0 w-full h-full bg-black/40 z-10" />
                      <ProductImage
                        source={`${BASE_URL}${item.attributes.image.data.attributes.url}`}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "contain",
                        }}
                      />
                    </View>
                  );
                }}
              />
            ) : null}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
