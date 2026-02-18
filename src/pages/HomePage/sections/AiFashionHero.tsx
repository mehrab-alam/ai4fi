import { motion, AnimatePresence } from "motion/react";
import React, { useState, useEffect } from "react";
import SvgIcons from "../../../components/SvgIcons";
import BorderBeamAnimation from "../../../components/common/AnimatedBorder";
import { useTheme } from "../../../context/ThemeContext";

/* =======================
   Types
 ======================= */

export interface AiFashionHeroProps {
	heroEyebrow?: string;
	heroDescription?: string;
	primaryCTA?: string;
	secondaryCTA?: string;
}

/* =======================
   Sub-Components
 ======================= */

const FadingImageCard: React.FC<{
	images: string[];
	label: string;
	startDelay?: number;
}> = ({ images, label, startDelay = 0 }) => {
	const [currentIndex, setCurrentIndex] = useState(0);

	useEffect(() => {
		const timeout = setTimeout(() => {
			const interval = setInterval(() => {
				setCurrentIndex((prev) => (prev + 1) % images.length);
			}, 3000);
			// Store interval id for cleanup
			(timeout as any).__interval = interval;
		}, startDelay * 1000);

		return () => {
			clearTimeout(timeout);
			if ((timeout as any).__interval)
				clearInterval((timeout as any).__interval);
		};
	}, [images.length, startDelay]);

	return (
		<div className="glass-card relative z-40 overflow-hidden flex items-center justify-center text-center md:h-64 md:w-64 lg:h-68 lg:w-68 h-32 w-32 hover:glass-card-hover group shadow-2xl">
			{/* Image Stack */}
			{/* Image Stack */}
			<AnimatePresence>
				<motion.img
					key={currentIndex}
					src={images[currentIndex]}
					alt={`${label} ${currentIndex + 1}`}
					initial={{ opacity: 0 }}
					animate={{ opacity: 1, transition: { duration: 2 } }}
					exit={{ opacity: 0, transition: { duration: 0, delay: 2 } }}
					className="absolute rounded-sm inset-0 w-full h-full object-cover object-top"
				/>
			</AnimatePresence>

			{/* Label Overlay */}
			<div className="relative z-10 bg-black/40 backdrop-blur-md px-6 py-2 rounded-full border border-white/20 transform transition-transform group-hover:scale-110">
				<span className="text-xs md:text-sm font-bold text-white uppercase tracking-widest">
					{label}
				</span>
			</div>
		</div>
	);
};

/* =======================
   Component
 ======================= */

