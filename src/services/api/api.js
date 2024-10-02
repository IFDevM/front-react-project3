import { axiosService } from "./axiosInstance";

export async function getBirthsByYears(startYear, endYear) {
    let uri = ""
    uri += startYear? `start_year=${startYear}&` : ""
    uri += endYear? `end_year=${endYear}&` : ""
    const response = await axiosService.get(`/births?${uri}`);
    return response;
}