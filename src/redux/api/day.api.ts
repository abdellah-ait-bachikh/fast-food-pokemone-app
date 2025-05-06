import { Dispatch } from "@reduxjs/toolkit";
import { setCurrentDay, setDays, setError } from "../slace/daySlice";
import { request } from "@/lib/utils";
import axios from "axios";
import { AppDispatch } from "@/type/statesTypes";
import { addToast } from "@heroui/react";

export const fetchDayData = async (
  dispatch: AppDispatch,
  setIsLoading: (value: boolean) => void
) => {
  try {
    // await new Promise((resolve) => setTimeout(resolve, 4000));
    await Promise.all([dispatch(getCurrentDay())]);
  } catch (error) {
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

export const getCurrentDay =
  (cb?: () => void) => async (dispatch: Dispatch) => {
    const res = await request.get("/days/latest");

    if (res.status === 200) {
      dispatch(setCurrentDay(res.data));
      return;
    }
    cb && cb();
  };

export const createDay =
  (cb?: () => void | undefined, setLoading?: (value: boolean) => void) =>
  async (dispatch: AppDispatch) => {
    setLoading && setLoading(true);
    // await new Promise((resolve) => setTimeout(resolve, 5000));
    try {
      const res = await request.post("/days");
      if (res.status === 201) {
        dispatch(setCurrentDay(res.data.day));
        addToast({
          title: "Créer une journée",
          description: res.data.message,
          color: "success",
        });
        cb && cb();
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.response) {
          addToast({
            title: "Créer une journée",
            description: error.response.data.message,
            color: "danger",
          });
        } else {
          addToast({
            title: "Créer une journée",
            description: "Erreur réseau : aucune réponse du serveur",
            color: "danger",
          });
        }
      } else {
        addToast({
          title: "Créer une journée",
          description: "Erreur inconnue",
          color: "danger",
        });
      }
    } finally {
      setLoading && setLoading(false);
    }
  };
export const stopDay =
  (
    id: number | null,
    cb?: () => void | undefined,
    setLoading?: (value: boolean) => void
  ) =>
  async (dispatch: AppDispatch) => {
    setLoading && setLoading(true);
    // await new Promise((resolve) => setTimeout(resolve, 5000));
    try {
      if (id === null) {
        addToast({
          title: "Stopé une journée",
          description: "imposibvle de stoper la journe",
          color: "success",
        });
        return;
      }
      const res = await request.put(`/days/stop/${id}`);
      if (res.status === 200) {
        dispatch(setCurrentDay(res.data.day));
        addToast({
          title: "Stopé une journée",
          description: res.data.message,
          color: "success",
        });
        cb && cb();
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.response) {
          addToast({
            title: "Créer une journée",
            description: error.response.data.message,
            color: "danger",
          });
        } else {
          addToast({
            title: "Créer une journée",
            description: "Erreur réseau : aucune réponse du serveur",
            color: "danger",
          });
        }
      } else {
        addToast({
          title: "Créer une journée",
          description: "Erreur inconnue",
          color: "danger",
        });
      }
    } finally {
      setLoading && setLoading(false);
    }
  };

export const getDaysWithPaymentsCount =
  (
    setLoading: (value: boolean) => void,
    { startAt, rowsPerPage,page }: { startAt: Date | undefined; rowsPerPage: string,page:number | '' },
    cb?: () => void | undefined
  ) =>
  async (dispatch: AppDispatch) => {
    try {
      
      setLoading(true);
      await new Promise(resolve=>setTimeout(resolve,1000))
      const res = await request.get(
        `/days/count-payments?startAt=${startAt}&rowsPerPage=${rowsPerPage}&page=${page}`
      );
      if(res.status ===200){
        dispatch(setDays(res.data.days))
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.response) {
          if (error.response.status === 404) {
            dispatch(setError("Données non trouvées."));
          } else {
            dispatch(
              setError(error.response.data.message || "Erreur serveur.")
            );
          }
        } else {
          dispatch(setError("Erreur réseau : aucune réponse du serveur"));
        }
      } else {
        dispatch(setError("Erreur inconnue"));
      }
    } finally {
      setLoading(false);
    }
  };
