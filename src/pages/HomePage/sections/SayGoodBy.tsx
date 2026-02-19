import { motion, useScroll, useTransform, useSpring } from "motion/react";
import { useRef } from "react";
import KeyFeatures from "./KeyFeatures";
import AIFeatures from "./AIFeatures";
import SectionHeader from "./SectionHeader";
import { TrendingUp } from "lucide-react";
import {
	Advertisement,
	PhotoStudio,
	VirtualTrialRoom,
} from "./KeyFeatureItems";

const IMAGES = [
	{
		id: 1,
		src: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=600&q=80",
		alt: "Portrait Shoot",
		fromX: -60,
		fromY: -45,
		rotate: -9,
		bg: "from-amber-400 to-orange-700",
		size: 270,
		z: 4,
	},
	{
		id: 2,
		src: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600&q=80",
		alt: "Studio Portrait",
		fromX: 60,
		fromY: -45,
		rotate: 7,
		bg: "from-indigo-400 to-purple-900",
		size: 255,
		z: 6,
	},
	{
		id: 3,
		src: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=600&q=80",
		alt: "Fashion Shoot",
		fromX: -60,
		fromY: 45,
		rotate: 5,
		bg: "from-pink-400 to-red-700",
		size: 260,
		z: 5,
	},
	{
		id: 4,
		src: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=600&q=80",
		alt: "Model Shoot",
		fromX: 60,
		fromY: 45,
		rotate: -6,
		bg: "from-emerald-400 to-teal-700",
		size: 248,
		z: 7,
	},
];
export default function SayGoodBySection() {
	const features = [];

	const containerRef = useRef<HTMLDivElement>(null);
	const { scrollYProgress } = useScroll({
		target: containerRef,
		offset: ["start start", "end end"],
	});

	// Smooth out the scroll progress
	const smoothProgress = useSpring(scrollYProgress, {
		stiffness: 100,
		damping: 30,
		restDelta: 0.001,
	});

	// Transitions for Hero
	const heroOpacity = useTransform(
		smoothProgress,
		[0, 0.05, 0.45, 0.55],
		[0, 1, 1, 0],
	);
	const heroScale = useTransform(smoothProgress, [0.4, 0.6], [1, 0.8]);
	const heroY = useTransform(smoothProgress, [0.45, 0.65], ["0%", "-100%"]);

	// Transitions for Next Panels

	// Scroll indicator visibility
	const indicatorOpacity = useTransform(smoothProgress, [0, 0.1], [1, 0]);
	return (
		<div
			ref={containerRef}
			className="relative bg-background"
			style={{
				fontFamily: "'Georgia', serif",
				height: `${3 * 100}vh`,
			}}
		>
			<div className="sticky top-0 h-screen w-full overflow-hidden">
				{/* ── HERO VIEW ── */}
				<motion.div
					className="absolute inset-0 flex flex-col items-center justify-center bg-background z-20"
					style={{ opacity: heroOpacity, scale: heroScale, y: heroY }}
				>
					{/* Glow blob */}
					<div
						className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
						style={{
							width: 700,
							height: 500,
							background:
								"radial-gradient(ellipse, rgba(251,191,36,0.06) 0%, transparent 70%)",
						}}
					/>

					{/* Headline */}
					<div className="text-center whitespace-nowrap z-2 pointer-events-none select-none">
						<p
							className="text-secondary-froeground uppercase mb-5 opacity-70 tracking-widest"
							style={{
								fontSize: 11,
								fontFamily: "'Courier New', monospace",
								letterSpacing: "0.42em",
							}}
						>
							Introducing AI Photography
						</p>
						<h1
							className="text-foreground font-light m-0 leading-none"
							style={{
								fontSize: "clamp(36px,7vw,96px)",
								letterSpacing: "-0.025em",
							}}
						>
							Good Bye
							<br />
							<em
								className="text-brand-gradient font-normal"
								style={{ fontStyle: "italic" }}
							>
								Costly
							</em>
							<br />
							Photo Shoots
						</h1>
						<div className="w-12 h-px bg-brand-color opacity-40 mx-auto mt-8" />
					</div>

					{/* Scattered Images */}
					{IMAGES.map((img, i) => {
						const stagger = i * 0.05;
						// Use explicit useTransform for each image to control its "fly-in"
						const range = [0 + stagger, 0.3 + stagger];
						const x = useTransform(smoothProgress, range, [
							`${img.fromX}vw`,
							"0vw",
						]);
						const y = useTransform(smoothProgress, range, [
							`${img.fromY}vh`,
							"0vh",
						]);
						const rotate = useTransform(smoothProgress, range, [0, img.rotate]);
						const opacity = useTransform(
							smoothProgress,
							[stagger, stagger + 0.1],
							[0, 1],
						);

						return (
							<motion.div
								key={img.id}
								className="absolute rounded overflow-hidden"
								style={{
									width: img.size,
									height: img.size,
									x,
									y,
									rotate,
									opacity,
									zIndex: img.z,
									boxShadow:
										"0 32px 90px rgba(0,0,0,0.9), 0 0 0 1px rgba(255,255,255,0.1)",
								}}
							>
								<div
									className={`absolute inset-0 bg-gradient-to-br ${img.bg}`}
								/>
								<img
									src={img.src}
									alt={img.alt}
									className="w-full h-full object-cover block relative z-10"
								/>
								<div
									className={`absolute inset-0 bg-gradient-to-br ${img.bg} z-20 pointer-events-none`}
									style={{ opacity: 0.22, mixBlendMode: "screen" }}
								/>
								<div
									className="absolute bottom-0 left-0 right-0 z-30 px-3 pb-3 pt-8"
									style={{
										background:
											"linear-gradient(to top,rgba(0,0,0,0.85),transparent)",
									}}
								>
									<p
										className="text-white/70 uppercase tracking-widest m-0"
										style={{
											fontSize: 9,
											fontFamily: "'Courier New', monospace",
										}}
									>
										{img.alt}
									</p>
								</div>
								<div className="absolute inset-0 z-40 border border-white/10 rounded pointer-events-none" />
							</motion.div>
						);
					})}
				</motion.div>
			</div>

			<style>{`
				@keyframes nudge {
					0%, 100% { transform: translateX(-50%) translateY(0); opacity: 0.4 }
					50%      { transform: translateX(-50%) translateY(7px); opacity: 0.9 }
				}
			`}</style>
		</div>
	);
}
