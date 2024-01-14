import { useCallback, useMemo, useRef } from "react";
import { Pressable, Text, View } from "react-native";
import {
  BottomSheetModal,
  BottomSheetModalProvider,
} from "@gorhom/bottom-sheet";
import { ShoppingBag } from "lucide-react-native";

export function CartBottomSheet() {
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  // variables
  const snapPoints = useMemo(() => ["25%", "50%"], []);

  // callbacks
  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);
  const handleSheetChanges = useCallback((index: number) => {
    console.log("handleSheetChanges", index);
  }, []);

  return (
    <BottomSheetModalProvider>
      <Pressable onPress={handlePresentModalPress} className="relative">
        <ShoppingBag color={"#333"} />
        <View className="absolute bg-red-500 z-10 w-5 h-5 rounded-full -top-2 -right-2 items-center justify-center">
          <Text className="text-white text-xs">{0}</Text>
        </View>
      </Pressable>
      <View className="flex-1">
        <BottomSheetModal
          ref={bottomSheetModalRef}
          index={1}
          snapPoints={snapPoints}
          style={{
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,

            elevation: 5,
          }}
          onChange={handleSheetChanges}
        >
          <View className="flex-1 items-center justify-center">
            <Text>Awesome 🎉</Text>
          </View>
        </BottomSheetModal>
      </View>
    </BottomSheetModalProvider>
  );
}
