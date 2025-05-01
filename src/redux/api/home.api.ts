import { request } from "@/lib/utils";
import { Dispatch } from "@reduxjs/toolkit";
import {
  setDashboardSummary,
  setError,
  setRankingProductsData,
} from "../slace/homeSlice";
import axios from "axios";
export const getDashboardSummary =
  (cb?: () => void) => async (dispatch: Dispatch) => {
    dispatch(setError(null));
    await new Promise((resolve) => setTimeout(resolve, 2000));
    try {
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
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.response) {
          dispatch(setError(error.response.data.message));
        } else {
          dispatch(setError("Erreur réseau : aucune réponse du serveur"));
        }
      } else {
        dispatch(setError("Erreur inconnue :"));
      }
      cb && cb();
    }
  };

export const getRankingProductsData =
  (cb?: () => void) => async (dispatch: Dispatch) => {
    dispatch(setError(null));
    await new Promise((resolve) => setTimeout(resolve, 2000));
    try {
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
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.response) {
          dispatch(setError(error.response.data.message));
        } else {
          dispatch(setError("Erreur réseau : aucune réponse du serveur"));
        }
      } else {
        dispatch(setError("Erreur inconnue :"));
      }
      cb && cb();
    }
  };
