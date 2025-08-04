'use client';

import { useForm } from 'react-hook-form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { useRouter } from 'next/navigation';

type FormValues = {
    password: string;
    retypePassword: string;
};

const AdminNewPasswordSet: React.FC = () => {
    const router = useRouter();

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<FormValues>();

    const onSubmit = (data: FormValues) => {
        console.log('Form Data:', data);
        // Submit logic or API call
        router.push('/dashboard/overview');
    };

    const password = watch('password');

    return (
        <div className="lg:pt-20 pt-10 px-4">
            <div className="max-w-3xl mx-auto bg-white pt-5 lg:pt-10 pb-10 lg:pb-20 px-6 md:px-12 rounded-2xl">
                <h1 className="text-center text-2xl lg:text-5xl font-bold formTextColor">
                    New <span className="text-[#C51517]">Password</span>
                </h1>
                <div className="w-60 ml-[42%] mt-2 flex justify-end h-2 bg-gradient-to-r from-[#C5151780] to-[#FFFFFF]"></div>

                <p className="text-center mt-3 lg:text-3xl text-xl formTextColor">
                    Create a strong and secure password
                </p>

                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="lg:mt-12 mt-6 space-y-4 lg:space-y-8"
                >
                    {/* New Password */}
                    <div>
                        <Label htmlFor="password" className="formTextColor lg:text-xl font-normal">
                            Enter a new password
                        </Label>
                        <Input
                            id="password"
                            type="password"
                            {...register('password', { required: 'Password is required' })}
                            className="mt-3"
                        />
                        {errors.password && (
                            <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
                        )}
                    </div>

                    {/* Confirm Password */}
                    <div>
                        <Label htmlFor="retypePassword" className="formTextColor lg:text-xl font-normal">
                            Confirm Password
                        </Label>
                        <Input
                            id="retypePassword"
                            type="password"
                            {...register('retypePassword', {
                                required: 'Please confirm your password',
                                validate: (value) =>
                                    value === password || 'Passwords do not match',
                            })}
                            className="mt-3"
                        />
                        {errors.retypePassword && (
                            <p className="text-red-500 text-sm mt-1">{errors.retypePassword.message}</p>
                        )}
                    </div>

                    {/* Submit Button */}
                    <Button
                        type="submit"
                        className="w-full lg:mt-12 mt-5 py-6 cursor-pointer lg:text-2xl font-semibold text-[15px]"
                    >
                        Reset Password
                    </Button>
                </form>
            </div>
        </div>
    );
};

export default AdminNewPasswordSet;
