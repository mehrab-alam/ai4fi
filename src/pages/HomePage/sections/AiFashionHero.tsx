import { motion } from "motion/react";
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

const FlipCard: React.FC<{
	images: string[];
	className?: string;
	rotate?: number;
	delay?: number;
}> = ({ images, className, rotate = 0, delay = 0 }) => {
	const [isFlipped, setIsFlipped] = useState(false);
	const [index, setIndex] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setIsFlipped((prev) => !prev);
			setTimeout(() => {
				setIndex((prev) => (prev + 1) % images.length);
			}, 300); // Wait for half the flip animation to swap image
		}, 3000 + delay * 1000);
		return () => clearInterval(interval);
	}, [images.length, delay]);

	return (
		<div className={`absolute aspect-[3/4] ${className}`} style={{ perspective: "1000px" }}>
			<motion.div
				className="w-full h-full relative"
				animate={{
					rotateY: isFlipped ? 180 : 0,
					rotate: -8,
				}}
				transition={{ duration: 0.6, ease: "easeInOut" }}
				style={{ transformStyle: "preserve-3d" }}
			>
				{/* Front */}
				<div
					className="absolute inset-0 bg-white p-1.5 md:p-2 rounded-lg shadow-xl"
					style={{ backfaceVisibility: "hidden" }}
				>
					<div className="w-full h-full overflow-hidden rounded bg-gray-100">
						<img
							src={images[index]}
							className="w-full h-full object-cover object-top"
							alt=""
						/>
					</div>
				</div>
				{/* Back */}
				<div
					className="absolute inset-0 bg-white p-1.5 md:p-2 rounded-lg shadow-xl"
					style={{
						backfaceVisibility: "hidden",
						transform: "rotateY(180deg)",
					}}
				>
					<div className="w-full h-full overflow-hidden rounded bg-gray-100">
						<img
							src={images[(index + 1) % images.length]}
							className="w-full h-full object-cover object-top"
							alt=""
						/>
					</div>
				</div>
			</motion.div>
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
	const partners = [
		SvgIcons.amazone,
		SvgIcons.google,
		SvgIcons.netflix,
		SvgIcons.shopify,
		SvgIcons.youtube,
	];

	return (
		<div className="relative overflow-hidden w-full">
			{/* ────── Background Image ────── */}
			<div className="absolute inset-0 z-0 overflow-hidden rounded-xl">
				<img
					src={theme === "dark" ? "./hero_dark_4k.png" : "./hero_bg_4k.png"}
					alt=""
					className="w-full h-full object-cover"
				/>
				<div
					className="absolute inset-0"
					style={{
						background:
							theme === "dark"
								? "linear-gradient(to bottom, rgba(2,12,36,0.7), rgba(2,12,36,0.85))"
								: "linear-gradient(to bottom, rgba(255,255,255,0.75), rgba(255,255,255,0.85))",
					}}
				/>
			</div>
			{/* ================= HERO ================= */}
			<div className="max-w-[90vw] sm:max-w-[80vw]  pt-32 pb-16 md:pt-32  relative min-h-screen mx-auto  text-[var(--foreground)] transition-colors duration-300">
				<section className="px-6 md:px-0 relative z-[20] flex items-center justify-between lg:flex-row flex-col  gap-8 lg:py-0">
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
							<h1 className="font-bold leading-[1.1]  ">
								<span className="text-foreground">Revolutionize   </span>
								<br />
								<span className="text-brand-gradient"> Fashion with AI </span>
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

					{/* RIGHT — Clustered Flip Cards */}
					<div className="w-full lg:w-1/2 relative h-[400px] md:h-[500px] md:h-[600px] mt-16 lg:mt-0 max-w-full mx-auto perspective-[1000px]">
						{[
							{
								id: 1,
								images: [
									"https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=300&q=80",
									"https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80",
								],
								rotate: -8,
								className: "top-[0%] left-[3%] w-[32%] md:w-[25%]",
								delay: 0,
							},
							{
								id: 2,
								images: [
									"https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=300&q=80",
									"https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=600&auto=format&fit=crop",
								],
								rotate: 4,
								className: "top-[-5%] left-[32%] w-[32%] md:w-[25%]",
								delay: 1.5,
							},
							{
								id: 3,
								images: [
									"https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=300&q=80",
									"https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=300&auto=format&fit=crop",
								],
								rotate: 10,
								className: "top-[-10%] left-[62%] w-[32%] md:w-[25%]",
								delay: 3,
							},
							{
								id: 4,
								images: [
									"./models/IMG_2553.JPG.jpeg",
									"./models/IMG_2553.JPG.jpeg",
								],
								rotate: 6,
								className: " top-[18%] md:top-[35%] left-[6%] w-[32%] md:w-[25%]",
								delay: 0.8,
							},
							{
								id: 5,
								images: [
									"./models/IMG_2553.JPG.jpeg",
									"./models/IMG_2553.JPG.jpeg",
								],
								rotate: -6,
								className: "top-[14%] md:top-[30%] left-[36%] w-[32%] md:w-[25%]",
								delay: 2.2,
							},
							{
								id: 6,
								images: [
									"./models/IMG_2472.JPG.jpeg",
									"./models/IMG_2472.JPG.jpeg",
								],
								rotate: 8,
								className: "top-[10%] md:top-[25%] left-[66%] w-[32%] md:w-[25%]",
								delay: 1.2,
							},
							{
								id: 7,
								images: [
									"https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&q=80",
									"https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=300&q=80",
								],
								rotate: -4,
								className: "top-[35%] md:top-[70%] left-[23%] w-[32%] md:w-[25%]",
								delay: 0.5,
							},
							{
								id: 8,
								images: [
									"https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=300&q=80",
									"https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&q=80",
								],
								rotate: 12,
								className: "top-[30%] md:top-[64%] left-[55%] w-[32%] md:w-[25%]",
								delay: 2.8,
							},
						].map((card) => (
							<FlipCard
								key={card.id}
								images={card.images}
								rotate={card.rotate}
								className={card.className}
								delay={card.delay}
							/>
						))}
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
