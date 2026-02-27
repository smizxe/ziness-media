import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

function Home() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="pt-20"
        >
            <Helmet>
                <title>Trang Chủ | ZINESS PRODUCTION - Video Booth 360</title>
                <meta name="description" content="ZINESS PRODUCTION là đơn vị tiên phong cung cấp giải pháp Video Booth 360 độ và bán bục xoay 360 độ thông minh. Xem chi tiết báo giá và thiết bị." />
            </Helmet>

            {/* Hero Section */}
            <header className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-white/5 rounded-full animate-spin-slow pointer-events-none"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-white/5 rounded-full animate-spin-slow pointer-events-none" style={{ animationDirection: "reverse" }}></div>

                <div className="container mx-auto px-6 relative z-10 text-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300 text-xs mb-8 uppercase tracking-widest font-medium">
                        <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse"></span>
                        Ziness Production
                    </div>

                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tighter text-white mb-6 leading-tight">
                        VIDEO BOOTH <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-400 to-purple-400 animate-gradient text-glow">360 ĐỘ CINEMATIC</span>
                    </h1>

                    <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto mb-10 font-light leading-relaxed">
                        Giải pháp quay video 360 chuyên nghiệp cho YEP, Gala, Wedding, Bar & Activation.
                        <span className="text-zinc-200">Khuấy động sự kiện, bắt trọn khoảnh khắc.</span>
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <button className="w-full sm:w-auto px-8 py-4 bg-white text-black font-medium rounded-full hover:scale-105 transition-transform flex items-center justify-center gap-2 group">
                            Nhận báo giá ngay
                            <iconify-icon icon="solar:arrow-right-linear" class="group-hover:translate-x-1 transition-transform"></iconify-icon>
                        </button>
                        <button className="w-full sm:w-auto px-8 py-4 border border-zinc-700 bg-zinc-900/50 backdrop-blur text-white font-medium rounded-full hover:bg-zinc-800 transition-colors flex items-center justify-center gap-2">
                            <iconify-icon icon="solar:play-circle-linear" width="20"></iconify-icon>
                            Xem Demo Video
                        </button>
                    </div>

                    {/* Stats/Floating Badges */}
                    <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-white/10 pt-8 max-w-4xl mx-auto">
                        <div>
                            <div className="text-2xl md:text-3xl font-medium text-white tracking-tight">+100</div>
                            <div className="text-xs text-zinc-500 uppercase tracking-wide mt-1">Sự kiện đã làm</div>
                        </div>
                        <div>
                            <div className="text-2xl md:text-3xl font-medium text-white tracking-tight">Hà Nội & HCM</div>
                            <div className="text-xs text-zinc-500 uppercase tracking-wide mt-1">Phủ sóng toàn quốc</div>
                        </div>
                        <div>
                            <div className="text-2xl md:text-3xl font-medium text-white tracking-tight">4K/120fps</div>
                            <div className="text-xs text-zinc-500 uppercase tracking-wide mt-1">Chất lượng Video</div>
                        </div>
                        <div>
                            <div className="text-2xl md:text-3xl font-medium text-white tracking-tight">Instant</div>
                            <div className="text-xs text-zinc-500 uppercase tracking-wide mt-1">Lấy video ngay</div>
                        </div>
                    </div>
                </div>
            </header>

            {/* Intro Section */}
            <section className="py-20 md:py-32 bg-zinc-900/30 border-y border-white/5">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight mb-4">Chúng tôi là ai?</h2>
                    <p className="text-zinc-400 max-w-3xl mx-auto text-lg leading-relaxed">
                        <strong className="text-white">ZINESS PRODUCTION</strong> là đơn vị tiên phong cung cấp giải pháp hình ảnh tương tác công nghệ cao.
                        Chúng tôi chuyên <span className="text-purple-400">Cho thuê Video Booth 360</span> trọn gói và
                        <span className="text-blue-400">Bán bục xoay 360 độ</span> thông minh. Biến mọi sự kiện trở thành sân khấu trình diễn ánh sáng và chuyển động.
                    </p>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-24 relative overflow-hidden">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        <div className="flex flex-col items-center text-center p-6 bg-zinc-900/50 rounded-2xl border border-white/5 backdrop-blur hover:bg-zinc-800/50 transition-colors">
                            <iconify-icon icon="solar:camera-square-linear" class="text-4xl text-purple-400 mb-4"></iconify-icon>
                            <h4 className="text-white font-medium mb-2">Thiết bị hiện đại</h4>
                            <p className="text-xs text-zinc-500">GoPro đời mới nhất, hình ảnh sắc nét 4K.</p>
                        </div>
                        <div className="flex flex-col items-center text-center p-6 bg-zinc-900/50 rounded-2xl border border-white/5 backdrop-blur hover:bg-zinc-800/50 transition-colors">
                            <iconify-icon icon="solar:users-group-rounded-linear" class="text-4xl text-blue-400 mb-4"></iconify-icon>
                            <h4 className="text-white font-medium mb-2">Đội ngũ chuyên nghiệp</h4>
                            <p className="text-xs text-zinc-500">Kỹ thuật viên nhiệt tình, hỗ trợ khách hàng tối đa.</p>
                        </div>
                        <div className="flex flex-col items-center text-center p-6 bg-zinc-900/50 rounded-2xl border border-white/5 backdrop-blur hover:bg-zinc-800/50 transition-colors">
                            <iconify-icon icon="solar:clock-circle-linear" class="text-4xl text-green-400 mb-4"></iconify-icon>
                            <h4 className="text-white font-medium mb-2">Setup thần tốc</h4>
                            <p className="text-xs text-zinc-500">Luôn đến sớm, lắp đặt nhanh gọn.</p>
                        </div>
                        <div className="flex flex-col items-center text-center p-6 bg-zinc-900/50 rounded-2xl border border-white/5 backdrop-blur hover:bg-zinc-800/50 transition-colors">
                            <iconify-icon icon="solar:map-point-linear" class="text-4xl text-orange-400 mb-4"></iconify-icon>
                            <h4 className="text-white font-medium mb-2">Phủ sóng toàn quốc</h4>
                            <p className="text-xs text-zinc-500">Có mặt tại Hà Nội, TP.HCM và các tỉnh lân cận.</p>
                        </div>
                    </div>
                </div>
            </section>

        </motion.div>
    );
}

export default Home;
