import axios from "axios";
import utils from "./utils";

export namespace articleApi {
  interface ArticleResponse {
    id: string;
    title: string;
    description: string;
    body: string;
    created_at: string;
    thumbnail: string;
  }

  interface CreateArticleRequest {
    title: string;
    description: string;
    body: string;
  }
  export async function create(body: CreateArticleRequest) {
    return axios
      .post<ArticleResponse>("/article/create", body)
      .then((response) => response.data)
      .catch(utils.handlePromiseError());
  }
}