const AiFashionHero: React.FC<AiFashionHeroProps> = ({
	heroEyebrow = "AI-Powered Fashion Studio — Est. 2025",
	heroDescription = "Create, Visualize & Advertise with Intelligent AI Models.",
	primaryCTA = "Explore Features",
	secondaryCTA = "Book a Demo",
}) => {
	const { theme } = useTheme();
	const [currentTick, setCurrentTick] = useState(0);

	useEffect(() => {
		const timeout = setTimeout(() => {
			const interval = setInterval(() => {
				setCurrentTick((prev) => prev + 1);
			}, 3000);
			return () => clearInterval(interval);
		}, 3500);

		return () => clearTimeout(timeout);
	}, []);

	const categories = [
		{
			label: "Model",
			images: [
				// "https://images.unsplash.com/photo-1539008835154-33321da040c1?q=80&w=600&auto=format&fit=crop",
				// "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=600&auto=format&fit=crop",
				// "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=600&auto=format&fit=crop",
				"./AI_gen.jpeg",
				"./3.jpeg",
				"./2.jpeg",
			],
		},
		{
			label: "Product",
			images: [
				"https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=600&auto=format&fit=crop",
				"https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=600&auto=format&fit=crop",
				"https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=600&auto=format&fit=crop",
			],
		},
		{
			label: "Ad",
			images: [
				"https://images.unsplash.com/photo-1601924994987-69e26d50dc26?q=80&w=600&auto=format&fit=crop",
				"https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=600&auto=format&fit=crop",
				"https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=600&auto=format&fit=crop",
			],
		},
		{
			label: "Banner",
			images: [
				"https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=600&auto=format&fit=crop",
				"https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=600&auto=format&fit=crop",
				"https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=600&auto=format&fit=crop",
			],
		},
	];
	const partners = [
		SvgIcons.amazone,
		SvgIcons.google,
		SvgIcons.netflix,
		SvgIcons.shopify,
		SvgIcons.youtube,
	];
	return (
		<div >
			{/* ────── Background Image ────── */}
			<div className="absolute inset-0 z-0 overflow-hidden rounded-xl">
				<img
					src={theme === "dark" ? "./dark_bg.png" : "./hero_bg_4k.png"}
					alt=""
					className="w-full h-full object-cover"
				/>
				<div
					className="absolute inset-0"
					style={{
						background: theme === "dark"
							? "linear-gradient(to bottom, rgba(2,12,36,0.7), rgba(2,12,36,0.85))"
							: "linear-gradient(to bottom, rgba(255,255,255,0.75), rgba(255,255,255,0.85))",
					}}
				/>
			</div>
			{/* ================= HERO ================= */}
			<div className="max-w-[90vw] pt-32 pb-16 md:pt-32  relative   min-h-screen mx-auto  text-[var(--foreground)] transition-colors duration-300">
				<section className="px-6 md:px-16 relative z-[20] flex items-center justify-between lg:flex-row flex-col  lg:py-0">
					{/* LEFT */}
					<div className="space-y-8 lg:w-1/2">
						<motion.div
							initial={{ y: -40, opacity: 0 }}
							whileInView={{ y: 0, opacity: 1 }}
							viewport={{ once: true }}
							transition={{ duration: 0.5, delay: 0, ease: "easeOut" }}
						>
							<div className="inline-flex relative items-center gap-2 px-4 py-2.5 border border-border bg-[var(--muted-secondary)] rounded-full text-[10px] md:text-xs uppercase tracking-widest text-brand-gradient shadow-sm">
								<BorderBeamAnimation />
								<span className="relative flex h-2 w-2">
									<span className="absolute inline-flex h-full w-full rounded-full bg-muted-foreground opacity-75"></span>
									<span className="relative inline-flex rounded-full h-2 w-2 bg-muted-foreground"></span>
								</span>
								{heroEyebrow}
							</div>
						</motion.div>

						<motion.div
							initial={{ y: -40, opacity: 0 }}
							whileInView={{ y: 0, opacity: 1 }}
							viewport={{ once: true }}
							transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
						>
							<h1 className="font-bold leading-tight">
								<span className="text-foreground">REVOLUTIONIZE</span>
								<br />
								<span className="text-brand-gradient">FASHION WITH AI.</span>
							</h1>
						</motion.div>

						<motion.div
							initial={{ y: -40, opacity: 0 }}
							whileInView={{ y: 0, opacity: 1 }}
							viewport={{ once: true }}
							transition={{ duration: 0.5, delay: 0.6, ease: "easeOut" }}
						>
							<p className="max-w-xl text-[var(--secondary-foreground)] text-lg">
								{heroDescription}
							</p>
						</motion.div>

						<motion.div
							initial={{ y: -40, opacity: 0 }}
							whileInView={{ y: 0, opacity: 1 }}
							viewport={{ once: true }}
							transition={{ duration: 0.5, delay: 0.9, ease: "easeOut" }}
						>
							<div className="flex flex-wrap gap-4">
								<button
									type="button"
									className="px-8 py-3 md:w-fit w-full rounded-md bg-brand-color text-white hover:opacity-90 transition shadow-lg shadow-brand/20"
								>
									{primaryCTA}
								</button>

								<button
									type="button"
									className="px-8 py-3 md:w-fit w-full border border-[var(--border)] rounded-md hover:border-[var(--brand)] transition hover:bg-[var(--secondary)]"
								>
									{secondaryCTA}
								</button>
							</div>
						</motion.div>
					</div>

					{/* RIGHT */}
					<div className="lg:w-1/2 relative flex items-center justify-center mt-12 lg:mt-0">
						<div className="md:grid md:grid-cols-2 flex flex-wrap items-center gap-4 md:gap-8 md:rotate-[-3deg]">
							{categories.map((cat, i) => (
								<motion.div
									key={i}
									style={{ transformOrigin: "bottom center" }}
									initial={{ x: 200, opacity: 0 }}
									whileInView={{
										x: 0,
										opacity: 1,
										rotate: [0, -3, 2.5, -2, 1.5, -0.5, 0],
									}}
									viewport={{ once: true, amount: 0.3 }}
									transition={{
										delay: i * 0.9,
										duration: 0.8,
										x: { duration: 0.4 },
										opacity: { duration: 0.4 },
										rotate: {
											delay: i * 0.9 + 0.4,
											duration: 0.4,
											ease: "easeOut",
										},
									}}
								>
									<FadingImageCard
										label={cat.label}
										images={cat.images}
										startDelay={3.5}
									/>
								</motion.div>
							))}
						</div>
					</div>
				</section>
				<div className=" px-4 sm:px-6 lg:px-8 relative z-10 py-8 md:pb-8 pt-16">
					<h4 className="text-center  mb-5 font-bold leading-tight">
						Our Trusted Partners
					</h4>
					<div className="md:grid flex flex-wrap items-center justify-between md:place-items-center md:grid-cols-5 gap-6 md:gap-8">
						{partners.map((partner, index) => (
							<motion.div
								key={index}
								initial={{ opacity: 0, y: 0 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.8, delay: index * 0.2 }}
								className="group"
							>
								<i className="leading-0 text-[7rem] text-muted-foreground">
									{" "}
									{partner}
								</i>
							</motion.div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default AiFashionHero;
