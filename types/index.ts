export interface Pagination {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}

export interface CategoryType {
  id: number;
  attributes: {
    name: string;
    createdAt: Date;
    updatedAt: Date;
    publishedAt: Date;
  };
}
export interface ProductType {
  id: number;
  attributes: {
    name: string;
    description: {
      type: any;
      children: { type: any; text: string }[];
    }[];
    price: number;
    createdAt: Date;
    updatedAt: Date;
    publishedAt: Date;
    likes: number;
    sales: number;
    stock: number;
  };
}

export interface CategoriesMetaType {
  data: CategoryType[];
  meta: {
    pagination: Pagination;
  };
}

export interface ProductsMetaType {
  data: ProductType[];
  meta: {
    pagination: Pagination;
  };
}
