"use client";

import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

import { useTranslation } from "react-i18next";


type EmailVerify = {
    email: string
}

const EmailVerify: React.FC = () => {
    const { t } = useTranslation();

    const [form, setForm] = useState<EmailVerify>({
        email: "",

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
        <div className="pt-20 px-4  bg-gray-50">
            <div className="max-w-3xl mx-auto bg-white pt-10 pb-20 px-6 md:px-12 rounded-2xl shadow">
                <h1 className="text-center text-2xl lg:text-5xl font-bold text-gray-800">
                    {t("Forget Password")}
                </h1>

                <form onSubmit={handleSubmit} className="mt-12 space-y-8">


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


                    {/* Submit Button */}
                    <Button type="submit" className="w-full py-6 cursor-pointer  lg:text-2xl font-semibold text-xl ">
                        {t("Enter")}
                    </Button>
                </form>

            </div>
        </div>
    );
};

export default EmailVerify;
