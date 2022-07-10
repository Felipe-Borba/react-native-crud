import axios from "axios";

axios.defaults.baseURL = "https://test-api.atom6studio.com";

export namespace authApi {
  export interface ErrorResponse {
    statusCode: string;
    message: string[];
    error: string;
  }

  export interface AuthResponse {
    access: { token: string; refresh_token: string };
    user: UserDto;
  }
  export interface UserDto {
    id: string;
    username: string;
    email: string;
    created_at: string;
  }

  export type SignUpRequest = {
    username: string;
    email: string;
    password: string;
  };
  export async function signUp(body: SignUpRequest) {
    return axios
      .post<AuthResponse>("/auth/signup", body)
      .then((response) => response.data)
      .catch(requestError());
  }

  export type SignInRequest = { username: string; password: string };
  export async function signIn(body: SignInRequest) {
    const response = await axios
      .post<AuthResponse>("/auth/signin", body)
      .then((response) => response.data)
      .catch(requestError());

    if (response) {
      axios.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${response.access.token}`;
    }

    return response;
  }

  // TODO add response type
  export async function refresh(refreshToken: string) {
    return axios
      .post("/auth/refresh", {
        refresh_token: refreshToken,
      })
      .then((response) => response.data)
      .catch(requestError());
  }

  export async function check() {
    return axios
      .get<UserDto>("/auth/check")
      .then((response) => response.data)
      .catch(requestError());
  }

  export async function remove(id: string) {
    return axios
      .delete<number>(`/auth/delete/${id}`)
      .then((response) => response.data)
      .catch(requestError());
  }
}

function requestError() {
  return (error: any) => {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      console.log(error.response.data);
      console.log(error.response.status);
      alert(error.response.data.message)
    } else if (error.request) {
      // The request was made but no response was received
      // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
      // http.ClientRequest in node.js
      console.log(error.request);
    } else {
      // Something happened in setting up the request that triggered an Error
      console.log("Error", error.message);
    }
    console.log(error.config);
  };
}
