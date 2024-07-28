"use client"

import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem, FormLabel } from "./ui/form";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import { z } from "zod";
import { LoginValidation } from "@/validations/UserValidation";
import { zodResolver } from "@hookform/resolvers/zod";
import SocialIcons from "./SocialIcons";
import request from '@/utils/api';
import { endPoints } from "@/utils/endPoints";
import { useRouter } from "next/navigation";
import { ILogin } from "@/types/AuthResponse";
import Cookies from 'js-cookie'

const LoginForm = () => {

    const router = useRouter();

    const form = useForm<z.infer<typeof LoginValidation>>({
        resolver: zodResolver(LoginValidation),
        defaultValues: {
            email: "",
            password: ""
        }
    });

    const onSubmit = async(values: z.infer<typeof LoginValidation>) => {
        try {
            const { data }: { data: ILogin } = await request.post(`${endPoints.login}`, values);
            console.log(String(data.user.id))

            if (data.token) {
                Cookies.set('authToken', data.token),
                Cookies.set('authUserId', String(data.user.id))
            }
            router.push("/home");
        } catch(error: any) {
            console.error("Failed during logging in!", error);
        }
    }

    return (
        <div className="flex flex-col justify-center h-screen items-center w-full">
            <p className="text-xl mb-2 font-semibold">Sign In</p>
            <div className="border p-10 rounded-md">
                <SocialIcons />

                <Separator className="my-5" />

                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)}>
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Email</FormLabel>
                                    <FormControl>
                                        <Input placeholder="email" {...field} className="p-5 pr-16" />
                                    </FormControl>
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="password"
                            render={({ field }) => (
                                <FormItem className="mt-3">
                                    <FormLabel>Password</FormLabel>
                                    <FormControl>
                                        <Input placeholder="password" {...field} className="p-5 pr-10" type="password" />
                                    </FormControl>
                                </FormItem>
                            )}
                        />

                        <p className="text-xs flex justify-end mt-1 text-blue-500 cursor-pointer">Forgot Password</p>

                        <div className="w-full">
                            <Button 
                                className="mt-5 px-10 w-full text-black" 
                                variant="outline" 
                                size="lg" 
                                type="submit"
                            >
                                Login
                            </Button>
                        </div>
                    </form>
                </Form>
                <p className="text-xs mt-5">Dont have an account? {" "}
                    <span className="text-blue-500 cursor-pointer">Register</span>
                </p>
            </div>
        </div>
    );
};


export default LoginForm;