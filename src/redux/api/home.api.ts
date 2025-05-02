import { request } from "@/lib/utils";
import { Dispatch } from "@reduxjs/toolkit";
import {
  setDashboardSummary,
  setError,
  setRankingDeleverys,
  setRankingOffersData,
  setRankingProductsData,
} from "../slace/homeSlice";
import axios from "axios";
import { AppDispatch } from "@/type/statesTypes";
export const fetchHomeData = async (
  dispatch: AppDispatch,
  setIsLoading: (value: boolean) => void
) => {
  dispatch(setError(null));
  try {
    await Promise.all([
      dispatch(getDashboardSummary()),
      dispatch(getRankingProductsData()),
      dispatch(getRankingOffersData()),
      dispatch(getRankingDeleverys()),
    ]);
  } catch (error) {
    dispatch(setDashboardSummary(null));
    dispatch(setRankingProductsData(null));
    dispatch(setRankingOffersData(null));
    dispatch(setRankingDeleverys(null));

    if (axios.isAxiosError(error)) {
      if (error.response) {
        if (error.response.status === 404) {
          dispatch(setError("Données non trouvées."));
        } else {
          dispatch(setError(error.response.data.message || "Erreur serveur."));
        }
      } else {
        dispatch(setError("Erreur réseau : aucune réponse du serveur"));
      }
    } else {
      dispatch(setError("Erreur inconnue"));
    }
  } finally {
    setIsLoading(false);
  }
};

export const getDashboardSummary =
  (cb?: () => void) => async (dispatch: Dispatch) => {
    // await new Promise((resolve) => setTimeout(resolve, 2000));

    const res = await request.get(`/home/payments-status`);
    if (res.status === 200) {
      dispatch(
        setDashboardSummary({
          totalOrders: res.data.totalPayments,
          dineInOrders: res.data.totalNormalPayments,
          deliveryOrders: res.data.totalDelevredPayments,
          totalRevenue: res.data.totalMoney,
        })
      );
      cb && cb();
    }
  };

export const getRankingProductsData =
  (cb?: () => void) => async (dispatch: Dispatch) => {
    // await new Promise((resolve) => setTimeout(resolve, 2000));

    const res = await request.get(`/home/top-ranking-products`);
    if (res.status === 200) {
      dispatch(
        setRankingProductsData({
          rankingProducts: res.data.rankingProducts,
          shart: res.data.shart,
        })
      );
      cb && cb();
    }
  };

export const getRankingOffersData =
  (cb?: () => void) => async (dispatch: Dispatch) => {
    // await new Promise((resolve) => setTimeout(resolve, 5000));

    const res = await request.get(`/home/top-ranking-offers`);
    if (res.status === 200) {
      dispatch(setRankingOffersData(res.data));
      cb && cb();
    }
  };
export const getRankingDeleverys =
  (cb?: () => void) => async (dispatch: Dispatch) => {
    // await new Promise((resolve) => setTimeout(resolve, 5000));

    const res = await request.get(`/home/top-ranking-deleverys`);
    if (res.status === 200) {
      dispatch(setRankingDeleverys(res.data));
      cb && cb();
    }
  };
