import { UserDate, UserSchema } from "../schemas/UserSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import Input from "../components/Input";
import { createUser } from "../service/UserService";

export const Register = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserDate>({ resolver: zodResolver(UserSchema) });
  console.log("rodando...");
  const onSubmit = async (data: UserDate) => {
    try {
      await createUser(data);
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className=" bg-blue-950 w-full h-screen flex justify-center items-center">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-70 md:w-120  flex flex-col justify-center items-center gap-10"
      >
        <h1 className="text-white text-2xl font-montserrat">
          Gestor de tarefas
        </h1>
        <div className="w-full flex flex-col justify-center items-center gap-3">
          <Input
            type="text"
            placeholder="Nome completo"
            error={errors.name?.message}
            {...register("name")}
          />
          <Input
            type="email"
            placeholder="Email"
            error={errors.email?.message}
            {...register("email")}
          />
          <Input
            type="password"
            placeholder="Senha"
            error={errors.password?.message}
            {...register("password")}
          />
          <Input
            type="password"
            placeholder="Confirme a senha"
            error={errors.confirmPassword?.message}
            {...register("confirmPassword")}
          />
          <button
            className=" w-full px-5 h-10 rounded bg-blue-500 text-white hover:bg-white hover:text-blue-500 cursor-pointer mt-3"
            type="submit"
          >
            Cadastrar
          </button>
          <p className="text-white text-sm font-inter">
            Tem conta?{" "}
            <Link
              className="font-montserrat underline hover:text-blue-200"
              to={"/"}
            >
              Entre
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};
