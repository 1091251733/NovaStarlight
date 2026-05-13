import { motion } from "framer-motion";

const products = [
    {
        icon: (
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
            </svg>
        ),
        title: "星耀 AI 平台",
        desc: "基于自研大语言模型，为企业提供智能客服、文档理解、代码生成等全方位 AI 能力，让每个业务环节都充满智慧。",
        tag: "人工智能",
        gradient: "from-cyan-500 to-blue-500",
        bgGradient: "from-cyan-500/10 to-blue-500/5",
    },
    {
        icon: (
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
            </svg>
        ),
        title: "星云云计算基础设施",
        desc: "高性能弹性云服务器、容器编排与 Serverless 架构，极致弹性伸缩能力，从容应对万亿级请求流量。",
        tag: "云计算",
        gradient: "from-purple-500 to-pink-500",
        bgGradient: "from-purple-500/10 to-pink-500/5",
    },
    {
        icon: (
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" />
            </svg>
        ),
        title: "星河大数据分析引擎",
        desc: "PB 级数据实时处理，AI 驱动的智能洞察，让复杂数据一目了然，辅助企业做出精准决策。",
        tag: "大数据",
        gradient: "from-emerald-500 to-teal-500",
        bgGradient: "from-emerald-500/10 to-teal-500/5",
    },
    {
        icon: (
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
            </svg>
        ),
        title: "星盾安全防护体系",
        desc: "多层次纵深防御，AI 智能威胁检测，实时监控与自动化响应，为您的数字资产构建最坚固的护城河。",
        tag: "网络安全",
        gradient: "from-orange-500 to-red-500",
        bgGradient: "from-orange-500/10 to-red-500/5",
    },
    {
        icon: (
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125v-3.75" />
            </svg>
        ),
        title: "星链物联网平台",
        desc: "连接亿万设备，边缘计算与云端协同，实时数据处理与智能控制，让万物互联变得简单可靠。",
        tag: "物联网",
        gradient: "from-amber-500 to-yellow-500",
        bgGradient: "from-amber-500/10 to-yellow-500/5",
    },
    {
        icon: (
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
            </svg>
        ),
        title: "星创开发者平台",
        desc: "一站式 API 集市、低代码开发工具与开源生态，赋能全球开发者快速构建下一代应用。",
        tag: "开发者工具",
        gradient: "from-sky-500 to-indigo-500",
        bgGradient: "from-sky-500/10 to-indigo-500/5",
    },
];

const Products = () => {
    return (
        <section id="products" className="relative bg-gray-950 py-24 sm:py-32 overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="text-cyan-400 font-semibold text-sm tracking-widest uppercase">
                        产品与解决方案
                    </span>
                    <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
                        六大核心产品
                        <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">矩阵</span>
                    </h2>
                    <p className="mt-4 max-w-xl mx-auto text-gray-400 text-base">
                        覆盖 AI、云计算、大数据、安全、物联网、开发者工具六大领域，为您提供全栈式科技解决方案。
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {products.map((product, i) => (
                        <motion.div
                            key={product.title}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ delay: i * 0.1, duration: 0.6 }}
                            whileHover={{ y: -8, transition: { duration: 0.3 } }}
                            className="group relative bg-gray-900/50 border-gray-800 hover:border-cyan-500/30 rounded-2xl p-6 sm:p-8 transition-colors duration-500 overflow-hidden cursor-pointer"
                        >
                            <div className={`relative w-12 h-12 rounded-xl bg-gradient-to-br ${product.bgGradient} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                                <span className={`bg-gradient-to-r ${product.gradient} bg-clip-text text-transparent`}>
                                    {product.icon}
                                </span>
                            </div>

                            <span className={`inline-block px-2.5 py-0.5 rounded-full text-xs font-medium border ${product.gradient.includes('cyan') ? 'border-cyan-500/20' : product.gradient.includes('purple') ? 'border-purple-500/20' : product.gradient.includes('emerald') ? 'border-emerald-500/20' : product.gradient.includes('orange') ? 'border-orange-500/20' : product.gradient.includes('amber') ? 'border-amber-500/20' : 'border-sky-500/20'}`}>
                                <span className={`bg-gradient-to-r ${product.gradient} bg-clip-text text-transparent`}>
                                    {product.tag}
                                </span>
                            </span>

                            <h3 className="mt-3 text-lg font-bold text-white transition-colors duration-300">
                                {product.title}
                            </h3>

                            <p className="mt-2 text-sm text-gray-400 leading-relaxed">
                                {product.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Products;
