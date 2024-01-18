import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import BottomSheet, { BottomSheetBackdrop } from "@gorhom/bottom-sheet";
import { Text, View } from "react-native";
import { useStore } from "@/hooks/useStore";

interface CartBottomSheetProps {
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
}
export function CartBottomSheet({
  isOpen,
  onOpenChange,
}: CartBottomSheetProps) {
  const bottomSheetRef = useRef<BottomSheet>(null);
  const snapPoints = useMemo(() => ["30%"], []);

  const { cart } = useStore();

  const handleSheetChanges = useCallback((index: number) => {
    if (index < 0) {
      onOpenChange(false);
    }
  }, []);

  useEffect(() => {
    if (isOpen) {
      bottomSheetRef.current?.snapToIndex(0);
    } else {
      bottomSheetRef.current?.close();
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
    <BottomSheet
      ref={bottomSheetRef}
      index={0}
      enablePanDownToClose={true}
      snapPoints={snapPoints}
      backdropComponent={renderBackdrop}
      style={{ backgroundColor: "#fff", zIndex: 500 }}
      onChange={handleSheetChanges}
    >
      <View className="flex-1">
        <Text className="">Awesome Bottom Sheet 🎉</Text>
      </View>
    </BottomSheet>
  );
}
