import { Category, TranslatedProp } from "./CategorySwiper";

export interface Price {
  currencyId: number;
  price: number;
}

interface ProductDetails {
  icon: string;
  unit: TranslatedProp;
}

interface Detail {
  value: string;
  productDetails: ProductDetails;
}

export interface Images {
  imageURL: string;
  id: number;
  isDefault: boolean;
}

export interface Meal {
  id: number;
  slug: string;
  images: Images[];
  name: TranslatedProp;
  description: TranslatedProp;
  prices: Price[];
  details: Detail[];
  category: Category;
}
