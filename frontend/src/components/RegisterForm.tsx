"use client"

import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem, FormLabel } from "./ui/form";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import googleIcon from '@/assets/google.svg';
import facebookIcon from '@/assets/facebook.svg';
import appleIcon from '@/assets/apple.svg';
import Image from "next/image";

const RegisterForm = () => {

    const form = useForm();

    return(
        <div className="flex flex-col justify-center h-screen items-center w-full">
            <p className="text-xl mb-2 font-semibold">Sign Up</p>
            <div className="border p-10 rounded-md">
                <div className="flex justify-evenly w-full">
                    <Button variant="ghost" size="forIcon" >
                        <Image src={googleIcon} alt="google icon" height={30} width={30} />
                    </Button>
                    <Button variant="ghost" size="forIcon">
                        <Image src={facebookIcon} alt="google icon" height={35} width={35} />
                    </Button>
                    <Button variant="ghost" size="forIcon">
                        <Image src={appleIcon} alt="google icon" height={40} width={40} />
                    </Button>
                </div>

                <Separator className="my-5" />

                <Form {...form}>
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
                        name="username"
                        render={({ field }) => (
                            <FormItem className="my-3">
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                    <Input placeholder="email" {...field} className="p-5 pr-16" />
                                </FormControl>
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="username"
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
                        <Button className="mt-5 px-10 w-full text-black" variant="outline" size="lg">Register</Button>
                    </div>
                </Form>
            </div>
        </div>
    )
}

export default RegisterForm;