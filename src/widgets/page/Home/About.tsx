import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

// 数字滚动动画 Hook
const useCountUp = (end: number, duration: number = 200, startCounting: boolean) => {
    const [count, setCount] = useState(0);
    const frameRef = useRef<number>(0);

    useEffect(() => {
        if (!startCounting) return;
        const startTime = performance.now();

        const animate = (now: number) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // easeOutExpo
            const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
            setCount(Math.floor(eased * end));
            if (progress < 1) {
                frameRef.current = requestAnimationFrame(animate);
            }
        };

        frameRef.current = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(frameRef.current);
    }, [end, duration, startCounting]);

    return count;
};

const stats = [
    { value: 500, suffix: "+", label: "企业客户", desc: "覆盖金融、医疗、制造等 20+ 行业" },
    { value: 99.99, suffix: "%", label: "系统可用性", desc: "全年 SLA 保障，稳定可靠" },
    { value: 150, suffix: "亿+", label: "日均数据处理量", desc: "PB 级实时数据吞吐能力" },
    { value: 300, suffix: "+", label: "技术专利", desc: "持续创新，构筑核心竞争力" },
];

const techStack = [
    { name: "大语言模型", icon: "🧠" },
    { name: "Kubernetes", icon: "☸️" },
    { name: "分布式存储", icon: "💾" },
    { name: "实时流计算", icon: "⚡" },
    { name: "AI 安全引擎", icon: "🛡️" },
    { name: "边缘计算", icon: "🌐" },
    { name: "Graph Neural Network", icon: "🔗" },
    { name: "量子计算", icon: "⚛️" },
];

const About = () => {
    const [inView, setInView] = useState(false);
    const sectionRef = useRef<HTMLElement>(null);

    const count500 = useCountUp(500, 200, inView);
    const count999 = useCountUp(999, 200, inView);
    const count150 = useCountUp(150, 200, inView);
    const count300 = useCountUp(300, 200, inView);

    const displayValues = [count500, count999, count150, count300];

    return (
        <section
            id="about"
            ref={sectionRef}
            className="relative bg-gray-950 py-24 sm:py-32 overflow-hidden"
        >
            {/* 居中的光晕 */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-500/5 rounded-full blur-[120px]" />

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* 标题 */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    onAnimationComplete={() => setInView(true)}
                    className="text-center mb-20"
                >
                    <span className="text-cyan-400 font-semibold text-sm tracking-widest uppercase">
                        关于我们
                    </span>
                    <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
                        以技术驱动
                        <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">世界变革</span>
                    </h2>
                    <p className="mt-4 max-w-2xl mx-auto text-gray-400 text-base">
                        成立于 2019 年，星耀科技汇聚全球顶尖 AI 科学家与工程师，
                        致力于打造世界级的基础科技设施，推动各行各业的智能化升级。
                    </p>
                </motion.div>

                {/* 数据统计 */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-24">
                    {stats.map((stat, i) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 0.5 }}
                            className="text-center group"
                        >
                            <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
                                {displayValues[i]}
                                <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                                    {stat.suffix}
                                </span>
                            </div>
                            <div className="mt-2 text-sm font-semibold text-gray-300">{stat.label}</div>
                            <div className="mt-1 text-xs text-gray-500">{stat.desc}</div>
                        </motion.div>
                    ))}
                </div>

                {/* 技术栈 */}
                <div className="text-center mb-10">
                    <h3 className="text-2xl font-bold text-white">核心技术栈</h3>
                    <p className="mt-2 text-gray-400 text-sm">我们不断探索前沿技术，保持行业领先地位</p>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                    {techStack.map((tech, i) => (
                        <motion.div
                            key={tech.name}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.06, duration: 0.4 }}
                            whileHover={{ scale: 1.05, borderColor: "rgba(34,211,238,0.5)" }}
                            className="flex items-center gap-3 bg-gray-900/50 border-gray-800 rounded-xl px-4 py-3 transition-all duration-300"
                        >
                            <span className="text-xl">{tech.icon}</span>
                            <span className="text-sm font-medium text-gray-300">{tech.name}</span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default About;
