import { z } from "zod";

export const formSchema = z.object({
  name: z.string().min(1, "名前は必須です"),
  email: z.email("正しいメールアドレスを入力してください"),
});

export type FormData = z.infer<typeof formSchema>;
