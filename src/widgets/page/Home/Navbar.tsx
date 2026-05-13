import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
    { name: "首页", href: "#home" },
    { name: "产品", href: "#products" },
    { name: "关于", href: "#about" },
    { name: "联系我们", href: "#contact" },
];

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
                ? "bg-gray-950/85 backdrop-blur-xl border-b border-cyan-500/20 shadow-lg shadow-cyan-500/5"
                : "bg-transparent"
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16 lg:h-20">
                    {/* Logo */}
                    <a href="#home" className="flex items-center gap-2 group">
                        <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center shadow-lg shadow-cyan-500/30 group-hover:shadow-cyan-500/50 transition-shadow">
                            <span className="text-white font-bold text-lg">N</span>
                        </div>
                        <span className="text-xl font-bold text-white tracking-tight">
                            Nova<span className="text-cyan-400">Starlight</span>
                        </span>
                    </a>

                    {/* Desktop Links */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="relative text-sm font-medium text-gray-300 hover:text-white transition-colors duration-300 group"
                            >
                                {link.name}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all duration-300" />
                            </a>
                        ))}
                    </div>

                    {/* CTA Button */}
                    <div className="hidden md:block">
                        <a
                            href="#contact"
                            className="relative inline-flex items-center px-5 py-2.5 rounded-full text-sm font-semibold text-gray-950 bg-gradient-to-r from-cyan-400 to-blue-500 hover:shadow-lg hover:shadow-cyan-500/40 transition-all duration-300 hover:scale-105 active:scale-95"
                        >
                            免费咨询
                            <svg className="ml-1.5 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </a>
                    </div>

                    {/* Mobile Toggle */}
                    <button
                        onClick={() => setMobileOpen(!mobileOpen)}
                        className="md:hidden relative w-10 h-10 flex items-center justify-center text-gray-300"
                    >
                        <div className="flex flex-col gap-1.5">
                            <motion.span
                                animate={mobileOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
                                className="w-6 h-0.5 bg-current block transition-colors"
                            />
                            <motion.span
                                animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
                                className="w-6 h-0.5 bg-current block"
                            />
                            <motion.span
                                animate={mobileOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
                                className="w-6 h-0.5 bg-current block"
                            />
                        </div>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-gray-950/95 backdrop-blur-xl border-t border-cyan-500/20 overflow-hidden"
                    >
                        <div className="px-4 py-6 space-y-3">
                            {navLinks.map((link, i) => (
                                <motion.a
                                    key={link.name}
                                    href={link.href}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.08 }}
                                    onClick={() => setMobileOpen(false)}
                                    className="block py-2 text-gray-300 hover:text-cyan-400 text-base font-medium transition-colors"
                                >
                                    {link.name}
                                </motion.a>
                            ))}
                            <motion.a
                                href="#contact"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.35 }}
                                onClick={() => setMobileOpen(false)}
                                className="block text-center py-3 rounded-full text-sm font-semibold text-gray-950 bg-gradient-to-r from-cyan-400 to-blue-500"
                            >
                                免费咨询
                            </motion.a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};

export default Navbar;
