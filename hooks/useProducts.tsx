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

export function useSearchProduct({ query }: { query: string }) {
  return useQuery({
    queryKey: ["search"],
    queryFn: async (): Promise<ProductType[]> => {
      try {
        const { data } = await client<ProductsMetaType>(
          `/api/products?filters[name][$containsi]=${query}&populate=*`
        );

        console.log(data.data);
        return data.data;
      } catch (e: any) {
        console.log(e);
        throw new Error("Something Went Worng!");
      }
    },
    enabled: !!query,
  });
}
