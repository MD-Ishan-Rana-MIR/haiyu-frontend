"use client";

import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useTranslation } from "react-i18next";
import { useRouter } from "next/navigation";

const NewPassword: React.FC = () => {
    const { t } = useTranslation();

    const [form, setForm] = useState({
        
        password: "",
        retypePassword: "",
        
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type, checked } = e.target;
        setForm((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }));
    };

    const router = useRouter();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log(form);
        router.push("/")
        // Add validation or API logic here
    };

    return (
        <div className="lg:pt-20 pt-10 px-4  ">
            <div className="max-w-3xl mx-auto bg-white pt-5 lg:pt-10 pb-10 lg:pb-20 px-6 md:px-12 rounded-2xl ">
                <h1 className="text-center text-2xl lg:text-5xl font-bold text-gray-800">
                    {t("Create New Password")}
                </h1>

                <form onSubmit={handleSubmit} className="lg:mt-12 mt-6 space-y-4 lg:space-y-8">
                    

                    

                    {/* Enter a new password */}
                    <div>
                        <Label className=" formTextColor lg:text-xl font-extralight " htmlFor="password">{t("Enter a new password")}</Label>
                        <Input
                            id="password"
                            name="password"
                            type="password"
                            value={form.password}
                            onChange={handleChange}
                            className="mt-3 "
                        />
                    </div>

                    {/* Re-type new password */}
                    <div>
                        <Label className=" formTextColor lg:text-xl font-extralight " htmlFor="retypePassword">{t("Re-type new password")}</Label>
                        <Input
                            id="retypePassword"
                            name="retypePassword"
                            type="password"
                            value={form.retypePassword}
                            onChange={handleChange}
                            className="mt-3 "

                        />
                    </div>

                    

                    {/* Submit Button */}
                    <Button type="submit" className="w-full py-6 cursor-pointer  lg:text-2xl font-semibold text-[15px] ">
                        {t("Log In")}
                    </Button>
                </form>
            
            </div>
        </div>
    );
};

export default NewPassword;
