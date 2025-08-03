"use client";

import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { useTranslation } from "react-i18next";
import Image from "next/image";

const Registration: React.FC = () => {
    const { t } = useTranslation();

    const [form, setForm] = useState({
        fullName: "",
        email: "",
        password: "",
        confirmPassword: "",
        acceptTerms: false,
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type, checked } = e.target;
        setForm((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log(form);
        // Add validation or API logic here
    };

    return (
        <div className="pt-20 px-4 min-h-screen bg-gray-50">
            <div className="max-w-3xl mx-auto bg-white pt-10 pb-20 px-6 md:px-12 rounded-2xl shadow">
                <h1 className="text-center text-2xl lg:text-5xl font-bold text-gray-800">
                    {t("Registration")}
                </h1>

                <form onSubmit={handleSubmit} className="mt-12 space-y-8">
                    {/* Full Name */}
                    <div>
                        <Label className=" formTextColor lg:text-xl font-extralight " htmlFor="fullName">{t("Full Name")}</Label>
                        <Input
                            id="fullName"
                            name="fullName"
                            type="text"
                            value={form.fullName}
                            onChange={handleChange}
                            className="mt-3 "
                        />
                    </div>

                    {/* Email */}
                    <div>
                        <Label className=" formTextColor lg:text-xl font-extralight " htmlFor="email">{t("Email")}</Label>
                        <Input
                            id="email"
                            name="email"
                            type="email"
                            value={form.email}
                            onChange={handleChange}
                            className="mt-3 "
                        />
                    </div>

                    {/* Password */}
                    <div>
                        <Label className=" formTextColor lg:text-xl font-extralight " htmlFor="password">{t("Password")}</Label>
                        <Input
                            id="password"
                            name="password"
                            type="password"
                            value={form.password}
                            onChange={handleChange}
                            className="mt-3 "
                        />
                    </div>

                    {/* Confirm Password */}
                    <div>
                        <Label className=" formTextColor lg:text-xl font-extralight " htmlFor="confirmPassword">{t("Confirm Password")}</Label>
                        <Input
                            id="confirmPassword"
                            name="confirmPassword"
                            type="password"
                            value={form.confirmPassword}
                            onChange={handleChange}
                            className="mt-3 "

                        />
                    </div>

                    {/* Terms and Conditions */}
                    <div className="flex items-center space-x-2">
                        <Checkbox
                            id="acceptTerms"
                            name="acceptTerms"
                            checked={form.acceptTerms}
                            onCheckedChange={(checked: boolean) =>
                                setForm((prev) => ({ ...prev, acceptTerms: checked }))
                            }
                        />
                        <Label className=" formTextColor text-xl font-extralight " htmlFor="acceptTerms" >
                            {t("I accept the")}{" "}
                            <span className="underline cursor-pointer">
                                {t("Terms and Conditions")}
                            </span>
                        </Label>
                    </div>

                    {/* Submit Button */}
                    <Button type="submit" className="w-full py-6 cursor-pointer  lg:text-2xl font-semibold text-xl ">
                        {t("Register")}
                    </Button>
                </form>
                {/* social registration */}
                <div className=" my-6 " >
                    <div className=" flex flex-row items-center gap-8 " >
                        <div className=" flex-1 border border-[#2C3E504D]   " /> <span className=" text-xl " >Or</span>  <div className=" flex-1 border border-[#2C3E504D]   " />
                    </div>
                </div>
                <div>
                    <Button
                        className=" bg-white border border-[#2C3E50] w-full formTextColor px-3 py-6 font-semibold formTextColor text-xl lg:text-2xl flex flex-row items-center gap-x-2.5    " >
                        <Image src={"/image/registration/google.png"} width={200} height={200} alt="google" className=" w-8 h-8 " />Continue with Google
                    </Button>
                    <Button
                        className=" bg-white border border-[#2C3E50] mt-8 w-full formTextColor px-3 py-6 font-semibold formTextColor text-xl lg:text-2xl flex flex-row items-center gap-x-2.5    " >
                        <Image src={"/image/registration/facebook.png"} width={200} height={200} alt="google" className=" w-8 h-8 " />Continue with Facebook
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Registration;
