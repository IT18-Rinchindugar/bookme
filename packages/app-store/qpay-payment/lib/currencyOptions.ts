export const currencyOptions = [{ label: "Tugrug", value: "MNT" }] as const;

type CurrencyCode = (typeof currencyOptions)[number]["value"];

export const currencySymbols: Record<CurrencyCode, string> = {
  MNT: "₮",
};

export function isAcceptedCurrencyCode(currencyCode: string): currencyCode is CurrencyCode {
  return Object.keys(currencySymbols).includes(currencyCode);
}
