import { api } from "../api/AxiosConfig";
import { UserType } from "../types/UserType";

export async function getAllUsers() {}
export async function getUserById() {}
export async function createUser(user: UserType) {
  try {
    await api.post("/users", {
      name: user.name,
      email: user.email,
      password: user.password,
    });
  } catch (error: any) {
    console.error(
      "Erro ao fazer cadastro",
      error.response?.data,
      error.message,
    );
  }
}
export async function updateUser() {}
export async function deleteUser() {}
