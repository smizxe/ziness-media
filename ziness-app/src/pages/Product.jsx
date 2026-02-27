import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

function Product() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="pt-24 pb-24"
        >
            <Helmet>
                <title>Sản Phẩm | Mua Bục Xoay 360 Độ, Thiết Bị Photobooth Thông Minh</title>
                <meta name="description" content="Mua thiết bị bục xoay 360 độ chính hãng từ Ziness Production. Cực kỳ ổn định, bảo hành 12 tháng, phù hợp với các team chạy sự kiện." />
            </Helmet>

            {/* Product Section (Sell) */}
            <section className="py-24 bg-black border-y border-zinc-800" id="product">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <div className="lg:w-1/2 relative">
                            {/* Product Glow */}
                            <div className="absolute inset-0 bg-blue-500/20 blur-[100px] rounded-full"></div>
                            <div className="relative bg-zinc-900 rounded-3xl overflow-hidden border border-zinc-800 aspect-square flex items-center justify-center group">
                                {/* Placeholder for Product Image */}
                                <div className="w-2/3 h-2/3 rounded-full border-4 border-zinc-700 flex items-center justify-center relative shadow-[0_0_50px_rgba(59,130,246,0.3)] group-hover:shadow-[0_0_80px_rgba(59,130,246,0.5)] transition-shadow duration-500">
                                    <div className="w-4 h-4 bg-blue-500 rounded-full absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 shadow-[0_0_20px_#3b82f6]"></div>
                                    <div className="w-3/4 h-[2px] bg-zinc-700 rotate-45"></div>
                                    <div className="text-zinc-500 text-xs font-mono absolute bottom-4">ZINESS 360 PLATFORM</div>
                                </div>
                                <div className="absolute bottom-6 right-6 flex gap-2">
                                    <span className="px-2 py-1 bg-zinc-800 rounded text-[10px] text-zinc-400 border border-zinc-700">100cm</span>
                                    <span className="px-2 py-1 bg-zinc-800 rounded text-[10px] text-zinc-400 border border-zinc-700">Remote</span>
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-1/2">
                            <h3 className="text-blue-500 text-sm font-medium tracking-widest uppercase mb-2">Sản phẩm</h3>
                            <h2 className="text-4xl lg:text-5xl font-medium text-white tracking-tight mb-6">Mua bục xoay 360 độ <br />Chính hãng Ziness</h2>
                            <p className="text-zinc-400 text-lg mb-8 leading-relaxed">
                                Thiết bị hoàn hảo cho các đơn vị làm sự kiện, studio, hoặc cho thuê. Động cơ êm ái, điều khiển từ xa, chịu tải trọng lớn và độ bền cao.
                            </p>

                            <div className="grid grid-cols-2 gap-6 mb-10">
                                <div>
                                    <div className="text-white font-medium mb-1">Cực kỳ ổn định</div>
                                    <p className="text-sm text-zinc-500">Chống rung lắc, video mượt mà.</p>
                                </div>
                                <div>
                                    <div className="text-white font-medium mb-1">Điều khiển tốc độ</div>
                                    <p className="text-sm text-zinc-500">Remote chỉnh tốc độ xoay linh hoạt.</p>
                                </div>
                                <div>
                                    <div className="text-white font-medium mb-1">Dễ dàng lắp đặt</div>
                                    <p className="text-sm text-zinc-500">Setup trong 5 phút, có case đựng.</p>
                                </div>
                                <div>
                                    <div className="text-white font-medium mb-1">Bảo hành 12 tháng</div>
                                    <p className="text-sm text-zinc-500">Hỗ trợ kỹ thuật trọn đời.</p>
                                </div>
                            </div>

                            <button className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 text-white font-medium rounded-full hover:bg-blue-500 transition-colors shadow-lg shadow-blue-900/20">
                                Liên hệ mua ngay
                                <iconify-icon icon="solar:cart-large-minimalistic-linear"></iconify-icon>
                            </button>
                        </div>
                    </div>
                </div>
            </section>

        </motion.div>
    );
}

export default Product;
