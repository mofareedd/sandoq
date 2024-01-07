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
    image: {
      data: StrapiImage;
    };
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
    images: {
      data: StrapiImage[];
    };
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

interface StrapiImage {
  id: number;
  attributes: {
    name: string;
    alternativeText: null;
    caption: null;
    width: number;
    height: number;
    formats: {
      thumbnail: StrapiImageFormat;
      large: StrapiImageFormat;
      medium: StrapiImageFormat;
      small: StrapiImageFormat;
    };
    hash: string;
    size: number;
    url: string;
    previewUrl: null;
    provider_metadata: null;
    createdAt: Date;
    updatedAt: Date;
  };
}

interface StrapiImageFormat {
  hash: string;
  path: null;
  width: number;
  height: number;
  size: number;
  url: string;
}
