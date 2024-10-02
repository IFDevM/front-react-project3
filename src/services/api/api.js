import { axiosService } from "./axiosInstance";

export async function getBirthsByYears(params) {

    const response = await axiosService.get("/births");
    return response;
    
}