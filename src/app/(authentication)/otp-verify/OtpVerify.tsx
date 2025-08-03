'use client';

import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const OTP_LENGTH = 6;

const OtpVerify = () => {
    const [otp, setOtp] = useState<string[]>(Array(OTP_LENGTH).fill(''));
    // const { toast } = useToast();

    const handleChange = (value: string, index: number) => {
        if (!/^\d*$/.test(value)) return;

        const newOtp = [...otp];
        newOtp[index] = value.slice(-1);
        setOtp(newOtp);

        const nextInput = document.getElementById(`otp-${index + 1}`);
        if (value && nextInput) nextInput.focus();
    };

    const handleVerify = () => {
        const code = otp.join('');
        if (code.length === OTP_LENGTH) {
            // toast({ title: 'OTP Verified', description: `Entered OTP: ${code}` });
        } else {
            // toast({ title: 'Error', description: 'Please enter full OTP', variant: 'destructive' });
        }
    };

    const handleResend = () => {
        // toast({ title: 'OTP Sent Again', description: 'A new OTP was sent to your email/phone.' });
    };

    return (
        <div className="flex  items-center justify-center  lg:pt-20 pt-14 px-4">
            <div className="max-w-3xl mx-auto bg-white pt-10 pb-20 px-6 md:px-12 rounded-2xl ">
                <h2 className="text-center text-2xl lg:text-5xl font-bold textColor  ">Verification Code</h2>
                <p className=" lg:mt-20 mt-10 text-center formTextColor lg:text-xl text-[16px] lg:mb-[76px] mb-8 ">
                    We sent a reset link to contact@dscode.com <br />
                    enter 6 digit code that is mentioned in the email
                </p>

                <div className=" mb-8 lg:mb-16 flex justify-center  gap-x-4">
                    {otp.map((digit, index) => (
                        <Input
                            key={index}
                            id={`otp-${index}`}
                            type="text"
                            inputMode="numeric"
                            maxLength={1}
                            className="h-12 w-12 text-center text-lg font-medium"
                            value={digit}
                            onChange={(e) => handleChange(e.target.value, index)}
                        />
                    ))}
                </div>

                <Button className="w-full px-5 py-6 text-[#F5F7FA] lg:text-2xl text-xl font-semibold cursor-pointer    " onClick={handleVerify}>Verify Code</Button>

                <div className=" mt-4 lg:mt-7 ">
                    <p className=' text-center formTextColor text-xl lg:text-3xl   ' >
                        Didn’t receive code?{' '}
                        <button className=" font-bold " onClick={handleResend}>
                            Resend OTP
                        </button>
                    </p>
                </div>
            </div>
        </div>
    );
}


export default OtpVerify;