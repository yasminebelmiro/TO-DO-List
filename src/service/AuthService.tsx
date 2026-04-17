import { api } from "../api/AxiosConfig";

export async function login(email: string, password: string) {
  try {
    const response = await api.post("/auth/login", {
      email,
      password,
    });

    const token = response.data.token;
    localStorage.setItem("token", token);

    return token;
  } catch (error: any) {
    console.error(
      "Erro ao fazer login:",
      error.response?.data || error.message,
    );
  }
}
