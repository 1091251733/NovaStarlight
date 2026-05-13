import { useState } from "react";
import { motion } from "framer-motion";

const Contact = () => {
    const [formState, setFormState] = useState({
        name: "",
        email: "",
        company: "",
        message: "",
    });
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 300);
        setFormState({ name: "", email: "", company: "", message: "" });
    };

    return (
        <section id="contact" className="relative bg-gray-950 py-24 sm:py-32 overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />
            <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-[128px]" />

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
                    {/* 左侧信息 */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="text-cyan-400 font-semibold text-sm tracking-widest uppercase">
                            联系我们
                        </span>
                        <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
                            准备好开启
                            <br />
                            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                                数字化转型
                            </span>
                            了吗？
                        </h2>
                        <p className="mt-6 text-gray-400 leading-relaxed">
                            无论您是初创企业还是大型集团，我们的专家团队都将为您量身定制最合适的解决方案。
                            填写表单，我们将在 24 小时内与您取得联系。
                        </p>

                        <div className="mt-10 space-y-5">
                            {[
                                {
                                    icon: (
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    ),
                                    text: "1091251733@qq.com",
                                },
                                {
                                    icon: (
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                    ),
                                    text: "18048429819",
                                },
                                {
                                    icon: (
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                    ),
                                    text: "内江市威远县 Kevin 大厦",
                                },
                            ].map((item) => (
                                <div key={item.text} className="flex items-center gap-3 text-gray-400">
                                    <span className="text-cyan-400">{item.icon}</span>
                                    <span className="text-sm">{item.text}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* 右侧表单 */}
                    <motion.form
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        onSubmit={handleSubmit}
                        className="bg-gray-900/50 border-gray-800 rounded-2xl p-6 sm:p-8 space-y-5"
                    >
                        <div className="grid sm:grid-cols-2 gap-4">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1.5">姓名</label>
                                <input
                                    id="name"
                                    type="text"
                                    required
                                    value={formState.name}
                                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                                    className="w-full px-4 py-2.5 rounded-xl bg-gray-800/50 border-gray-700 focus:border-cyan-500/50 text-white text-sm placeholder-gray-500 outline-none transition-colors duration-300"
                                    placeholder="您的姓名"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1.5">邮箱</label>
                                <input
                                    id="email"
                                    type="email"
                                    required
                                    value={formState.email}
                                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                                    className="w-full px-4 py-2.5 rounded-xl bg-gray-800/50 border-gray-700 focus:border-cyan-500/50 text-white text-sm placeholder-gray-500 outline-none transition-colors duration-300"
                                    placeholder="you@company.com"
                                />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-1.5">公司名称</label>
                            <input
                                id="company"
                                type="text"
                                value={formState.company}
                                onChange={(e) => setFormState({ ...formState, company: e.target.value })}
                                className="w-full px-4 py-2.5 rounded-xl bg-gray-800/50 border-gray-700 focus:border-cyan-500/50 text-white text-sm placeholder-gray-500 outline-none transition-colors duration-300"
                                placeholder="您的公司"
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1.5">需求描述</label>
                            <textarea
                                id="message"
                                required
                                rows={4}
                                value={formState.message}
                                onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                                className="w-full px-4 py-2.5 rounded-xl bg-gray-800/50 border-gray-700 focus:border-cyan-500/50 text-white text-sm placeholder-gray-500 outline-none transition-colors duration-300 resize-none"
                                placeholder="请描述您的项目需求..."
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full py-3 rounded-xl text-sm font-semibold text-gray-950 bg-gradient-to-r from-cyan-400 to-blue-500 hover:shadow-xl hover:shadow-cyan-500/30 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
                        >
                            {submitted ? "✓ 提交成功！" : "提交咨询"}
                        </button>
                        {submitted && (
                            <motion.p
                                initial={{ opacity: 0, y: 5 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="text-center text-cyan-400 text-xs"
                            >
                                感谢您的咨询，我们将尽快与您联系！
                            </motion.p>
                        )}
                    </motion.form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
