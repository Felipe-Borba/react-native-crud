import axios from "axios";
import utils from "./utils";

axios.defaults.baseURL = "https://test-api.atom6studio.com";

export namespace authApi {
  interface AuthResponse {
    access: { token: string; refresh_token: string };
    user: UserDto;
  }
  interface UserDto {
    id: string;
    username: string;
    email: string;
    created_at: string;
  }

  type SignUpRequest = {
    username: string;
    email: string;
    password: string;
  };
  export async function signUp(body: SignUpRequest) {
    return axios
      .post<AuthResponse>("/auth/signup", body)
      .then((response) => response.data)
      .catch(utils.handlePromiseError());
  }

  type SignInRequest = { username: string; password: string };
  export async function signIn(body: SignInRequest) {
    const response = await axios
      .post<AuthResponse>("/auth/signin", body)
      .then((response) => response.data)
      .catch(utils.handlePromiseError());

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
      .catch(utils.handlePromiseError());
  }

  export async function check() {
    return axios
      .get<UserDto>("/auth/check")
      .then((response) => response.data)
      .catch(utils.handlePromiseError());
  }

  export async function remove(id: string) {
    return axios
      .delete<number>(`/auth/delete/${id}`)
      .then((response) => response.data)
      .catch(utils.handlePromiseError());
  }
}
