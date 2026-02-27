import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

function Projects() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="pt-24 pb-24"
        >
            <Helmet>
                <title>Dự Án Đã Thực Hiện | ZINESS PRODUCTION</title>
                <meta name="description" content="Xem các hình ảnh dự án và video demo Video Booth 360 mà Ziness Production đã thực hiện cho các khách hàng như Vietcombank, Tiktok, Shopee." />
            </Helmet>

            {/* Video Gallery (Grid) */}
            <section className="py-20 bg-black relative" id="gallery">
                <div className="container mx-auto px-6 mb-12 flex items-end justify-between">
                    <div>
                        <h3 className="text-purple-500 text-sm font-medium tracking-widest uppercase mb-2">Portfolio</h3>
                        <h2 className="text-3xl md:text-5xl font-medium text-white tracking-tight">Video Demo 360</h2>
                    </div>
                    <a href="#" className="hidden md:flex items-center gap-1 text-sm text-zinc-400 hover:text-white transition-colors">
                        Xem tất cả <iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon>
                    </a>
                </div>

                {/* Marquee/Slider Wrapper */}
                <div className="flex overflow-x-auto gap-4 px-6 no-scrollbar snap-x">
                    {/* Video Card 1 */}
                    <div className="min-w-[80vw] md:min-w-[400px] aspect-[9/16] bg-zinc-800 rounded-2xl relative overflow-hidden group cursor-pointer snap-center border border-white/10">
                        <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg" alt="Party" className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-500 group-hover:scale-105" />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center group-hover:scale-110 transition-transform">
                                <iconify-icon icon="solar:play-linear" class="text-white text-3xl ml-1"></iconify-icon>
                            </div>
                        </div>
                        <div className="absolute bottom-0 left-0 p-6 w-full bg-gradient-to-t from-black to-transparent">
                            <div className="text-white font-medium text-lg">Year End Party 2023</div>
                            <div className="text-zinc-400 text-sm">Techcombank Hanoi</div>
                        </div>
                    </div>

                    {/* Video Card 2 */}
                    <div className="min-w-[80vw] md:min-w-[400px] aspect-[9/16] bg-zinc-800 rounded-2xl relative overflow-hidden group cursor-pointer snap-center border border-white/10">
                        <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg" alt="Wedding" className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-500 group-hover:scale-105" />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center group-hover:scale-110 transition-transform">
                                <iconify-icon icon="solar:play-linear" class="text-white text-3xl ml-1"></iconify-icon>
                            </div>
                        </div>
                        <div className="absolute bottom-0 left-0 p-6 w-full bg-gradient-to-t from-black to-transparent">
                            <div className="text-white font-medium text-lg">Luxury Wedding</div>
                            <div className="text-zinc-400 text-sm">White Palace HCM</div>
                        </div>
                    </div>

                    {/* Video Card 3 */}
                    <div className="min-w-[80vw] md:min-w-[400px] aspect-[9/16] bg-zinc-800 rounded-2xl relative overflow-hidden group cursor-pointer snap-center border border-white/10">
                        <img src="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=1000&auto=format&fit=crop" alt="Bar" className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-500 group-hover:scale-105" />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center group-hover:scale-110 transition-transform">
                                <iconify-icon icon="solar:play-linear" class="text-white text-3xl ml-1"></iconify-icon>
                            </div>
                        </div>
                        <div className="absolute bottom-0 left-0 p-6 w-full bg-gradient-to-t from-black to-transparent">
                            <div className="text-white font-medium text-lg">Grand Opening Bar</div>
                            <div className="text-zinc-400 text-sm">1900 Le Theatre</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Project Logos / Stats */}
            <section className="py-20 border-y border-white/5 bg-black" id="projects">
                <div className="container mx-auto px-6">
                    <p className="text-center text-zinc-500 text-sm mb-8 uppercase tracking-widest">Được tin tưởng bởi</p>
                    <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                        {/* Logo Placeholders using Text for Demo */}
                        <span className="text-xl font-bold tracking-tight text-white">VIETCOMBANK</span>
                        <span className="text-xl font-bold tracking-tight text-white">SAMSUNG</span>
                        <span className="text-xl font-bold tracking-tight text-white">TIKTOK</span>
                        <span className="text-xl font-bold tracking-tight text-white">HEINEKEN</span>
                        <span className="text-xl font-bold tracking-tight text-white">SHOPEE</span>
                    </div>
                </div>
            </section>

        </motion.div>
    );
}

export default Projects;
