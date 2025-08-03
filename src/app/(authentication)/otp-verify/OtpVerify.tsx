'use client';

import { useState, useRef } from 'react';
import { useRouter } from 'next/navigation'; // 'next/router' if using pages dir
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const OTP_LENGTH = 6;

const OtpVerify = () => {
    const [otp, setOtp] = useState<string[]>(Array(OTP_LENGTH).fill(''));
    const inputsRef = useRef<(HTMLInputElement | null)[]>([]);


    const handleChange = (value: string, index: number) => {
        if (!/^\d*$/.test(value)) return;
        const newOtp = [...otp];
        newOtp[index] = value.slice(-1);
        setOtp(newOtp);

        if (value && index < OTP_LENGTH - 1) {
            inputsRef.current[index + 1]?.focus();
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
        if (e.key === 'Backspace' && !otp[index] && index > 0) {
            inputsRef.current[index - 1]?.focus();
        }
    };

    const handleVerify = () => {
        const code = otp.join('');
        if (code.length === OTP_LENGTH) {
            console.log('Verified OTP:', code);
            router.push('/new-password');
        } else {
            console.error('Incomplete OTP');
        }
    };

    const handleResend = () => {
        console.log('OTP Resent');
    };

    const router = useRouter()

    return (
        <div className=' px-4 ' >
            <div className="flex items-center justify-center  px-4 lg:pt-20 pt-10  ">
            <div className="max-w-3xl mx-auto bg-white p-8 md:p-12 rounded-2xl ">
                <h2 className="text-center text-3xl md:text-5xl font-bold formTextColor ">Verification Code</h2>

                <p className="mt-6 md:mt-10 text-center formTextColor text-base md:text-lg mb-8">
                    We sent a reset link to <span className="font-medium">contact@dscode.com</span><br />
                    Enter the 6-digit code from your email.
                </p>

                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        handleVerify();
                        router.push("/new-password")

                    }}
                >
                    <div className="flex justify-center gap-3 mb-10">
                        {otp.map((digit, index) => (
                            <Input
                                key={index}
                                id={`otp-${index}`}
                                type="text"
                                inputMode="numeric"
                                maxLength={1}
                                value={digit}
                                onChange={(e) => handleChange(e.target.value, index)}
                                onKeyDown={(e) => handleKeyDown(e, index)}
                                ref={(el) => (inputsRef.current[index] = el)}
                                autoFocus={index === 0}
                                className="h-12 w-12 md:h-14 md:w-14 text-center text-xl formTextColor font-semibold border-gray-300"
                            />
                        ))}
                    </div>

                    <Button type="submit" className="w-full   text-lg md:text-xl font-semibold">
                        Verify Code
                    </Button>
                </form>

                <div className="mt-6 text-center formTextColor">
                    <p className=' textColor lg:text-3xl text-[15px] ' >
                        Didn’t receive code?
                        <button type="button" className="font-bold " onClick={handleResend}>
                            Resend OTP
                        </button>
                    </p>
                </div>
            </div>
        </div>
        </div>
    );
};

export default OtpVerify;
