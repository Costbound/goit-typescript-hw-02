import axios, { AxiosResponse } from "axios";

axios.defaults.baseURL = "https://api.unsplash.com";
axios.defaults.headers.common["Authorization"] =
  "Client-ID 3iN7uzAOU3LijAYutWepFIDfcXWT_xvy4thjPul5E1E";

type APIResponse = {
  results: APIResult[];
  total: number;
  total_pages: number;
};
export type APIResult = {
  alt_description: string;
  urls: {
    small: string;
    full: string;
  };
  id: string;
};

export const fetchImages = async (
  searchWord: string,
  page: number
): Promise<APIResult[]> => {
  const resp: AxiosResponse<APIResponse> = await axios.get("/search/photos", {
    params: {
      query: searchWord,
      page: page,
      per_page: 12,
    },
  });
  return resp.data.results;
};
