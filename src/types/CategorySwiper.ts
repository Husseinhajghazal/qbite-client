export interface Translation {
  id?: number;
  languageId: number;
  text: string;
}

export interface TranslatedProp {
  id: number;
  fallback: string;
  languageId: number;
  translations: Translation[];
}

export interface Category {
  id: string;
  icon: string;
  name: TranslatedProp;
}
