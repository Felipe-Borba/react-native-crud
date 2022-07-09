import axios from "axios";

const atom6Api = axios.create({
  baseURL: "https://test-api.atom6studio.com",
});

export namespace auth {
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
  };

  type SignUpRequest = { username: string; email: string; password: string };
  export async function signUp(body: SignUpRequest) {
    return atom6Api.post<AuthResponse | ErrorResponse>("/auth/signup", body);
  }

  type SignInRequest = { username: string; password: string };
  export async function signIn(body: SignInRequest) {
    const response = await atom6Api.post<AuthResponse | ErrorResponse>(
      "/auth/sigin",
      body
    );

    if (response.status == 200) {
      const data = response.data as AuthResponse;
      atom6Api.defaults.headers.common["Authorization"] = `Bearer ${data.access.token}`;
    }

    return response;
  }

  // TODO add response type
  export async function refresh(refreshToken: string) {
    return atom6Api.post("/auth/refresh", {
      refresh_token: refreshToken,
    });
  }

  export async function check() {
    return atom6Api.get<UserDto | ErrorResponse>("/auth/check");
  }

  export async function remove(id: string) {
    return atom6Api.delete<number | ErrorResponse>(`/auth/delete/${id}`);
  }
}
