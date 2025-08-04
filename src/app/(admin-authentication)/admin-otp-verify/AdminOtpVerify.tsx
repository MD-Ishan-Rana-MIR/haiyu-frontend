'use client';

import { useRef } from 'react';
import { useRouter } from 'next/navigation';
import { useForm, Controller } from 'react-hook-form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const OTP_LENGTH = 6;

type FormValues = {
  otp: string[];
};

const AdminOtpVerify: React.FC = () => {
  const router = useRouter();

  const {
    handleSubmit,
    control,
    setValue,
    getValues,
    trigger,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      otp: Array(OTP_LENGTH).fill(''),
    },
  });

  const inputsRef = useRef<(HTMLInputElement | null)[]>([]);

  const onSubmit = (data: FormValues) => {
    const otpCode = data.otp.join('');
    if (otpCode.length === OTP_LENGTH) {
      console.log('Verified OTP:', otpCode);
      router.push('/new-password');
    }
  };

  const handleChange = (value: string, index: number) => {
    if (!/^\d*$/.test(value)) return;

    const newValue = value.slice(-1); // only keep last digit
    const currentOtp = getValues('otp');
    currentOtp[index] = newValue;
    setValue('otp', [...currentOtp]);
    trigger('otp');

    if (newValue && index < OTP_LENGTH - 1) {
      inputsRef.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
    if (e.key === 'Backspace' && !getValues('otp')[index] && index > 0) {
      inputsRef.current[index - 1]?.focus();
    }
  };

  return (
    <div className="px-4">
      <div className="flex items-center justify-center px-4 lg:pt-20 pt-10 pb-10">
        <div className="max-w-3xl mx-auto bg-white p-8 md:p-12 rounded-2xl">
          <h1 className="text-center text-2xl lg:text-5xl font-bold formTextColor">
            Verify <span className="text-[#C51517]">Identity</span>
          </h1>
          <div className="w-60 ml-[44.5%] mt-2 flex justify-end h-2 bg-gradient-to-r from-[#C5151780] to-[#FFFFFF]"></div>

          <p className="text-center mt-3 lg:text-3xl text-xl formTextColor">
            Enter the 6-digit code sent to your email
          </p>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex justify-center gap-3 mb-6 mt-10">
              {Array(OTP_LENGTH)
                .fill(0)
                .map((_, index) => (
                  <Controller
                    key={index}
                    name={`otp.${index}` as const}
                    control={control}
                    rules={{ required: true }}
                    render={({ field }) => (
                      <Input
                        {...field}
                        type="text"
                        inputMode="numeric"
                        maxLength={1}
                        ref={(el) => {
                          inputsRef.current[index] = el;
                        }}
                        value={field.value || ''}
                        onChange={(e) => handleChange(e.target.value, index)}
                        onKeyDown={(e) => handleKeyDown(e, index)}
                        autoFocus={index === 0}
                        className="h-12 w-12 md:h-14 md:w-14 text-center text-xl formTextColor font-semibold border-gray-300"
                      />
                    )}
                  />
                ))}
            </div>

            {errors.otp && (
              <p className="text-red-500 text-sm text-center mb-4">
                Please fill in all 6 digits
              </p>
            )}

            <Button type="submit" className="w-full text-lg md:text-xl lg:mt-20 mt-8 font-semibold">
              Verify Code
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminOtpVerify;
