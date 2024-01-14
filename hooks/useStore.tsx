import AsyncStorage from "@react-native-async-storage/async-storage";
import { ProductType } from "@/types";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface ProductWithCount extends ProductType {
  count: number;
}
interface State {
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
  cart: ProductWithCount[];
  cartLength: number;
  addToCart: (product: ProductWithCount) => void;
  removeFromCart: (product: ProductWithCount) => void;
  clearCart: () => void;
}

export const useStore = create(
  persist<State>(
    (set, get) => ({
      isOpen: false,
      onOpenChange: (isOpen) => set({ isOpen }),
      cart: [],
      cartLength: 0,
      addToCart: (product) =>
        set((state) => {
          let newCart = [...state.cart];
          const productInCart = state.cart.find((p) => p.id === product.id);
          if (productInCart) {
            const filterCart = state.cart.filter((p) => p.id !== product.id);

            newCart = [
              ...filterCart,
              { ...productInCart, count: productInCart.count + 1 },
            ];
          } else {
            newCart = [...state.cart, product];
          }

          return {
            cart: newCart,
            cartLength: state.cartLength + product.count,
          };
        }),
      removeFromCart: (product) => {
        set((state) => {
          const newCart = state.cart.filter((p) => p.id !== product.id);
          return {
            cart: newCart,
            cartLength: state.cartLength - product.count,
          };
        });
      },
      clearCart: () => set({ cart: [], cartLength: 0 }),
    }),
    { name: "cart", storage: createJSONStorage(() => AsyncStorage) }
  )
);
