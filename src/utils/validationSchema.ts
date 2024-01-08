import { z } from "zod";

export const validationSchema = z.object({
  username: z
    .string()
    .min(1, "名前は必須です。")
    .min(4, "名前は4文字以上です。"),
  email: z
    .string()
    .min(1, "メールアドレスは必須です。")
    .email("メールアドレスの形式が正しくありません。"),
  password: z
    .string()
    .min(1, "パスワードは必須です。")
    .min(6, "パスワードは6文字以上です。"),
});
