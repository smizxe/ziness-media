import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

function Services() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="pt-24 pb-24"
        >
            <Helmet>
                <title>Dịch Vụ | Cho Thuê 360 Booth, Video Booth 360 Chuyên Nghiệp</title>
                <meta name="description" content="Khám phá các gói dịch vụ thuê Video Booth 360 của Ziness Production. Chuyên cung cấp thiết bị 360 độ hiện đại cho các sự kiện YEP, Gala, Đám cưới." />
            </Helmet>

            {/* Services & Pricing */}
            <section className="bg-zinc-900/20" id="services">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-medium text-white tracking-tight mb-4">Gói dịch vụ thuê 360 Booth</h2>
                        <p className="text-zinc-400">Chọn giải pháp phù hợp nhất cho quy mô sự kiện của bạn</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
                        {/* Basic */}
                        <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 hover:border-zinc-600 transition-colors relative">
                            <h3 className="text-xl font-medium text-white mb-2">Basic Package</h3>
                            <p className="text-sm text-zinc-500 mb-6">Phù hợp tiệc sinh nhật, party nhỏ</p>
                            <div className="text-3xl font-medium text-white mb-6 tracking-tight">Liên hệ</div>
                            <ul className="space-y-4 mb-8">
                                <li className="flex items-start gap-3 text-sm text-zinc-300">
                                    <iconify-icon icon="solar:check-circle-linear" class="text-zinc-500 mt-0.5 shrink-0"></iconify-icon>
                                    Máy quay GoPro 10/11
                                </li>
                                <li className="flex items-start gap-3 text-sm text-zinc-300">
                                    <iconify-icon icon="solar:check-circle-linear" class="text-zinc-500 mt-0.5 shrink-0"></iconify-icon>
                                    Kỹ thuật viên hỗ trợ
                                </li>
                                <li className="flex items-start gap-3 text-sm text-zinc-300">
                                    <iconify-icon icon="solar:check-circle-linear" class="text-zinc-500 mt-0.5 shrink-0"></iconify-icon>
                                    Template overlay cơ bản
                                </li>
                                <li className="flex items-start gap-3 text-sm text-zinc-300">
                                    <iconify-icon icon="solar:check-circle-linear" class="text-zinc-500 mt-0.5 shrink-0"></iconify-icon>
                                    Trả video qua QR Code
                                </li>
                            </ul>
                            <button className="block w-full py-3 border border-zinc-700 rounded-xl text-center text-sm font-medium text-white hover:bg-white hover:text-black transition-colors">Nhận báo giá</button>
                        </div>

                        {/* Pro */}
                        <div className="bg-zinc-900 border border-purple-500/50 rounded-3xl p-8 relative shadow-[0_0_30px_rgba(168,85,247,0.1)]">
                            <div className="absolute top-0 right-0 bg-purple-500 text-white text-[10px] uppercase font-bold px-3 py-1 rounded-bl-xl rounded-tr-2xl">Phổ biến nhất</div>
                            <h3 className="text-xl font-medium text-white mb-2 text-purple-400">Pro Package</h3>
                            <p className="text-sm text-zinc-500 mb-6">Tối ưu cho Wedding, Year End Party</p>
                            <div className="text-3xl font-medium text-white mb-6 tracking-tight">Best Value</div>
                            <ul className="space-y-4 mb-8">
                                <li className="flex items-start gap-3 text-sm text-white">
                                    <iconify-icon icon="solar:check-circle-bold" class="text-purple-500 mt-0.5 shrink-0"></iconify-icon>
                                    Tất cả tính năng Basic
                                </li>
                                <li className="flex items-start gap-3 text-sm text-white">
                                    <iconify-icon icon="solar:check-circle-bold" class="text-purple-500 mt-0.5 shrink-0"></iconify-icon>
                                    Thiết kế Overlay & Intro/Outro riêng
                                </li>
                                <li className="flex items-start gap-3 text-sm text-white">
                                    <iconify-icon icon="solar:check-circle-bold" class="text-purple-500 mt-0.5 shrink-0"></iconify-icon>
                                    Đèn trợ sáng chuyên nghiệp
                                </li>
                                <li className="flex items-start gap-3 text-sm text-white">
                                    <iconify-icon icon="solar:check-circle-bold" class="text-purple-500 mt-0.5 shrink-0"></iconify-icon>
                                    Props (phụ kiện) vui nhộn
                                </li>
                                <li className="flex items-start gap-3 text-sm text-white">
                                    <iconify-icon icon="solar:check-circle-bold" class="text-purple-500 mt-0.5 shrink-0"></iconify-icon>
                                    iPad Sharing Station
                                </li>
                            </ul>
                            <button className="block w-full py-3 bg-purple-600 rounded-xl text-center text-sm font-medium text-white hover:bg-purple-500 transition-colors shadow-lg shadow-purple-900/20">Nhận báo giá ngay</button>
                        </div>

                        {/* Premium */}
                        <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 hover:border-zinc-600 transition-colors relative">
                            <h3 className="text-xl font-medium text-white mb-2">Premium Package</h3>
                            <p className="text-sm text-zinc-500 mb-6">Sự kiện Brand, Launching sản phẩm</p>
                            <div className="text-3xl font-medium text-white mb-6 tracking-tight">VIP</div>
                            <ul className="space-y-4 mb-8">
                                <li className="flex items-start gap-3 text-sm text-zinc-300">
                                    <iconify-icon icon="solar:check-circle-linear" class="text-zinc-500 mt-0.5 shrink-0"></iconify-icon>
                                    Thiết kế Booth 360 Custom 100%
                                </li>
                                <li className="flex items-start gap-3 text-sm text-zinc-300">
                                    <iconify-icon icon="solar:check-circle-linear" class="text-zinc-500 mt-0.5 shrink-0"></iconify-icon>
                                    Hiệu ứng Slow-mo Cinematic cao cấp
                                </li>
                                <li className="flex items-start gap-3 text-sm text-zinc-300">
                                    <iconify-icon icon="solar:check-circle-linear" class="text-zinc-500 mt-0.5 shrink-0"></iconify-icon>
                                    TV màn hình lớn trình chiếu live
                                </li>
                                <li className="flex items-start gap-3 text-sm text-zinc-300">
                                    <iconify-icon icon="solar:check-circle-linear" class="text-zinc-500 mt-0.5 shrink-0"></iconify-icon>
                                    Data collection (thu thập Lead)
                                </li>
                            </ul>
                            <button className="block w-full py-3 border border-zinc-700 rounded-xl text-center text-sm font-medium text-white hover:bg-white hover:text-black transition-colors">Liên hệ tư vấn</button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Quote Form Section */}
            <section className="py-24 relative mt-12" id="quote">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-purple-900/20 pointer-events-none"></div>
                <div className="container mx-auto px-6 relative z-10">
                    <div className="max-w-4xl mx-auto bg-zinc-900 border border-zinc-800 p-8 md:p-12 rounded-3xl shadow-2xl">
                        <div className="text-center mb-10">
                            <h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight mb-4">Nhận báo giá chi tiết</h2>
                            <p className="text-zinc-400">Để lại thông tin, ZINESS sẽ tư vấn gói dịch vụ phù hợp nhất trong 15 phút.</p>
                        </div>

                        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-zinc-300">Họ và tên</label>
                                    <input type="text" placeholder="Nguyễn Văn A" className="w-full bg-black border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all placeholder:text-zinc-700" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-zinc-300">Số điện thoại</label>
                                    <input type="tel" placeholder="09xxxxxxx" className="w-full bg-black border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all placeholder:text-zinc-700" />
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-zinc-300">Loại sự kiện</label>
                                    <select className="w-full bg-black border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all">
                                        <option>Year End Party</option>
                                        <option>Đám cưới (Wedding)</option>
                                        <option>Sinh nhật</option>
                                        <option>Khai trương / Brand Launch</option>
                                        <option>Mua thiết bị</option>
                                        <option>Khác</option>
                                    </select>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-zinc-300">Ngày dự kiến</label>
                                    <input type="date" className="w-full bg-black border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all [color-scheme:dark]" />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium text-zinc-300">Địa điểm tổ chức / Ghi chú</label>
                                <textarea rows="3" placeholder="Ví dụ: Khách sạn Marriott Hà Nội, cần gói Pro..." className="w-full bg-black border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all placeholder:text-zinc-700"></textarea>
                            </div>

                            <button type="submit" className="w-full py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg text-white font-medium text-lg tracking-wide hover:shadow-[0_0_20px_rgba(168,85,247,0.4)] transition-all transform hover:-translate-y-1">
                                Gửi yêu cầu báo giá
                            </button>
                            <p className="text-center text-xs text-zinc-600 mt-4">Cam kết bảo mật thông tin khách hàng 100%</p>
                        </form>
                    </div>
                </div>
            </section>

        </motion.div>
    );
}

export default Services;
