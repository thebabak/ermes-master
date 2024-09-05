export type product = {
  id: number;
  productName?: string;
  modelNumber?: string;
  Weight?: string;
  power?: string;
  specifiction?: string;
  hsCode?: string;
  categoryName?:string
};
type products = product[];
type innrCategoriesItem = {
  innerCategoryId: number;
  innerCategoryTitle: string;
  products: products;
};
type categoryItem = {
  mainCategoryId: number;
  mainCategoryTitle: string;
  innrCategories: innrCategoriesItem[];
};

export type categories = {
  allCategoriesInfo: categoryItem[];
  MainCategoriesName: string[];
  MainCategoriesInnerCategoriesNames: string[];
  InnerCategoryProducts: products;
};
