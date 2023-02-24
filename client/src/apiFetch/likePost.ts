import { createAxios } from "./createAxios";

export const postLikeDataFecth = async (likeData: any) => {
  await createAxios().post("/api/questions/like-post", likeData);
};
