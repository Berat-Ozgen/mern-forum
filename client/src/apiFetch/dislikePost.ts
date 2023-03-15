import { createAxios } from "./createAxios";

export const postDisLikeDataFecth = async (disLikeData: any) => {
  await createAxios().post("/api/questions/dislike-post", disLikeData);
};
