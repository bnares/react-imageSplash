import { useQuery, useMutation } from "@tanstack/react-query";
import axios from "axios";
import axiosInstance from "../utils";

export const useFetchImages = (value:string)=>{
    const {data,isLoading, isPending, error, isError} = useQuery({
        queryKey:["images",value],
        queryFn: async ()=>{
            const key = import.meta.env.VITE_API_KEY;
            const {data} = await axiosInstance.get(`?client_id=${key}&page=1&query=${value}`);
            return data;
        }
    })
    return  {data,isLoading, isPending, error, isError};
}