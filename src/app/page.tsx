"use client";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { validationSchema } from "@/utils/validationSchema";
import { zodResolver } from "@hookform/resolvers/zod";

interface LoginForm {
  username: string;
  email: string;
  password: string;
}

export default function Home() {
  const form = useForm<LoginForm>({
    mode: "onChange",
    resolver: zodResolver(validationSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
      // 他のフィールドのデフォルト値もここで設定できます
    },
  });
  const onSubmit = (data: LoginForm) => {
    console.log(data);
  };
  return (
    <>
      <header className="bg-white shadow">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">
            ログイン フォーム
          </h1>
        </div>
      </header>
      <main>
        <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-lg py-6 sm:px-6 lg:px-8">
            <Card>
              <CardHeader className="text-center">
                <CardTitle>ログインフォーム</CardTitle>
                <CardDescription>ログインできます</CardDescription>
              </CardHeader>
              <CardContent>
                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-8"
                  >
                    <FormField
                      control={form.control}
                      name="username"
                      // rules={{
                      //   required: "名前は必須です。",
                      //   minLength: {
                      //     value: 4,
                      //     message: "4文字以上で入力してください",
                      //   },
                      // }}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel htmlFor="名前">名前</FormLabel>
                          <FormControl>
                            <Input
                              id="name"
                              placeholder="山田 太郎"
                              {...field}
                            />
                          </FormControl>
                          <FormDescription />
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="email"
                      // rules={{
                      //   required: "Eメールは必須です。",
                      //   minLength: {
                      //     value: 6,
                      //     message: "6文字以上で入力してください。",
                      //   },
                      // }}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel htmlFor="メールアドレス">
                            メールアドレス
                          </FormLabel>
                          <FormControl>
                            <Input
                              id="email"
                              type="email"
                              placeholder="hoeg@example.com"
                              {...field}
                            />
                          </FormControl>
                          <FormDescription />
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="password"
                      // rules={{ required: "パスワードは必須です。" }}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel htmlFor="パスワード">パスワード</FormLabel>
                          <FormControl>
                            <Input id="password" type="password" {...field} />
                          </FormControl>
                          <FormDescription />
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button className="w-full mt-10 mb-6" type="submit">
                      ログイン
                    </Button>
                  </form>
                </Form>
              </CardContent>
              {/* <CardFooter>
                <p></p>
              </CardFooter> */}
            </Card>
          </div>
        </div>
      </main>
    </>
  );
}
