import store from "@/redux/store";

export interface TinitialState {
  isAsideOpen: boolean;
  theme: "light" | "dark";
}
export interface ThomeInitialState {
  dashboardSummary: {
    totalOrders: number; // Corresponds to "Commandes"
    dineInOrders: number; // Corresponds to "Sur place"
    deliveryOrders: number; // Corresponds to "Livraison"
    totalRevenue: number; // Corresponds to "Total (DH)"
  } | null;
  error: string | null;
  rankingProductsData: null | {
    rankingProducts: {
      id: number;
      name: string;
      category: {
        name: string;
        imageUri: string | null;
      };
      quantity: number;
    }[];
    shart: { labels: string[]; series: number[] };
  };
  rankingOffersData:
    | null
    | {
        id: number;
        name: string;
        quantity: number;
        imageUri: string | null;
        createdAt: Date;
      }[];
  rankingDeleverys:
    | null
    | {
        id: number;
        useName: string;
        createdAt: Date;
        totalPayments: number;
        totaleMoney: number;
      }[];
  mountlyPayments:
    | null
    | {
        month: number;
        total: number;
        count: number;
      }[];
}

export interface TdayInitialState {
  currentDay: null | { id: number; startAt: Date; stopAt: Date };
  error: null | string;
  days:
    | {
        id: number;
        startAt: Date;
        stopAt: Date | null;
        _count: {
          payments: number;
          paymentsProducts: number;
          paymentsOffers: number;
        };
      }[]
    | [];
  pagination: {
    total: number;
    currentPage: number;
    rowsPerPage: number;
    totalPages: number;
  } | null;
  showDay: null | {
    id: string;
    startAt: Date;
    stopAt: Date | null;
    paymentsProducts: {
      id: number;
      dailyNumber: number;
      clientPhoneNumber: string;
      createdAt: string;
      delevry: { userName: string };
      delevryPrice: number;
      detailsProducts: {
        id: number;
        product: {
          id: number;
          name: string;
          price: number;
          category: { name: string };
        };
        quantity: number;
        totalePrice: number;
      }[];
      isPayed: boolean;
      totalePrice: number;
      updatedAt: string;
    }[];
    paymentsOffers: {}[];
    deleverys: {
      id: number;
      _count: {
        ordersProducts: number;
        ordersOffers: number;
      };
      userName: string;
      phone: string;
      role: "admin" | "livreur";
      totalEarnings: number;
      totalDeleveryPrice: number;
    }[];
    shart: {
      products: { labels: string[]; series: number[] };
      offers: { labels: string[]; series: number[] };
    };
    products: {
      id: number;
      name: string;
      quantity: number;
      category: { name: string };
    }[];
    offers: { id: number; name: string; quantity: number }[];
  };
}
export type AppDispatch = typeof store.dispatch;
