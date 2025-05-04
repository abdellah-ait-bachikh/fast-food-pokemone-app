import { Dispatch } from "@reduxjs/toolkit";
import { setCurrentDay, setError } from "../slace/daySlice";
import { request } from "@/lib/utils";
import axios from "axios";
import { AppDispatch } from "@/type/statesTypes";

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


  export const createDay = (cb?:()=>void)=>async(dispatch:AppDispatch)=>{
    try {
        
    } catch (error) {
        
    }finally{
        
    }
  }