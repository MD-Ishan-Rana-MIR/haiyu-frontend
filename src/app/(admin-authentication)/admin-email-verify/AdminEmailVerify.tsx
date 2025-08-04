'use client';

import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

type FormData = {
    email: string;
};

const AdminEmailVerify : React.FC = () => {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<FormData>();

    const onSubmit = (data: FormData) => {
        console.log("Form submitted:", data);
        // Login logic here (e.g., API call)
    };

    return (
        <div className="lg:pt-20 pt-8 px-4 pb-8 lg:pb-20 ">
            <div className="max-w-3xl mx-auto bg-white pt-6 lg:pt-10 pb-8 lg:pb-20 px-6 md:px-12 rounded-2xl">
                <h1 className="text-center text-2xl lg:text-5xl font-bold formTextColor">
                    Reset <span className="text-[#C51517]">Password</span>
                </h1>
                <div className="w-60 ml-[44.5%] mt-2 flex justify-end h-2 bg-gradient-to-r from-[#C5151780] to-[#FFFFFF]"></div>

                <p className="text-center mt-3 lg:text-3xl text-xl formTextColor">
                    We'll send a verification code to your email
                </p>

                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="lg:mt-12 mt-5 lg:space-y-5 space-y-3 "
                    noValidate
                >
                    <div>
                        <label
                            htmlFor="email"
                            className="block formTextColor lg:text-3xl text-xl font-normal"
                        >
                            E-mail
                        </label>
                        <Input
                            id="email"
                            type="email"
                            className="mt-5"
                            {...register("email", {
                                required: "Email is required",
                                pattern: {
                                    value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
                                    message: "Enter a valid email",
                                },
                            })}
                        />
                        {errors.email && (
                            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                        )}
                    </div>

                    

                    <Button type="submit" className="w-full lg:mt-12 mt-5 text-[#F5F7FA] font-semibold lg:text-3xl text-xl " disabled={isSubmitting}>
                        {isSubmitting ? "Logging in..." : "Send Verification Code"}
                    </Button>

                </form>
            </div>
        </div>
    );
};

export default AdminEmailVerify;
