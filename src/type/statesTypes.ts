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
    paymentsOffers: {
      include: {
        delevry: {
          select: {
            userName: true;
          };
        };
        detailsOffer: {
          select: {
            id: true;
            quantity: true;
            offer: {
              select: {
                name: true;
                price: true;
                imageUri: true;
              };
            };
            totalePrice: true;
          };
        };
      };
    };
    paymentsProducts: {
      include: {
        delevry: {
          select: {
            userName: true;
          };
        };
        detailsProducts: {
          select: {
            id: true;
            quantity: true;
            product: {
              select: {
                name: true;
                price: true;
                category: {
                  select: {
                    name: true;
                    imageUri: true;
                  };
                };
              };
            };
            totalePrice: true;
          };
        };
      };
    };
    deleverys: {
      id: number;
      _count: {
        ordersProducts: number;
        ordersOffers: number;
      };
      userName: string;
      phone: string;
      role: "admin" | "livreur";
      totalEarnings:number;
      totalDeleveryPrice:number;
    }[];
    shart:{products:{labels:string[],series:number[]},offers:{labels:string[],series:number[]}}
  };
}
export type AppDispatch = typeof store.dispatch;
