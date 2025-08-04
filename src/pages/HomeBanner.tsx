import React from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { Star } from 'lucide-react';

const HomeBanner = () => {
    return (
        <div className="pt-[200px] relative min-h-[calc(100vh-70px)]">
            {/* Background image */}
            <div className="absolute inset-0 bg-[url('/image/home-page/banner/banner.jpg')] bg-cover bg-center bg-no-repeat z-0" />

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-[#292A2D]/60 z-10" />

            <div>
                {/* Banner content */}
                <div className="relative z-20 flex flex-col items-center justify-center px-4 text-center">
                    <h1 className="text-2xl lg:text-6xl font-extrabold text-white">
                        Your Health Is Our Priority
                    </h1>
                    <p className="text-lg lg:text-3xl font-extrabold text-white mt-4 max-w-3xl">
                        We provide the highest quality healthcare services with compassion and excellence.
                    </p>
                </div>

                {/* Form + buttons */}
                <div className="relative z-20 bg-white/5 backdrop-blur-sm mt-9 max-w-[1578px] mx-auto rounded-md px-4 md:px-10 lg:px-14 py-8">
                    {/* Form Fields */}
                    <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-5 flex-wrap">
                        {/* Medical Specialty */}
                        <div className="w-full lg:w-[30%]">
                            <Label htmlFor="specialty" className="text-white lg:text-xl mb-2 block">
                                Medical Specialty
                            </Label>
                            <Select>
                                <SelectTrigger className="w-full text-white border-white bg-transparent">
                                    <SelectValue placeholder="Select a specialty" />
                                </SelectTrigger>
                                <SelectContent className="text-black bg-white">
                                    <SelectItem value="Hair Transplant">Hair Transplant</SelectItem>
                                    <SelectItem value="Dermatology">Dermatology</SelectItem>
                                    <SelectItem value="Dentistry">Dentistry</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>

                        {/* Clinic/Doctor Name */}
                        <div className="w-full lg:w-[30%]">
                            <Label htmlFor="clinic" className="text-white lg:text-xl mb-2 block">
                                Clinic or Doctor Name (optional)
                            </Label>
                            <Input
                                id="clinic"
                                placeholder="Enter clinic or doctor name"
                                className="bg-transparent border-white text-white placeholder:text-white w-full"
                            />
                        </div>

                        {/* Search Button */}
                        <div className="w-full lg:w-[30%]">
                            <Button className="w-full text-xl bg-[#01304E] font-medium mt-2 lg:mt-6">
                                Search Clinic
                            </Button>
                        </div>
                    </div>

                    {/* Divider */}
                    <div className="my-8">
                        <hr className="border-white/30" />
                    </div>

                    {/* Filter Buttons */}
                    <div className="flex flex-wrap gap-4 items-center justify-start">
                        {/* Top Rated */}
                        <Button className="flex items-center gap-2 bg-[#01304E] text-white">
                            <Star className="w-5 h-5" />
                            <span className="font-semibold text-xl">Top Rated</span>
                        </Button>

                        {/* Best Value */}
                        <button className="flex items-center gap-2 border border-[#01304E] py-[10px] px-[17px] rounded-md text-white">
                            <Image
                                src="/image/home-page/banner/doller.png"
                                width={3000}
                                height={3000}
                                className="object-cover w-6 h-6"
                                alt="dollar-icon"
                            />
                            <span className="font-semibold text-xl">Best Value</span>
                        </button>

                        {/* Most Review */}
                        <button className="flex items-center gap-2 border border-[#01304E] py-[10px] px-[17px] rounded-md text-white">
                            <Image
                                src="/image/home-page/banner/comment.png"
                                width={3000}
                                height={3000}
                                className="object-cover w-6 h-6"
                                alt="comment-icon"
                            />
                            <span className="font-semibold text-xl">Most Review</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeBanner;
