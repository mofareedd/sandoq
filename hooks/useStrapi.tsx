import { client } from "@/lib/client";
import { CategoriesMetaType, CategoryType } from "@/types";
import { useQuery } from "@tanstack/react-query";

export function useCategory() {
  return useQuery({
    queryKey: ["categories"],
    queryFn: async (): Promise<CategoryType[]> => {
      try {
        const { data } = await client<CategoriesMetaType>(
          "/api/categories?populate=*"
        );

        return data.data;
      } catch (e: any) {
        console.log(e);
        throw new Error(e);
      }
    },
  });
}
