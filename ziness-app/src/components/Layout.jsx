import React from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';

function Layout() {
    const location = useLocation();

    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);

    const getLinkClass = (path) => {
        return location.pathname === path
            ? "text-white border-b-2 border-purple-500 pb-1 font-medium transition-all"
            : "hover:text-white transition-colors pb-1";
    };

    return (
        <div className="flex flex-col w-full">
            {/* Background elements */}
            <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-1/2 h-1/2 bg-purple-900/20 rounded-full blur-[120px]"></div>
                <div className="absolute bottom-[-10%] right-[-10%] w-1/2 h-1/2 bg-blue-900/20 rounded-full blur-[120px]"></div>
            </div>

            <nav className="fixed w-full z-50 top-0 left-0 border-b border-white/5 bg-black/70 backdrop-blur-md">
                <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
                    <Link to="/" className="text-xl tracking-tight font-medium text-white flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-purple-500 to-blue-500 flex items-center justify-center text-xs font-bold">Z</div>
                        ZINESS
                    </Link>

                    <div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400 uppercase tracking-widest text-[11px]">
                        <Link to="/services" className={getLinkClass('/services')}>Dịch vụ</Link>
                        <Link to="/product" className={getLinkClass('/product')}>Sản phẩm</Link>
                        <Link to="/projects" className={getLinkClass('/projects')}>Dự án</Link>
                        <Link to="/blog" className={getLinkClass('/blog')}>Blog</Link>
                    </div>

                    <div className="flex items-center gap-4">
                        <div className="hidden lg:flex flex-col items-end text-xs leading-tight">
                            <span className="text-zinc-500">Hotline 24/7</span>
                            <span className="text-white font-medium tracking-wide">079 359 2018</span>
                        </div>
                        <button className="bg-white text-black text-sm font-medium px-4 py-2 rounded-full hover:bg-zinc-200 transition-colors">
                            Nhận báo giá
                        </button>
                    </div>
                </div>
            </nav>

            <main className="flex-grow w-full">
                <Outlet />
            </main>

            <footer className="w-full bg-black border-t border-zinc-900 pt-16 pb-8">
                <div className="container mx-auto px-6">
                    <div className="grid md:grid-cols-4 gap-12 mb-12">
                        <div className="col-span-1 md:col-span-2">
                            <Link to="/" className="text-2xl tracking-tight font-medium text-white flex items-center gap-2 mb-6">
                                <div className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center text-xs font-bold">Z</div>
                                ZINESS PRODUCTION
                            </Link>
                            <p className="text-zinc-500 text-sm max-w-sm mb-6 leading-relaxed">
                                Đơn vị hàng đầu về giải pháp hình ảnh tương tác tại Việt Nam. Mang công nghệ Video Booth 360 chuẩn quốc tế đến sự kiện của bạn.
                            </p>
                            <div className="flex gap-4">
                                <a href="#" className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors"><iconify-icon icon="solar:facebook-linear" width="20"></iconify-icon></a>
                                <a href="#" className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors"><iconify-icon icon="solar:instagram-linear" width="20"></iconify-icon></a>
                                <a href="#" className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors"><iconify-icon icon="solar:videocamera-linear" width="20"></iconify-icon></a>
                            </div>
                        </div>

                        <div>
                            <h4 className="text-white font-medium mb-4">Dịch vụ</h4>
                            <ul className="space-y-2 text-sm text-zinc-500">
                                <li><Link to="/services" className="hover:text-purple-400 transition-colors">Thuê Video Booth 360</Link></li>
                                <li><Link to="/product" className="hover:text-purple-400 transition-colors">Mua Bục Xoay 360</Link></li>
                                <li><a href="#" className="hover:text-purple-400 transition-colors">Photobooth Chụp Lấy Ngay</a></li>
                                <li><a href="#" className="hover:text-purple-400 transition-colors">Quay phim sự kiện</a></li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="text-white font-medium mb-4">Liên hệ</h4>
                            <ul className="space-y-2 text-sm text-zinc-500">
                                <li className="flex items-start gap-2">
                                    <iconify-icon icon="solar:phone-linear" class="mt-0.5"></iconify-icon>
                                    079 359 2018
                                </li>
                                <li className="flex items-start gap-2">
                                    <iconify-icon icon="solar:letter-linear" class="mt-0.5"></iconify-icon>
                                    contact@ziness.vn
                                </li>
                                <li className="flex items-start gap-2">
                                    <iconify-icon icon="solar:map-point-linear" class="mt-0.5"></iconify-icon>
                                    Hà Nội & TP. Hồ Chí Minh
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="border-t border-zinc-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-zinc-600">
                        <p>© 2026 Ziness Production. All rights reserved.</p>
                        <div className="flex gap-6">
                            <a href="#" className="hover:text-zinc-400">Điều khoản sử dụng</a>
                            <a href="#" className="hover:text-zinc-400">Chính sách bảo mật</a>
                        </div>
                    </div>
                </div>
            </footer>

            {/* Floating Action Buttons */}
            <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-50">
                <a href="https://zalo.me/0793592018" target="_blank" className="w-14 h-14 rounded-full bg-blue-600 flex items-center justify-center text-white shadow-lg shadow-blue-900/50 hover:scale-110 transition-transform cursor-pointer relative group">
                    <span className="absolute right-full mr-3 bg-zinc-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">Chat Zalo</span>
                    <span className="font-bold text-xs">Zalo</span>
                </a>
                <a href="tel:0793592018" className="w-14 h-14 rounded-full bg-white flex items-center justify-center text-black shadow-lg hover:scale-110 transition-transform cursor-pointer animate-pulse relative group">
                    <span className="absolute right-full mr-3 bg-zinc-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">Gọi ngay</span>
                    <iconify-icon icon="solar:phone-calling-linear" width="24"></iconify-icon>
                </a>
            </div>
        </div>
    );
}

export default Layout;
