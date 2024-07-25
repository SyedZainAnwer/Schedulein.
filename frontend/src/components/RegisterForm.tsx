"use client"

import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem, FormLabel } from "./ui/form";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import SocialIcons from "./SocialIcons";
import { useState, Suspense, use } from "react";
import request from '@/utils/api'
import { endPoints } from "@/utils/endPoints";
import { z } from "zod";
import { RegisterationValidation } from "@/validations/UserValidation";
import { zodResolver } from "@hookform/resolvers/zod";
import { redirect, useRouter } from "next/navigation";

const RegisterForm = () => {

    const router = useRouter();

    const form = useForm<z.infer<typeof RegisterationValidation>>({
        resolver: zodResolver(RegisterationValidation),
        defaultValues: {
            username: "",
            email: "",
            password: ""
        }
    });

    const onSubmit = async (values: z.infer<typeof RegisterationValidation>) => {
        try {
            const response = await request.post(`${endPoints.register}`, values);
            console.log("Registration successful", response.data);
            router.push("/login");
        } catch (error: any) {
            console.error("Registration failed", error.response?.data || error.message);
        }
    }

    return (
        <div className="flex flex-col justify-center h-screen items-center w-full">
            <p className="text-xl mb-2 font-semibold">Sign Up</p>
            <div className="border p-10 rounded-md">
                <SocialIcons />

                <Separator className="my-5" />

                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)}>
                        <FormField
                            control={form.control}
                            name="username"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Username</FormLabel>
                                    <FormControl>
                                        <Input placeholder="username" {...field} className="p-5 pr-16" />
                                    </FormControl>
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem className="my-3">
                                    <FormLabel>Email</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="email" {...field} className="p-5 pr-16" />
                                    </FormControl>
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="password"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Password</FormLabel>
                                    <FormControl>
                                        <Input placeholder="password" {...field} className="p-5 pr-10" type="password" />
                                    </FormControl>
                                </FormItem>
                            )}
                        />

                        <div className="w-full">
                            <Button
                                className="mt-5 px-10 w-full text-black"
                                variant="outline"
                                size="lg"
                                type="submit"
                                asChild={false}
                            >
                                Register
                            </Button>
                        </div>
                    </form>
                </Form>
            </div>
        </div>
    )
}

export default RegisterForm;