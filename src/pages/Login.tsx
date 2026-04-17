import { Link, useNavigate } from "react-router-dom";
import LoginInput from "../components/LoginInput";
import { login } from "../service/AuthService";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { LoginData, LoginSchema } from "../schemas/LoginSchema";

const Login = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginData>({ resolver: zodResolver(LoginSchema) });

  const onSubmit = async (data: LoginData) => {
    
    try {
      await login(data.email, data.password);
      navigate("/home");
    } catch (error) {
      console.error(error)
    }
  }
  return (
    <div className=" bg-blue-950 w-full h-screen flex justify-center items-center">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-[70%] flex flex-col justify-center items-center gap-10"
      >
        <h1 className="text-white text-2xl font-montserrat">
          Gestor de tarefas
        </h1>
        <div className="w-full flex flex-col justify-center items-center gap-3">


          <LoginInput
            type="email"
            placeholder="Email"
            error={errors.email?.message}
            {...register("email")}
          />
          <LoginInput
            type="password"
            placeholder="Senha"
            error={errors.password?.message}
            {...register("password")}
          />
          <button
            className=" w-full px-5 h-10 rounded bg-blue-500 text-white hover:bg-white hover:text-blue-500 cursor-pointer mt-3"
            type="submit"
          >
            Entrar
          </button>
          <p className="text-white text-sm font-inter">
            Não tem cadastro?{" "}
            <Link
              className="font-montserrat underline hover:text-blue-200"
              to={"/cadastro"}
            >
              Cadastre-se
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
