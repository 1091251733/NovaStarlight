import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

// 粒子系统 - Canvas 实现科技感粒子背景
const ParticleCanvas = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let animationId: number;

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        resize();
        window.addEventListener("resize", resize);

        // 粒子类
        class Particle {
            x: number;
            y: number;
            vx: number;
            vy: number;
            size: number;
            opacity: number;

            constructor(w: number, h: number) {
                this.x = Math.random() * w;
                this.y = Math.random() * h;
                this.vx = (Math.random() - 0.5) * 0.8;
                this.vy = (Math.random() - 0.5) * 0.8;
                this.size = Math.random() * 2 + 0.5;
                this.opacity = Math.random() * 0.5 + 0.1;
            }

            update(w: number, h: number) {
                this.x += this.vx;
                this.y += this.vy;
                if (this.x < 0) this.x = w;
                if (this.x > w) this.x = 0;
                if (this.y < 0) this.y = h;
                if (this.y > h) this.y = 0;
            }

            draw(ctx: CanvasRenderingContext2D) {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(34,211,238,${this.opacity})`;
                ctx.fill();
            }
        }

        const particles: Particle[] = [];
        const count = Math.min(80, Math.floor((canvas.width * canvas.height) / 15000));
        for (let i = 0; i < count; i++) {
            particles.push(new Particle(canvas.width, canvas.height));
        }

        // 连线
        const drawLines = (ctx: CanvasRenderingContext2D) => {
            for (let i = 0; i < particles.length; i++) {
                for (let j = i + 1; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x;
                    const dy = particles[i].y - particles[j].y;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    if (dist < 120) {
                        ctx.beginPath();
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        ctx.strokeStyle = `rgba(34,211,238,${0.08 * (1 - dist / 120)})`;
                        ctx.lineWidth = 0.5;
                        ctx.stroke();
                    }
                }
            }
        };

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            particles.forEach((p) => {
                p.update(canvas.width, canvas.height);
                p.draw(ctx);
            });
            drawLines(ctx);
            animationId = requestAnimationFrame(animate);
        };
        animate();

        return () => {
            cancelAnimationFrame(animationId);
            window.removeEventListener("resize", resize);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 pointer-events-none"
            style={{ opacity: 0.7 }}
        />
    );
};

// 闪烁的光斑
const GlowOrbs = () => (
    <>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-[128px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/15 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/8 rounded-full blur-[150px]" />
    </>
);

const Hero = () => {
    return (
        <section
            id="home"
            className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-950"
        >
            {/* 背景效果 */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-900 via-gray-950 to-black" />
            <GlowOrbs />
            <ParticleCanvas />

            {/* 网格线背景 */}
            <div
                className="absolute inset-0 opacity-[0.03]"
                style={{
                    backgroundImage:
                        "linear-gradient(rgba(34,211,238,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(34,211,238,0.3) 1px, transparent 1px)",
                    backgroundSize: "60px 60px",
                }}
            />

            {/* 主要内容 */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-32">
                {/* Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border-cyan-500/30 bg-cyan-500/5 text-cyan-400 text-sm font-medium mb-8">
                        <span className="relative flex h-2.5 w-2.5">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
                            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-400" />
                        </span>
                        探索下一代 AI 解决方案
                    </span>
                </motion.div>

                {/* 主标题 */}
                <motion.h1
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
                    className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-tight"
                >
                    用智能科技
                    <br />
                    <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
                        重塑数字未来
                    </span>
                </motion.h1>

                {/* 副标题 */}
                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                    className="mt-6 max-w-2xl mx-auto text-base sm:text-lg text-gray-400 leading-relaxed"
                >
                    星耀科技致力于为企业提供前沿的人工智能、云计算与大数据解决方案，
                    帮助客户在数字化转型浪潮中抢占先机，实现指数级增长。
                </motion.p>

                {/* CTA 按钮组 */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.45, ease: "easeOut" }}
                    className="mt-10 flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <a
                        href="#products"
                        className="group relative inline-flex items-center px-8 py-3.5 rounded-full text-base font-semibold text-gray-950 bg-gradient-to-r from-cyan-400 to-blue-500 hover:shadow-xl hover:shadow-cyan-500/30 transition-all duration-300 hover:scale-105 active:scale-95"
                    >
                        了解我们的产品
                        <svg
                            className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                    </a>
                    <a
                        href="#about"
                        className="inline-flex items-center px-8 py-3.5 rounded-full text-base font-semibold text-gray-300 border-gray-700 hover:border-cyan-500/50 hover:text-white transition-all duration-300 hover:scale-105 active:scale-95"
                    >
                        <svg className="mr-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                            />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        观看演示
                    </a>
                </motion.div>

                {/* 滚动提示 */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2 }}
                    className="absolute bottom-10 left-1/2 -translate-x-1/2"
                >
                    <motion.div
                        animate={{ y: [0, 10, 0] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        className="flex flex-col items-center gap-2 text-gray-500"
                    >
                        <span className="text-xs">向下滚动</span>
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                        </svg>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
