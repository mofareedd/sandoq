import { client } from "@/lib/client";
import { ProductType, ProductsMetaType } from "@/types";
import { useQuery } from "@tanstack/react-query";
import React from "react";

export function useProducts() {
  return useQuery({
    queryKey: ["products"],
    queryFn: async (): Promise<ProductType[]> => {
      try {
        const { data } = await client<ProductsMetaType>(
          "/api/products?populate=*"
        );
        return data.data;
      } catch (e: any) {
        console.log(e);
        throw new Error("Something Went Worng!");
      }
    },
  });
}
