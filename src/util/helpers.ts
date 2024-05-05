import { TranslatedProp } from "@/types/CategorySwiper";
import { Price } from "@/types/Meal";

export enum languages {
  "en" = 1,
  "ar" = 2,
}

export enum CurrenciesEnum {
  "$" = 1,
  "₺" = 2,
}

const Currencies = [
  { id: 1, symbol: "$" },
  { id: 2, symbol: "₺" },
];

export const changeTextLanguage = (
  translated: TranslatedProp | null,
  language: "en" | "ar",
  defaultValue: any
): string => {
  if (!translated) {
    return defaultValue;
  }

  const { languageId } = translated;
  const languageIdToFind = languages[language];

  if (languageId === languageIdToFind) {
    return translated.fallback;
  }

  const { translations } = translated;

  if (!translations || translations.length === 0) {
    return defaultValue;
  }

  const foundTranslation = translations.find(
    (e) => e.languageId === languageIdToFind
  );

  return foundTranslation ? foundTranslation.text : defaultValue;
};

export const getCurrencyValue = (prices: Price[]) => {
  const money: "$" | "₺" = (localStorage.getItem("money") as "$" | "₺") || "₺";
  const foundCurrency = prices.find(
    (e) => e.currencyId === CurrenciesEnum[money]
  );

  return foundCurrency ? foundCurrency.price : 0;
};

export const mergeCurrency = (prices: Price[]) => {
  const money: "$" | "₺" = (localStorage.getItem("money") as "$" | "₺") || "₺";

  const price = prices.find((e) => e.currencyId === CurrenciesEnum[money]);

  if (price) {
    const foundCurrency = Currencies.find((e) => e.id === price.currencyId);
    return price.price + " " + foundCurrency?.symbol;
  } else {
    const foundCurrency = Currencies.find((e) => e.id === prices[0].currencyId);
    return prices[0].price + " " + foundCurrency?.symbol;
  }
};
