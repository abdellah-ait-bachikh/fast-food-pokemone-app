import axios from "axios";

export const app_uri = import.meta.env.VITE_API_URI;

export const request = axios.create({
  baseURL: app_uri,
});
export const formatNumberShort = (value: number): string => {
  if (value >= 1_000_000_000) {
    return `${(value / 1_000_000_000).toFixed(1).replace(/\.0$/, "")}MD`;
  } else if (value >= 1_000_000) {
    return `${(value / 1_000_000).toFixed(1).replace(/\.0$/, "")}M`;
  } else {
    return formatMoneyMAD(value);
  }
};
export const formatMoneyMAD = (value: number): string => {
  return value.toLocaleString("fr-MA", {
    style: "currency",
    currency: "MAD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 4,
  });
};
