"use client";

import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import Link from "next/link";

// Type definition for login form
type LoginFormType = {
    email: string;
    password: string;
};

const Login: React.FC = () => {
    const { t } = useTranslation();

    const [form, setForm] = useState<LoginFormType>({
        email: "",
        password: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setForm((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log(form);
        // Add validation or API logic here
    };

    return (
        <div className="lg:pt-20 pt-8 px-4  ">
            <div className="max-w-3xl mx-auto bg-white pt-6 lg:pt-10 pb-8 lg:pb-20 px-6 md:px-12 rounded-2xl ">
                <h1 className="text-center text-2xl lg:text-5xl font-bold formTextColor">
                    {t("Login")}
                </h1>

                <form onSubmit={handleSubmit} className="lg:mt-12 mt-6 space-y-4 lg:space-y-8">
                    {/* Email */}
                    <div>
                        <Label
                            className="formTextColor lg:text-xl font-extralight"
                            htmlFor="email"
                        >
                            {t("Email")}
                        </Label>
                        <Input
                            id="email"
                            name="email"
                            type="email"
                            value={form.email}
                            onChange={handleChange}
                            className="mt-3"
                        />
                    </div>

                    {/* Password */}
                    <div>
                        <Label
                            className="formTextColor lg:text-xl font-extralight"
                            htmlFor="password"
                        >
                            {t("Password")}
                        </Label>
                        <Input
                            id="password"
                            name="password"
                            type="password"
                            value={form.password}
                            onChange={handleChange}
                            className="mt-3"
                        />
                    </div>

                    <div>
                        <Link
                            href="/email-verify"
                            className="flex justify-end font-semibold text-[15px] lg:text-2xl formTextColor"
                        >
                            {
                                t("Forgot your password?")
                            }
                        </Link>
                    </div>

                    {/* Submit Button */}
                    <Button
                        type="submit"
                        className="w-full py-6 cursor-pointer text-[15px] lg:text-2xl font-semibold"
                    >
                        {t("Log In")}
                    </Button>
                </form>

                {/* Divider */}
                <div className="my-6">
                    <div className="flex flex-row items-center gap-8">
                        <div className="flex-1 border border-[#2C3E504D]" />
                        <span className="text-xl">{t("or")}</span>
                        <div className="flex-1 border border-[#2C3E504D]" />
                    </div>
                </div>

                {/* Social buttons */}
                <div>
                    <Button className="bg-white border border-[#2C3E50] w-full text-[15px] lg:text-2xl py-6 formTextColor font-semibold flex items-center gap-x-2.5">
                        <Image
                            src="/image/registration/google.png"
                            width={200}
                            height={200}
                            alt="google"
                            className="w-8 h-8"
                        />
                        {t("Continue with Google")}
                    </Button>

                    <Button className="bg-white border border-[#2C3E50] mt-8 w-full text-[15px] lg:text-2xl formTextColor py-6 font-semibold flex items-center gap-x-2.5">
                        <Image
                            src="/image/registration/facebook.png"
                            width={200}
                            height={200}
                            alt="facebook"
                            className="w-8 h-8"
                        />
                        {t("Continue with Facebook")}
                    </Button>
                </div>
                <div>
                    <p className=" formTextColor text-[15px] lg:text-2xl font-extralight mt-7 lg:mt-14 text-center  " >Don’t have an account? <Link className=" font-bold " href={"/registration"}>Register</Link> </p>
                </div>
            </div>
        </div>
    );
};

export default Login;
