import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetModal,
} from "@gorhom/bottom-sheet";
import { Pressable, ScrollView, Text, View } from "react-native";
import { useStore } from "@/hooks/useStore";
import ProductImage from "./product-image";
import { BASE_URL } from "@/lib/constants";
import { Button } from "./ui/button";

interface CartBottomSheetProps {}
export function CartBottomSheet({}: CartBottomSheetProps) {
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  // const snapPoints = useMemo(() => ["30%", "60%"], []);
  const snapPoints = useMemo(() => ["60%"], []);

  const { cart, isOpen, onOpenChange } = useStore();

  const handleSheetChanges = useCallback((index: number) => {
    if (index < 0) {
      onOpenChange(false);
    }
  }, []);

  useEffect(() => {
    if (isOpen) {
      // bottomSheetModalRef.current?.snapToIndex(0);
      bottomSheetModalRef.current?.present();
    } else {
      bottomSheetModalRef.current?.close();
    }
  }, [isOpen]);

  const renderBackdrop = useCallback(
    (props: any) => (
      <BottomSheetBackdrop
        {...props}
        disappearsOnIndex={-1}
        appearsOnIndex={0}
      />
    ),
    []
  );
  return (
    <BottomSheetModal
      ref={bottomSheetModalRef}
      index={0}
      enablePanDownToClose={true}
      snapPoints={snapPoints}
      backdropComponent={renderBackdrop}
      style={{ backgroundColor: "#fff", paddingBottom: 10 }}
      onChange={handleSheetChanges}
    >
      <ScrollView className="flex-1 pb-16">
        <View className="flex-1 h-full px-6 py-2 justify-between relative">
          {/* <Text className="">Awesome Bottom Sheet 🎉</Text> */}
          <View className="gap-4">
            {cart.length ? (
              cart.map((p) => {
                return (
                  <View key={p.id} className="flex-row justify-between gap-4">
                    <View className="w-20 h-24 relative ">
                      <ProductImage
                        source={`${BASE_URL}${p.attributes.images.data[0]?.attributes.url}`}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "contain",
                          borderRadius: 10,
                        }}
                      />
                    </View>
                    <View className="flex-1 items-start gap-4">
                      <Text className="font-medium line-clamp-2">
                        {p.attributes.name}
                      </Text>
                      <View className="border border-border flex-row items-center h-9">
                        <Pressable className="w-8 items-center justify-center">
                          <Text className="text-sm">-</Text>
                        </Pressable>
                        <View className="border-r border-l border-border px-4 h-full justify-center">
                          <Text className="text-sm">{p.count}</Text>
                        </View>
                        <Pressable className="w-8 items-center justify-center">
                          <Text className="text-sm">+</Text>
                        </Pressable>
                      </View>
                    </View>

                    <View className="">
                      <Text className="font-bold text-lg">
                        ${p.attributes.price}
                      </Text>
                    </View>
                  </View>
                );
              })
            ) : (
              <Text className="text-center">Cart is empty</Text>
            )}
          </View>
        </View>
      </ScrollView>
      {cart.length ? (
        <View className="absolute bottom-0 w-full py-4 px-6 bg-background">
          <Button className="py-2 text-sm">Checkout</Button>
        </View>
      ) : null}
    </BottomSheetModal>
  );
}
