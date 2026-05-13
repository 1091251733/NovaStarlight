const Footer = () => {
    const currentYear = new Date().getFullYear();

    const footerLinks = [
        {
            title: "产品",
            links: [
                { name: "星耀 AI 平台", href: "#products" },
                { name: "星云云计算", href: "#products" },
                { name: "星河大数据", href: "#products" },
                { name: "星盾安全", href: "#products" },
            ],
        },
        {
            title: "公司",
            links: [
                { name: "关于我们", href: "#about" },
                { name: "加入我们", href: "#" },
                { name: "新闻动态", href: "#" },
                { name: "合作伙伴", href: "#" },
            ],
        },
        {
            title: "支持",
            links: [
                { name: "帮助中心", href: "#" },
                { name: "开发者文档", href: "#" },
                { name: "API 状态", href: "#" },
                { name: "联系我们", href: "#contact" },
            ],
        },
        {
            title: "法律",
            links: [
                { name: "隐私政策", href: "#" },
                { name: "服务条款", href: "#" },
                { name: "Cookie 政策", href: "#" },
            ],
        },
    ];

    return (
        <footer className="relative bg-gray-950 border-t border-cyan-500/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
                    {/* Logo & 简介 */}
                    <div className="col-span-2 md:col-span-1">
                        <a href="#home" className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center">
                                <span className="text-white font-bold text-base">N</span>
                            </div>
                            <span className="text-lg font-bold text-white">
                                Nova<span className="text-cyan-400">Starlight</span>
                            </span>
                        </a>
                        <p className="mt-3 text-sm text-gray-500 leading-relaxed">
                            探索下一代 AI 解决方案，用智能科技重塑数字未来。
                        </p>
                        <div className="flex gap-3 mt-5">
                            {[
                                <svg key="github" className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" /></svg>,
                                <svg key="twitter" className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>,
                                <svg key="linkedin" className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>,
                            ].map((icon, i) => (
                                <a
                                    key={i}
                                    href="#"
                                    className="w-8 h-8 rounded-lg bg-gray-900 flex items-center justify-center text-gray-400 hover:text-cyan-400 hover:bg-gray-800 transition-colors"
                                >
                                    {icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* 链接 */}
                    {footerLinks.map((col) => (
                        <div key={col.title}>
                            <h4 className="text-sm font-semibold text-white mb-4">{col.title}</h4>
                            <ul className="space-y-2.5">
                                {col.links.map((link) => (
                                    <li key={link.name}>
                                        <a
                                            href={link.href}
                                            className="text-sm text-gray-500 hover:text-cyan-400 transition-colors duration-200"
                                        >
                                            {link.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* 底部 */}
                <div className="mt-14 pt-8 border-t border-gray-800/50 flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-xs text-gray-600">
                        &copy; {currentYear} NovaStarlight 星耀科技. All rights reserved.
                    </p>
                    <p className="text-xs text-gray-600">
                        Made with ❤️ by NovaStarlight Team
                    </p>
                </div>
            </div>

            {/* 底部发光条 */}
            <div className="h-0.5 bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />
        </footer>
    );
};

export default Footer;
