import axios, { AxiosResponse } from "axios";

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
    return await axios.post<AuthResponse | ErrorResponse>("/auth/signup", body);
  }

  export type SignInRequest = { username: string; password: string };
  export async function signIn(body: SignInRequest) {
    const response = await axios.post<AuthResponse | ErrorResponse>(
      "/auth/signin",
      body
    );

    if (response.status == 200) {
      const data = response.data as AuthResponse;
      axios.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${data.access.token}`;
    }

    return response;
  }

  // TODO add response type
  export async function refresh(refreshToken: string) {
    return axios.post("/auth/refresh", {
      refresh_token: refreshToken,
    });
  }

  export async function check() {
    return axios.get<UserDto | ErrorResponse>("/auth/check");
  }

  export async function remove(id: string) {
    return axios.delete<number | ErrorResponse>(`/auth/delete/${id}`);
  }
}
