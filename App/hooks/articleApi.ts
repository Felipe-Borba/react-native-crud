import axios from "axios";
import utils from "./utils";

export namespace articleApi {
  export interface ArticleResponse {
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

  export async function list() {
    return axios
      .get<ArticleResponse[]>("/article/all")
      .then((response) => response.data)
      .catch(utils.handlePromiseError());
  }

  export async function remove(id:string) {
    return axios.delete("/article/delete/"+id)
    .then((response) => response.data)
    .catch(utils.handlePromiseError());
  }

  interface UpdateRequest {
    title: string;
    description: string;
    body: string;
  }
  export async function update(id: string, body:UpdateRequest) {
    return axios
      .put<ArticleResponse>(`/article/update/${id}`, body)
      .then((response) => response.data)
      .catch(utils.handlePromiseError());
  }
}
