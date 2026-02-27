import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

function Blog() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="pt-24 pb-24"
        >
            <Helmet>
                <title>Blog & Kinh Nghiệm | ZINESS PRODUCTION</title>
                <meta name="description" content="Chia sẻ kinh nghiệm tổ chức sự kiện, lý do tại sao Video Booth 360 là xu hướng và so sánh các loại bục xoay trên thị trường." />
            </Helmet>

            {/* Blog Section */}
            <section className="bg-zinc-900/30" id="blog">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-medium text-white tracking-tight mb-12">Kinh nghiệm tổ chức sự kiện</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Article 1 */}
                        <article className="group cursor-pointer">
                            <div className="aspect-video bg-zinc-800 rounded-xl mb-4 overflow-hidden">
                                <div className="w-full h-full bg-zinc-700 group-hover:scale-105 transition-transform duration-500"></div>
                            </div>
                            <div className="text-purple-400 text-xs font-medium mb-2 uppercase">Tips</div>
                            <h3 className="text-lg font-medium text-white mb-2 group-hover:text-purple-400 transition-colors">Tại sao Video Booth 360 là xu hướng Year End Party 2024?</h3>
                            <p className="text-sm text-zinc-500 line-clamp-2">Khám phá lý do tại sao các doanh nghiệp chuyển từ photobooth truyền thống sang video 360...</p>
                        </article>
                        {/* Article 2 */}
                        <article className="group cursor-pointer">
                            <div className="aspect-video bg-zinc-800 rounded-xl mb-4 overflow-hidden">
                                <div className="w-full h-full bg-zinc-700 group-hover:scale-105 transition-transform duration-500"></div>
                            </div>
                            <div className="text-blue-400 text-xs font-medium mb-2 uppercase">Guide</div>
                            <h3 className="text-lg font-medium text-white mb-2 group-hover:text-blue-400 transition-colors">Quy trình thuê 360 Booth chuyên nghiệp cần biết</h3>
                            <p className="text-sm text-zinc-500 line-clamp-2">Những lưu ý về không gian, ánh sáng và kịch bản quay để có video đẹp nhất.</p>
                        </article>
                        {/* Article 3 */}
                        <article className="group cursor-pointer">
                            <div className="aspect-video bg-zinc-800 rounded-xl mb-4 overflow-hidden">
                                <div className="w-full h-full bg-zinc-700 group-hover:scale-105 transition-transform duration-500"></div>
                            </div>
                            <div className="text-green-400 text-xs font-medium mb-2 uppercase">Tech</div>
                            <h3 className="text-lg font-medium text-white mb-2 group-hover:text-green-400 transition-colors">So sánh Bục xoay 360 độ các loại trên thị trường</h3>
                            <p className="text-sm text-zinc-500 line-clamp-2">Phân biệt các loại động cơ, kích thước bàn đứng và độ ổn định.</p>
                        </article>
                    </div>
                </div>
            </section>

        </motion.div>
    );
}

export default Blog;
