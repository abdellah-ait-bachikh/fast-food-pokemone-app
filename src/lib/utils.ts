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
    return value.toString();
  }
};
export const formatMoneyMAD = (value: number | string): string => {
  return value.toLocaleString("fr-MA", {
    style: "currency",
    currency: "MAD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 4,
  });
};

export const formatDateShort = (date: Date): string => {
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = String(date.getFullYear()).slice(-2);
  return `${day}/${month}/${year}`;
};
export const formatDateWithDayInFrench = (date: Date): string => {
  const formatter = new Intl.DateTimeFormat("fr-FR", {
    weekday: "long",
    day: "2-digit",
    month: "2-digit",
    year: "2-digit",
  });

  return formatter.format(date);
};

export const getDateDifferenceInFrench = (date: Date): string => {
  const now = new Date();
  const diffMs = Math.abs(now.getTime() - date.getTime());

  const diffMinutes = Math.floor(diffMs / (1000 * 60));
  const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
  const diffMonths = Math.floor(diffDays / 30);
  const diffYears = Math.floor(diffDays / 365);

  if (diffMinutes < 60) {
    return `${diffMinutes} ${diffMinutes === 1 ? "minute" : "minutes"}`;
  }

  if (diffHours < 24) {
    return `${diffHours} ${diffHours === 1 ? "heure" : "heures"}`;
  }

  if (diffDays < 30) {
    return `${diffDays} ${diffDays === 1 ? "jour" : "jours"}`;
  }

  if (diffMonths < 12) {
    return `${diffMonths} ${diffMonths === 1 ? "mois" : "mois"}`;
  }

  return `${diffYears} ${diffYears === 1 ? "an" : "ans"}`;
};

export const getTimeDeferent = (date: Date) => {
  const target = new Date(date);
  const now = new Date();
  const diffMs = Math.abs(now.getTime() - target.getTime());
  const diffS = Math.floor(diffMs / 1000);
  const diffM = Math.floor(diffMs / (1000 * 60));
  const diffH = Math.floor(diffMs / (1000 * 60 * 60));
  const diffD = Math.floor(diffMs / (1000 * 60 * 60 * 24));
  if (diffS < 60) {
    return `${diffS} s`;
  } else if (diffM < 60) {
    return `${diffM} m`;
  } else if (diffH < 60) {
    return `${diffH} h`;
  } else {
    return `${diffD} j`;
  }
};

export const getFullTime = (date:Date)=>{
  const cureentDate = new Date(date)
return `${cureentDate.getHours()}h ${cureentDate.getMinutes()}m ${cureentDate.getSeconds()}s`
}

export function formatDateWithTime(date: Date | null): string {
  // console.log(date)
  if (date===null) {
    return 'encour';
  }
  const parsDate = new Date(date)

  const day = String(parsDate.getDate()).padStart(2, '0');
  const month = String(parsDate.getMonth() + 1).padStart(2, '0');
  const year = parsDate.getFullYear();

  const hours = String(parsDate.getHours()).padStart(2, '0');
  const minutes = String(parsDate.getMinutes()).padStart(2, '0');

  return `${day}/${month}/${year} à ${hours}:${minutes}`;
}


export const getHours =(date:Date=new Date())=>{
const dateTime = new Date(date)
const hours = dateTime.getHours()
const minute = dateTime.getMinutes()
return `${hours}:${minute}`
}