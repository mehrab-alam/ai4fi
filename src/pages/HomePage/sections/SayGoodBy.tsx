import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { useTheme } from "../../../context/ThemeContext";

const images = [
    {
        src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80",
        alt: "Mountains",
        startX: "150vw",
        startY: "-150vh",
        endX: "8px",
        endY: "-8px",
        rotate: -4,
        zIndex: 40,
    },
    {
        src: "https://images.unsplash.com/photo-1439853949212-36589f9f4c27?w=600&q=80",
        alt: "Forest",
        startX: "-150vw",
        startY: "-150vh",
        endX: "-8px",
        endY: "8px",
        rotate: 3,
        zIndex: 30,
    },
    {
        src: "https://images.unsplash.com/photo-1504701954957-2010ec3bcec1?w=600&q=80",
        alt: "Ocean",
        startX: "150vw",
        startY: "150vh",
        endX: "4px",
        endY: "4px",
        rotate: -2,
        zIndex: 20,
    },
    {
        src: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=600&q=80",
        alt: "Desert",
        startX: "-150vw",
        startY: "150vh",
        endX: "-4px",
        endY: "-4px",
        rotate: 5,
        zIndex: 10,
    },
];

const ScrollImageReveal: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { isDark } = useTheme();

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    // Header animations
    const headerOpacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);
    const headerY = useTransform(scrollYProgress, [0, 0.2], [40, 0]);

    // Background gradient pulse (subtle)
    const bgOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.5, 1, 0.7]);

    return (
        <div ref={containerRef} className="relative h-[300vh] w-full bg-background border-t border-border/50">
            {/* Sticky Wrapper */}
            <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">
                {/* Background Glow */}
                <motion.div
                    style={{ opacity: bgOpacity }}
                    className={`absolute inset-0 pointer-events-none transition-colors duration-700 ${isDark
                        ? "bg-[radial-gradient(circle_at_50%_50%,rgba(8,145,178,0.1),transparent_70%)]"
                        : "bg-[radial-gradient(circle_at_50%_50%,rgba(8,145,178,0.05),transparent_70%)]"
                        }`}
                />

                {/* Noise texture overlay */}
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

                {/* Text Content */}
                <motion.div
                    style={{ opacity: headerOpacity, y: headerY }}
                    className="absolute top-16 md:top-24 left-8 md:left-16 z-50 max-w-2xl px-6"
                >
                    <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] text-brand-color mb-4 block">
                        Visual Portfolio
                    </span>
                    <h2 className="text-4xl md:text-7xl font-black leading-[0.9] tracking-tighter mb-6">
                        WHERE <span className="italic text-brand-color">WORLDS</span><br />
                        CONVERGE.
                    </h2>
                    <p className="text-muted-foreground text-sm md:text-lg max-w-md leading-relaxed font-medium">
                        Scroll to witness four perspectives collide — each fragment of beauty racing from the corners of the universe to find its center.
                    </p>
                </motion.div>

                {/* Centered Image Stack */}
                <div className="relative w-48 h-48 md:w-64 md:h-64 flex items-center justify-center">
                    {images.map((img, i) => {
                        // Progress for each image (they fly in slightly staggered)
                        const startProgress = i * 0.05;
                        const endProgress = 0.5 + i * 0.05;

                        // eslint-disable-next-line react-hooks/rules-of-hooks
                        const x = useTransform(
                            scrollYProgress,
                            [startProgress, endProgress],
                            [img.startX, img.endX]
                        );
                        // eslint-disable-next-line react-hooks/rules-of-hooks
                        const y = useTransform(
                            scrollYProgress,
                            [startProgress, endProgress],
                            [img.startY, img.endY]
                        );
                        // eslint-disable-next-line react-hooks/rules-of-hooks
                        const rotation = useTransform(
                            scrollYProgress,
                            [startProgress, endProgress],
                            [0, img.rotate]
                        );
                        // eslint-disable-next-line react-hooks/rules-of-hooks
                        const scale = useTransform(
                            scrollYProgress,
                            [startProgress, endProgress],
                            [1.5, 1]
                        );

                        return (
                            <motion.div
                                key={i}
                                style={{
                                    x,
                                    y,
                                    rotate: rotation,
                                    scale,
                                    zIndex: img.zIndex,
                                }}
                                className="absolute w-40 h-40 md:w-56 md:h-56 bg-white p-2 pb-6 rounded-2xl shadow-2xl border border-white/10 overflow-hidden"
                            >
                                <img
                                    src={img.src}
                                    alt={img.alt}
                                    className="w-full h-full object-cover rounded-xl"
                                />
                                <div className="absolute bottom-2 left-0 right-0 text-center">
                                    <span className="text-[10px] font-bold tracking-widest text-black/30 uppercase">
                                        {img.alt}
                                    </span>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Scroll Indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    style={{ opacity: useTransform(scrollYProgress, [0, 0.1], [1, 0]) }}
                    className="absolute bottom-10 flex flex-col items-center gap-2 text-muted-foreground uppercase text-[10px] tracking-[0.2em] font-bold"
                >
                    <div className="w-[1px] h-12 bg-gradient-to-b from-brand-color to-transparent animate-bounce" />
                    Scroll
                </motion.div>
            </div>

            {/* Spacer for scroll depth */}
            <div className="h-screen w-full flex items-center justify-center bg-secondary/30">
                <div className="max-w-4xl text-center px-6">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-brand-color/10 border border-brand-color/20 text-brand-color text-[10px] font-bold uppercase tracking-widest mb-6">
                        The Collection
                    </span>
                    <h3 className="text-3xl md:text-5xl font-black tracking-tight mb-8">
                        ALL FOUR WORLDS, UNITED.
                    </h3>
                    <p className="text-muted-foreground text-lg md:text-xl font-medium tracking-tight leading-relaxed max-w-2xl mx-auto">
                        Mountains, forests, oceans, and deserts — every landscape tells a story.
                        Together, they form the full tapestry of our planet's breathtaking beauty.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ScrollImageReveal;