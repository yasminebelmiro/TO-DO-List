import z from "zod";

export const UserSchema = z
  .object({
    name: z.string().min(1, "Nome completo é obrigatório."),
    email: z.email(),
    password: z.string().min(6, "Senha deve ter no mínimo 6 caracteres."),
    confirmPassword: z.string().min(6, "Confirme a senha."),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "As senhas devem ser idênticas",
    path: ["confirmPassword"],
  });

  export type UserDate = z.infer<typeof UserSchema>