import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { formSchema } from "../schemas/formSchema";
import type { FormData } from "../schemas/formSchema";

export default function SimpleForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    console.log("送信されたデータ", data);
    await new Promise((resolve) => setTimeout(resolve, 2000));
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="name">名前</label>
          <input id="name" {...register("name")} />
          {errors.name && <p>{errors.name.message}</p>}
        </div>
        <div>
          <label htmlFor="email">メールアドレス</label>
          <input id="email" {...register("email")} />
          {errors.email && <p>{errors.email.message}</p>}
        </div>
        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "送信中..." : "送信"}
        </button>
      </form>
    </div>
  );
}
