import { useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const validationSchema = z.object({
  name: z.string().min(1, "Preencha com seu nome completo"),
  email: z
    .string()
    .email("Preencha com um e-mail válido")
    .min(1, "Preencha com um e-mail válido"),
});

type FormData = z.infer<typeof validationSchema>;

const Newsletter = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(validationSchema),
  });

  const onSubmit = async (values: FormData) => {
    const { name, email } = values;

    setLoading(true);
    setError(null);

    try {
      const response = await axios.post(
        "https://corebiz-test-server.onrender.com/api/v1/newsletter",
        { name, email },
      );

      if (response.status === 200) {
        setSuccess(true);
        reset();
      } else {
        setError("Algo deu errado. Tente novamente.");
      }
    } catch (error) {
      setError("Erro ao enviar dados. Tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  const handleNewSubscription = () => {
    setSuccess(false);
  };

  return (
    <div className="mt-[4.3125rem] w-full bg-[#F2F2F2] pb-[2.25rem]">
      <div className="flex flex-col items-center justify-center pt-[1.5rem]">
        {success && (
          <div className="mb-6 flex flex-col items-center justify-center rounded bg-[#F2F2F2] p-4">
            <h3 className="text-[0.875rem] font-bold text-black">
              Seu e-mail foi cadastrado com sucesso!
            </h3>
            <p className="text-[0.75rem] font-normal text-[#333333]">
              A partir de agora você receberá as novidades e ofertas exclusivas.
            </p>
            <button
              onClick={handleNewSubscription}
              className="btn mt-4 h-[3rem] w-[20.5rem] bg-black text-white"
            >
              Cadastrar novo E-mail
            </button>
          </div>
        )}

        {!success && (
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="mt-[1rem] flex flex-col items-center"
          >
            <div className="mb-4 w-full text-center">
              <h2 className="text-[1.125rem] font-black text-black">
                Participe de nossas news com promoções e novidades!
              </h2>
            </div>
            <div className="bg-red flex w-full flex-col flex-wrap items-center justify-center gap-[1rem] lg:flex-row lg:items-start">
              <div>
                <input
                  {...register("name")}
                  type="text"
                  className={`input w-[14.25rem] bg-white text-[0.75rem] ${
                    errors.name ? "border-2 border-red-500" : "border-gray-300"
                  }`}
                  placeholder="Digite seu nome"
                />
                {errors.name && (
                  <p className="mt-1 text-[0.75rem] text-red-500">
                    {errors.name.message}
                  </p>
                )}
              </div>

              <div>
                <input
                  {...register("email")}
                  type="email"
                  className={`input w-[14.25rem] bg-white text-[0.75rem] ${
                    errors.email ? "border-2 border-red-500" : "border-gray-300"
                  }`}
                  placeholder="Digite seu Email"
                />
                {errors.email && (
                  <p className="mt-1 text-[0.75rem] text-red-500">
                    {errors.email.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                className="btn h-[3rem] w-[8.75rem] bg-black text-white"
                disabled={loading}
              >
                {loading ? "Enviando..." : "Eu quero!"}
              </button>
            </div>
          </form>
        )}

        {error && <p className="mt-4 text-red-500">{error}</p>}
      </div>
    </div>
  );
};

export default Newsletter;
